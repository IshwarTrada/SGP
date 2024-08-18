import Razorpay from "razorpay";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create a new order
const createOrder = asyncHandler(async (req, res) => {
  // Step 1: Get total cost, currency and receiptId from the request body
  const { amount, currency = "INR", receiptId = "reciept..." } = req.body;

  // Step 2: Razorpay instance
  const razorpay = new Razorpay({
    key_id: process.env.RZP_ID, // test key id
    key_secret: process.env.RZP_SECRET, // test secret
  });

  // Step 3: Validate total cost and receiptId
  if (amount <= 0) {
    throw new ApiError(400, "Add item in the Cart to proceed");
  }

  if (!receiptId) {
    throw new ApiError(400, "Receipt ID is required");
  }

  const options = {
    amount: amount,
    currency: currency,
    receipt: receiptId,
    payment_capture: 1,
  };

  try {
    // Step 4: Create a new order
    const order = await razorpay.orders.create(options);

    // Step 5: Order details to be sent to the client and customize the payment methods
    return res.json({
      order_id: order.id,
      currency: order.currency,
      amount: order.amount,
      config: {
        display: {
          hide: [
            { method: "paylater" },
            { method: "cardless_emi" },
            { method: "emi" },
          ],
          preferences: {
            show_default_blocks: true,
          },
        },
      },
    });
  } catch (err) {
    console.error(err);
    throw new ApiError(
      500,
      `Something went wrong while creating order : ${err}`
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

    return res.json({
      status: payment.status,
      method: payment.method,
      amount: payment.amount,
      currency: payment.currency,
    });
  } catch (err) {
    throw new ApiError(
      500,
      `Something went wrong while fetching payment details : ${err}`
    );
  }
});

// // verify paymnent using razorpay webhook
// const verifyPayment = asyncHandler(async (req, res) => {
//   // Step 1: define secret of webhooks which is as same as you define when you create webhook
//   const secret = process.env.RZP_WEBHOOK_SECRET;

//   // Step 2: Extract the signature sent in the request headers
//   const receivedSignature = req.headers["x-razorpay-signature"];

//   // console.log(req.body);

//   // Step 3: Create HMAC using the same secret and request body
//   const shasum = crypto
//     .createHmac("sha256", secret) // give a key to HMAC
//     .update(JSON.stringify(req.body)); // give a data which we want to encrypt

//   const digest = shasum.digest("hex"); // give encrypted data in hexadecimal format

//   // Step 4: Compare the received signature with the calculated digest
//   if (receivedSignature === digest) {
//     // Signature is valid, process the request
//     const paymentEntity = req.body.payload.payment.entity;

//     if (paymentEntity.status === "captured") {
//       await createOrder(req, res);
//     } else {
//       throw new ApiError(400, "Payment not captured, unable to process order.");
//     }
//   } else {
//     // Signature is invalid
//     res.status(400).send("Invalid signature");
//   }

//   res.json({ status: "ok" });
// });

export { createOrder, fetchPaymentDetails };
