import mongoose, { Schema } from "mongoose";

const micrositeSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Details",
  },
  socialLinks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SocialLinks",
  },
  contact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
  services: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
  gallery: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gallery",
  },
  testimonials: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Testimonial",
    },
  ],
  businessHours: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessHours",
  },
}, { timestamps: true });

export const Microsite = mongoose.model("Microsite", micrositeSchema);