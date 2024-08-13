import Razorpay from "razorpay";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create a new order
const createOrder = asyncHandler(async (req, res) => {
  // Step 1: Get total cost, currency and receiptId from the request body
  const { totalCost, currency = "INR", receiptId } = req.body;

  // Step 2: Razorpay instance
  const razorpay = new Razorpay({
    key_id: process.env.RZP_ID, // test key id
    key_secret: process.env.RZP_SECRET, // test secret
  });

  // Step 3: Validate total cost and receiptId
  if (totalCost <= 0) {
    throw new ApiError(400, "Add item in the Cart to proceed");
  }

  if (!receiptId) {
    throw new ApiError(400, "Receipt ID is required");
  }

  try {
    // Step 4: Create a new order
    const order = await razorpay.orders.create({
      amount: totalCost,
      currency: currency,
      receipt: receiptId,
      payment_capture: 1, // Auto capture payment
    });

    // Step 5: Order details to be sent to the client and customize the payment methods
    const orderDetails = {
      order_id: order.id,
      currency: order.currency,
      amount: order.amount,
      config: {
        display: {
          hide: [{ method: "paylater" }, { method: "cardless_emi" }],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    };

    return res
      .status(200)
      .json(new ApiResponse(200, orderDetails, "Order created successfully"));
  } catch (err) {
    console.error(err);
    throw new ApiError(
      500,
      "Something went wrong while creating order :" + err
    );
  }
});

// Fetch payment details
const fetchPaymentDetails = asyncHandler(async (req, res) => {
  // Step 1: Get paymentId from the request params
  const { paymentId } = req.params;

  // Step 2: Razorpay instance
  const razorpay = new Razorpay({
    key_id: process.env.RZP_ID, // test key id
    key_secret: process.env.RZP_SECRET, // test secret
  });

  try {
    // Step 3: Fetch payment details
    const payment = await razorpay.payments.fetch(paymentId); // fetch payment details

    // if payment is not found
    if (!payment) {
      return res.status(500).json("Error at razorpay loading payment");
    }

    const paymentDetails = {
      status: payment.status,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
    };

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          paymentDetails,
          "Payment details fetched successfully"
        )
      );
  } catch (err) {
    throw new ApiError(
      500,
      "Something went wrong while fetching payment details :" + err
    );
  }
});

export { createOrder, fetchPaymentDetails };
