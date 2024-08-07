import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    productName: {
      type: String,
      require: true,
    },
    shownPrice: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    discountPrice: {
      type: Number,
      required: true,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    productRating: {
      type: String,
      require: false,
    },
    productDescription: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      required: false,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value",
      },
    },
    category: {
      type: String,
      require: false,
    },

    photos: [
      {
        type: String,
        required: false,
      },
    ],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
