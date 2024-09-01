import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { addToCart, getUserCart ,removeFromCart} from "../controllers/cart.controller.js";

const router = Router();

router.route("/addCart/:productId").post(verifyJwt, addToCart);
router.route("/getCart/:_id").get(verifyJwt, getUserCart);
router.route("/removeCart/:productId").delete(verifyJwt, removeFromCart);

export default router;
