import mongoose, { Schema } from "mongoose";

const shippingSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    default: "",
  },

  shippingAddress: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /\+91[0-9]{10}/.test(v); // Ensures the phone number starts with +91 followed by 10 digits
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
});

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    orderId: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },

    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        productSubTotal: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      required: true,
      enum: ["Confirmed", "In Transit", "Delivered"],
      default: "Confirmed",
      index: true,
    },

    shippingInfo: shippingSchema,

    extraNotes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// Compound index to optimize queries based on multiple fields
orderSchema.index({ userId: 1, status: 1 });

export const Order = mongoose.model("Order", orderSchema);
