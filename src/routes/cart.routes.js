import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { addToCart } from "../controllers/cart.controller.js";

const router = Router();

router.route("/addCart/:productId").post(verifyJwt, addToCart);

export default router;
