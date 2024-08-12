import { Router } from "express";
import {
  createReview,
  getReviews,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/createReview/:productId").post(verifyJwt, createReview);
router.route("/:productId").get(getReviews);
router.route("/updateReview/:reviewId").patch(verifyJwt, updateReview);
router.route("/deleteReview/:reviewId").delete(verifyJwt, deleteReview);
// router.route("/:id/helpful").patch(markReviewHelpful);
// router.route("/:id/reply").patch(addReply);

export default router;
