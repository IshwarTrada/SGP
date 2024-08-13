import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import {
  createOrder,
  fetchPaymentDetails,
} from "../controllers/razorpay.controller.js";

const router = Router();

// Create a new order
router.route("/createOrder").post(verifyJwt, createOrder);
router
  .route("/fetchPaymentDetails/:paymentId")
  .get(verifyJwt, fetchPaymentDetails);

export default router;