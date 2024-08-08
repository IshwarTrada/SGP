import { Router } from "express";
import {
  addProduct,
  showProduct,
  deleteProduct,
  updateProductData,
  updateProductPhoto,
} from "../controllers/product.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/addProduct").post(upload.array("photos", 4), addProduct);
router.route("/showProduct").get(showProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);
router.route("/updateProduct/:id").patch(updateProductData);
router
  .route("/updateProduct/:id/photo")
  .patch(upload.single("photo"), updateProductPhoto);

export default router;
