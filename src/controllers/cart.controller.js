import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { v4 as uuidv4 } from "uuid";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

function generateReceiptId() {
  return uuidv4();
}

// Product description page
const addToCart = asyncHandler(async (req, res) => {
  // Step 1 : Get product data from frontend
  const { productId } = req.params;
  const { quantity = 1, currency = "INR" } = req.body;

  // Validate quantity
  if (quantity <= 0 || !Number.isInteger(quantity)) {
    throw new ApiError(400, "Quantity must be a positive integer");
  }

  try {
    // Step 2 : Validation
    const product = await Product.findById(productId);
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    // Step 3: Find or create a cart for the user
    let cart = await Cart.findOne({ userId: req.user._id });

    // If cart does not exist, create a new cart
    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        items: [],
        currency: currency || "INR",
        receiptId: generateReceiptId(),
        totalCost: 0,
      });
    }

    // Step 4: Update existing item quantity or add new item
    const existingItemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    // If the item already exists in the cart, update the quantity
    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity = quantity; // Update quantity
      cart.items[existingItemIndex].price = product.discountPrice; // Update price if necessary
      cart.items[existingItemIndex].productSubTotal =
        product.discountPrice * quantity; // Update price if necessary
    }
    // Only add a new item if it does not exist in the cart
    else {
      cart.items.push({
        productId: productId, // Store only the product ID
        quantity,
        price: product.discountPrice, // Store the product's discountPrice
        productSubTotal: product.discountPrice * quantity, // Set price using the product's discountPrice
      });
    }

    // Step 5: Calculate total cost
    cart.totalCost = cart.items.reduce(
      (total, item) => total + item.productSubTotal,
      0
    );

    await cart.save();

    const actionMessage =
      existingItemIndex !== -1
        ? "Product quantity updated in cart"
        : "Product added to cart";
    return res.status(200).json(new ApiResponse(200, cart, actionMessage));
  } catch (err) {
    throw new ApiError(
      500,
      `Something went wrong while adding product to cart ${err.message}`
    );
  }
});

// Get Cart Details
const getUserCart = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.user._id })
      .populate({
        path: "items.productId",
        select:
          "-productRating -stock -category -productDescription -createdAt -updatedAt -__v",
      })
      .select("-userId -_id -items._id -items.price -createdAt -updatedAt -__v");

    if (!cart) {
      throw new ApiError(404, "Cart not found");
    }

    // Process the cart data to include only the first photo URL
    const modifiedCart = {
      ...cart.toObject(),
      items: cart.items.map((item) => ({
        ...item.toObject(),
        productId: {
          ...item.productId.toObject(),
          photos:
            item.productId.photos.length > 0 ? item.productId.photos[0] : [],
        },
      })),
    };

    return res.status(200).json(new ApiResponse(200, modifiedCart, "Cart found"));
  } catch (err) {
    console.error("Error while fetching cart : ", err);
    throw new ApiError(
      500,
      `Something went wrong while fetching cart ${err.message}`
    );
  }
});

// Remove item from cart
const removeFromCart = asyncHandler(async (req, res) => {
  // Step 1 : Get product data from frontend
  const { productId } = req.params;

  // Validate productId
  if (!productId) {
    throw new ApiError(400, "Product id is required");
  }

  // Step 2: Find the cart
  const cart = await Cart.findOne({ userId: req.user._id });

  // If cart does not exist, throw an error
  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  // Step 3: Find the item in the cart
  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  // If item does not exist in the cart, throw an error
  if (itemIndex === -1) {
    throw new ApiError(404, "Item not found in cart");
  }

  try {
    // Step 4: Remove the item from the cart
    cart.items.splice(itemIndex, 1);

    // Step 5: Calculate total cost
    cart.totalCost = cart.items.reduce(
      (total, item) => total + item.productSubTotal,
      0
    );

    await cart.save();

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Product removed from cart"));
  } catch (err) {
    console.error("Error while removing item from cart : ", err);
    throw new ApiError(
      500,
      `Something went wrong while removing item from cart ${err.message}`
    );
  }
});

export { addToCart, getUserCart, removeFromCart };
