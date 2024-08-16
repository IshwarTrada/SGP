import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    price:{
      type: Number,
      required: true,
    },
    productSubTotal: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Assuming you have user authentication
    items: [cartItemSchema],
    totalCost: {
      type: Number,
      required: true,
      default: 0,
    },
    currency: {
      type: String,
      required: true,
      default: "INR",
    },
    receiptId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
