import { User } from "../models/user.model.js";
import { Order } from "../models/order.model.js";
import { Cart } from "../models/cart.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import crypto from "crypto";

// helper function to add adrees in user model
// Function to map shippingInfo to addressSchema fields
const mapShippingInfoToAddress = (shippingInfo) => ({
  shippingAddress: shippingInfo.shippingAddress,
  zip: shippingInfo.zip,
  city: shippingInfo.city,
  state: shippingInfo.state,
  phone: shippingInfo.phone,
});

// Helper function to validate Razorpay signature
const validateRazorpaySignature = (secret, receivedSignature, body) => {
  const shasum = crypto
    .createHmac("sha256", secret)
    .update(JSON.stringify(body));
  const digest = shasum.digest("hex");
  return receivedSignature === digest;
  // return true; // For testing purposes, always return true
};

// Helper function to create order
const createOrder = async (user, razorpayOrderId, shippingInfo, cart) => {
  // Check if an order with the same razorpayOrderId already exists
  const existingOrder = await Order.findOne({ orderId: razorpayOrderId });
  if (existingOrder) {
    throw new ApiError(409, "Order with this Order ID already exists.");
  }

  // Create a new order
  const order = new Order({
    userId: user._id,
    orderId: razorpayOrderId,
    products: cart.items.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
      price: item.price,
      productSubTotal: item.quantity * item.price,
    })),
    totalPrice: cart.totalCost,
    shippingInfo,
    status: "Confirmed",
    extraNotes: shippingInfo.extraNotes || "",
  });

  await order.save();

  if (!order) {
    throw new ApiError(500, "Order could not be created");
  }

  // Update the stock of the products in the order
  for (const item of cart.items) {
    item.productId.stock -= item.quantity;
    await item.productId.save();
  }

  // if user buy first time product then add user address in user model
  const userDetail = await User.findById(user._id);
  // If user is not found, throw an error
  if (!userDetail) {
    throw new ApiError(404, "User not found");
  }

  if (!userDetail.address || userDetail.address.length === 0) {
    userDetail.address = [mapShippingInfoToAddress(shippingInfo)];
    await userDetail.save();
  }

  // Clear the cart
  cart.items = [];
  cart.totalCost = 0;
  await cart.save();

  return order;
};

// Create order : verify paymnent using razorpay webhook and create order if payment is successful
const verifyPaymentAndOrderCreate = asyncHandler(async (req, res) => {
  const {
    fname,
    lname,
    companyName,
    shippingAddress,
    zip,
    city,
    state,
    phone,
    extraNotes,
  } = req.body;
// console.log("fname",)
  if (
    !fname ||
    !lname ||
    !shippingAddress ||
    !zip ||
    !city ||
    !state ||
    !phone
  ) {
    throw new ApiError(400, "Shipping information is required.");
  }

  // Validate phone number
  let sanitizedPhone = phone.replace(/[-\s]/g, ""); // Remove any spaces or hyphens

  // Check if phone number is 10 digits
  if (sanitizedPhone.length !== 10) {
    throw new ApiError(
      400,
      "Invalid phone number. Please enter 10 digit number"
    );
  }

  // Check if phone number starts with +91
  if (!sanitizedPhone.startsWith("+91")) {
    sanitizedPhone = "+91" + sanitizedPhone;
  }

  // Step 1: define secret of webhooks which is as same as you define when you create webhook
  const secret = process.env.RZP_WEBHOOK_SECRET;

  // Step 2: Extract the signature sent in the request headers
  const receivedSignature = req.headers["x-razorpay-signature"];

  // Step 3: Validate the signature
  if (!validateRazorpaySignature(secret, receivedSignature, req.body)) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Invalid signature"));
  }

  // Step 4: Check if payment is captured
  const paymentEntity = req.body.payload.payment.entity;
  // const paymentEntity = {
  //   status: "captured", // For testing purposes, always set to captured
  //   order_id: "order_49", // For testing purposes, always set to order_123456
  // };

  // If payment is not captured, throw an error
  if (paymentEntity.status !== "captured") {
    throw new ApiError(400, "Payment not captured, unable to process order.");
  }

  // Step 5: Find the cart of the user
  const cart = await Cart.findOne({ userId: req.user._id }).populate(
    "items.productId"
  );

  // If cart is empty, throw an error
  if (!cart || cart.items.length === 0) {
    throw new ApiError(400, "Cart is empty. Please add products to the cart.");
  }

  // Step 6: shipping information
  const shippingInfo = {
    fname,
    lname,
    companyName: companyName || "",
    shippingAddress,
    zip,
    city,
    state,
    phone: sanitizedPhone,
    extraNotes: extraNotes || "",
  };

  // Step 7: Create order by giving userId , razorpay order id, shipping info and products which are in cart
  await createOrder(req.user, paymentEntity.order_id, shippingInfo, cart);

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Order created successfully"));
});

// Get all orders of a user
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ userId: req.user._id }).select(
    "-_id -products.productId -products._id -products.price -products.productSubTotal -shippingInfo -extraNotes -updatedAt -__v"
  );

  // Map through each order to calculate the sum of quantities
  const modifiedOrders = orders.map((order) => {
    const totalQuantity = order.products.reduce(
      (sum, product) => sum + product.quantity,
      0
    );

    // Construct the response without the individual quantities but with total quantity
    return {
      userId: order.userId,
      orderId: order.orderId,
      totalQuantity, // Add the total quantity field
      totalPrice: order.totalPrice,
      status: order.status,
      createdAt: order.createdAt,
    };
  });

  return res
    .status(200)
    .json(new ApiResponse(200, modifiedOrders, "Orders fetched"));
  // return res.status(200).json(new ApiResponse(200, orders, "Orders fetched"));
});

// Get particular order from receipt Id
const getOrderByOrderId = asyncHandler(async (req, res) => {
  const { orderId } = req.params;

  // Validate orderId
  if (!orderId) {
    throw new ApiError(400, "Receipt ID is required");
  }

  try {
    // Find order by orderId and userId
    const order = await Order.findOne({
      orderId: orderId,
      userId: req.user._id, // Ensure the order belongs to the current user
    })
      .populate({
        path: "products.productId",
        select:
          "-shownPrice -discountPrice -productRating -productDescription -stock -createdAt -updatedAt -__v",
      })
      .lean();

    // If order is not found, return an error
    if (!order) {
      throw new ApiError(
        404,
        "Order not found or you do not have permission to view it"
      );
    }

    // Transform the order object to include only the one photo URL
    const transformedOrder = {
      // Copy all properties of the original order object
      ...order,

      // Transform the 'products' array
      products: order.products.map((product) => ({
        // Copy all properties of the current product
        ...product,

        // Transform 'productId' object
        productId: {
          // Copy all properties of the productId object
          ...product.productId,

          // Transform 'photos' array to include only the first URL
          photos:
            product.productId.photos.length > 0
              ? product.productId.photos[0] // If there are photos, keep only the first one
              : [], // If there are no photos, set to an empty array
        },
      })),
    };

    // Return the found order
    return res
      .status(200)
      .json(new ApiResponse(200, transformedOrder, "Order found"));
  } catch (err) {
    throw new ApiError(
      500,
      `Somethinng went frong while fetch order details by orderID ${err.message}`
    );
  }
});

export { verifyPaymentAndOrderCreate, getOrders, getOrderByOrderId };
