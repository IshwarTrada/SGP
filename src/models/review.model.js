import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: [1, "Rating should be at least 1"],
      max: [5, "Rating should be at most 5"],
    },
    content: {
      type: String,
      required: true,
    },
    helpfulCount: {
      type: Number,
      default: 0,
    },
    images: [
      {
        type: String,
      },
    ],
    verifiedPurchase: {
      type: Boolean,
      default: false,
    },
    // replies: {
    //   type: [replySchema],
    //   default: [],
    // },
    // tags: [
    //   {
    //     type: String,
    //   },
    // ],
  },
  { timestamps: true }
);

export const Review = mongoose.model("Review", reviewSchema);

// const replySchema = mongoose.Schema({
//   reply_id: {
//     type: String,
//     required: true,
//   },
//   user_id: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
// });
