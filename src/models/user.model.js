import mongoose, { Schema } from "mongoose";
// used for generating jwt token (authentication , authorization)
import jwt from "jsonwebtoken";
// used for hashing password
import bcrypt from "bcrypt";

<<<<<<< HEAD
// Define schema for address
const addressSchema = new Schema({
  shippingAddress: String,
  zip: String,
  city: String,
  state: String,
  phone: String,
});

=======
>>>>>>> 4ed7e30 (homepage)
const userSchema = new Schema(
  {
    fname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: 2,
      index: true, // Index for faster search
    },
    lname: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      minlength: 2,
      index: true, // Index for faster search
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
    },
<<<<<<< HEAD
    address: [addressSchema],
=======
>>>>>>> 4ed7e30 (homepage)
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

// Hash the password before saving the user model
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password verification method
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate an access token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

// Method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

<<<<<<< HEAD
// Middleware to add prefix to phone number
addressSchema.pre('save', function(next) {
  if (this.phone && !this.phone.startsWith('+91')) {
    this.phone = `+91${this.phone}`;
  }
  next();
});

=======
>>>>>>> 4ed7e30 (homepage)
export const User = mongoose.model("User", userSchema);
