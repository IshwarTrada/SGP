import mongoose, { Types } from "mongoose";
import { Review } from "../models/review.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createReview = asyncHandler(async (req, res) => {
  // Step 1 : Get Review data from frontend
  const { productId } = req.params;
  const { rating, content } = req.body;

  // Step 2 : Validation
  if ([rating, content].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required to add review");
  }

  // validate rating
  const parsedRating = parseInt(rating, 10);
  if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
    throw new ApiError(400, "Rating should be a number between 1 and 5");
  }

  try {
    const review = await Review.create({
      rating: parsedRating,
      content,
      productId,
      userId: req.user._id,
    });
    return res
      .status(201)
      .json(new ApiResponse(201, review, "Review created successfully"));
  } catch (err) {
    console.error(`Error while creating review: ${err.message}`);
    throw new ApiError(500, "Something went wrong while creating review");
  }
});

const getReviews = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    throw new ApiError(400, "Product id is required");
  }

  if (!Types.ObjectId.isValid(productId)) {
    throw new ApiError(400, "Invalid product ID");
  }
  try {
    // Query the database for reviews with the given product_id
    const reviews = await Review.find({ productId });

    // If no reviews found
    if (reviews.length === 0) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "No reviews found for this product"));
    }
    return res.status(200).json(new ApiResponse(200, reviews, "Reviews found"));
  } catch (err) {
    console.error(`Error while fetching reviews : ${err.message}`);
    throw new ApiError(500, "Something went wrong while fetching reviews");
  }
});

const updateReview = asyncHandler(async (req, res) => {
  // Step 1 : Get Review data from frontend
  const { reviewId } = req.params;
  const { rating, content } = req.body;

  // Step 2 : Validation
  if (!reviewId) {
    throw new ApiError(400, "Review id is required");
  }
  // validate reviewId
  if (!Types.ObjectId.isValid(reviewId)) {
    throw new ApiError(400, "Invalid review ID");
  }

  if ([rating, content].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required to update review");
  }

  // validate rating
  const parsedRating = parseInt(rating, 10);
  if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
    throw new ApiError(400, "Rating should be a number between 1 and 5");
  }

  try {
    // Step 3: Query the database for review with the given review_id and update it
    const review = await Review.findByIdAndUpdate(
      reviewId,
      {
        $set: {
          rating: parsedRating,
          content,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!review) {
      throw new ApiError(404, "Review not found");
    }

    return res.status(200).json(new ApiResponse(200, review, "Review updated"));
  } catch (err) {
    throw new ApiError(500, `Something went wrong while updating review ${err.message}`);
  }
});

const deleteReview = asyncHandler(async (req, res) => {
  // Step 1 : Get Review data from frontend
  const { reviewId } = req.params;

  // Step 2 : Validation
  if (!Types.ObjectId.isValid(reviewId)) {
    console.log("Invalid review ID");
    throw new ApiError(400, "Invalid review ID");
  }

  // Step 3 : Query the database for review with the given review_id and delete it
  try {
    const review = await Review.findByIdAndDelete(reviewId);
    if (!review) {
      throw new ApiError(404, "Review not found");
    }

    return res
      .status(200)
      .json(new ApiResponse(200, null, "Review deleted successfully"));
  } catch (err) {
    console.error("Error while deleting a review ", err);
    throw new ApiError(500, `Something went wrong while deleting review ${err.message}`);
  }
});

// const getReviewById = asyncHandler(async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.id);
//     if (!review) {
//       throw new ApiError(404, "Review not found");
//     }
//     return res.status(200).json(new ApiResponse(200, review, "Review found"));
//   } catch (err) {
//     throw new ApiError(500, "Something went wrong while fetching review of id");
//   }
// });

// const markReviewHelpful = asyncHandler(async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.id);
//     if (!review) {
//       throw new ApiError(404, "Review not found");
//     }
//     review.helpful_count += 1;
//     await review.save();
//     return res.status(200).json(new ApiResponse(200, review, "Review marked"));
//   } catch (err) {
//     console.log(err);
//     throw new ApiError(500, "Something went wrong while marking review");
//   }
// });

// const addReply = asyncHandler(async (req, res) => {
//   try {
//     const review = await Review.findById(req.params.id);
//     if (!review) {
//       throw new ApiError(404, "Review not found");
//     }
//     review.replies.push(req.body);
//     await review.save();
//     return res.status(200).json(new ApiResponse(200, review, "Reply added"));
//   } catch (err) {
//     console.log(err);
//     throw new ApiError(500, "Something went wrong while adding reply");
//   }
// });

export { createReview, getReviews, updateReview, deleteReview };
