import { Router } from "express";
import {
  verifyPaymentAndOrderCreate,
  getOrders,
  getOrderByOrderId,
} from "../controllers/order.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(verifyJwt, getOrders);  // get all orders
router.route("/createOrder").post(verifyJwt, verifyPaymentAndOrderCreate); // verify payment and create order if payment iis successful
router.route("/:orderId").get(verifyJwt, getOrderByOrderId);  // get order by order id

export default router;
