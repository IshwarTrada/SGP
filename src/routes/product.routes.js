import { Router } from "express";
import {
  addProduct,
  showProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/addProduct").post(upload.array("photos", 4), addProduct);
router.route("/showProduct").post(showProduct);
router.route("/deleteProduct/:id").post(deleteProduct);
router.route("/updateProduct/:id").post(updateProduct);

export default router;
