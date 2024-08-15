import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  createOrder,
  fetchPaymentDetails,
  verifyPayment,
} from "../controllers/razorpay.controller.js";

const router = Router();

// Create a new order
router.route("/createOrder").post(verifyJwt, createOrder);

// fetch payment details by paymentId
router
  .route("/fetchPaymentDetails/:paymentId")
  .get(verifyJwt, fetchPaymentDetails);

// Verify the payment - data come from razorpay webhooks
router.route("/verification").post(verifyPayment);

export default router;
