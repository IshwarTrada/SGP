import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// to make cookie unchanged by the browser/clientside
const options = {
  httpOnly: true,
  secure: true,
};

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    // save the refresh token in the database
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, `Token generation failed  ${err.message}`);
  }
};

const registerUser = asyncHandler(async (req, res) => {
  try {
    // Step 1: Get user details from frontend
    const { fname, lname, email, password, confirmPassword } = req.body;

    // Step 2: Validation - check for empty fields
    if (
      [fname, lname, email, password, confirmPassword].some(
        (field) => field?.trim() === ""
      )
    ) {
      res
        .status(400)
        .json(new ApiResponse(400, null, "All fields are required"));
      throw new ApiError(400, "All fields are required");
    }

    // Step 3: Check if passwords match
    if (password !== confirmPassword) {
      res
        .status(400)
        .json(new ApiResponse(400, null, "Passwords do not match."));
      throw new ApiError(400, "Passwords do not match");
    }

    // Step 4: Check if user exists by email
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      res
        .status(409)
        .json(new ApiResponse(409, null, "User already exists"));
      throw new ApiError(409, "User already exists");
    }

    // Step 5: Create user object
    const newUser = await User.create({
      fname,
      lname,
      email,
      password,
    });

    // Step 6: Remove sensitive information from response
    const createdUser = await User.findById(newUser._id)
      .select("-fname -lname -password -address -refreshToken -updatedAt -__v") // Exclude sensitive fields
      .lean();

    // Step 7: Check for user creation
    if (!createdUser) {
      return res
        .status(500)
        .json(new ApiResponse(500, null, "User creation failed"));
    }

    // Step 8: Send success response
    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User registered successfully"));
  } catch (err) {
    if (err.name === "ValidationError") {
      // Extract validation error messages
      const messages = Object.values(err.errors).map((error) => error.message);
      return res
        .status(400)
        .json(new ApiResponse(400, null, messages.join(", ")));
    }
    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          `Something went wrong while registering user ${error.message}`
        )
      );
  }
});

const loginUser = asyncHandler(async (req, res) => {
  // Step 1: Get user details from frontend
  const { email, password } = req.body;

  // Step 2: Validation - check for empty fields
  if ([email, password].some((field) => field?.trim() === "")) {
    res.status(400).json(new ApiResponse(400, null, "email and password both are required"));
    throw new ApiError(400, "email and password are required");
  }

  // Step 3: Check if user exists by email
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json(new ApiResponse(404, null, "User not found"));
    throw new ApiError(404, "User not found");
  }

  // Step 4: Check if password is correct
  const isMatch = await user.isPasswordCorrect(password);

  if (!isMatch) {
    res.status(401).json(new ApiResponse(401, null, "Incorrect password"));
    throw new ApiError(401, "Incorrect password");
  }

  // Step 5: Generate access and refresh token
  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -address -refreshToken -updatedAt -__v"
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser },
        "User logged in successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  // Step 1: Delete refresh token from the database
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    { new: true } // Return the updated user
  );

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, null, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  // Step 1 : get refresh token from cookies
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(400, "Unauthorized request");
  }

  try {
    // Step 2: verify the refresh token
    const decodeToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    // Step 3: check if the refresh token is valid
    const user = User.findById(decodeToken?._id)
      .select("-password -refreshToken")
      .lean();

    if (!user) {
      throw new ApiError(401, "Invalid Refresh Token");
    }

    // Step 4: check if the refresh token is the same as the one in the database
    if (user.refreshToken !== incomingRefreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    // Step 5: generate a new access token
    const { accessToken, newRefreshToken } =
      user.generateAccessAndRefreshToken();

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken: newRefreshToken },
          "Access token refreshed successfully"
        )
      );
  } catch (err) {
    throw new ApiError(401, err?.message || "Invalid Refreh Token");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  try {
    // Step 1: Get user from database
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );

    return res
      .status(200)
      .json(new ApiResponse(200, user, "User profile fetched successfully"));
  } catch (err) {
    throw new ApiError(
      500,
      `Something went wrong while fetching user profile ${err.message}`
    );
  }
});

const getUser = asyncHandler(async (req,res)=>{
  try{
    const user = await User.find();
    return res
      .status(200)
      .json(new ApiResponse(200, user, "All User profile fetched successfully"));
  }catch(err){
    throw new ApiError(
      500,
      `Something went wrong while fetching user profile ${err.message}`
    );
  }
})

const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    // Extract user details from request
    const { fname, lname, shippingAddress, zip, city, state, phone } = req.body;

    // Validate required fields
    if ([fname, lname].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "First name and last name are required");
    }

    // Find user by ID
    const user = await User.findById(req.user._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    // Apply updates
    if (fname) user.fname = fname;
    if (lname) user.lname = lname;
    if (shippingAddress || zip || city || state || phone) {
      // Check if phone number has a prefix
      const phoneWithPrefix =
        phone && !phone.startsWith("+91") ? `+91${phone}` : phone;

      // Update the address field
      user.address = [
        {
          shippingAddress: shippingAddress || user.address[0]?.shippingAddress,
          zip: zip || user.address[0]?.zip,
          city: city || user.address[0]?.city,
          state: state || user.address[0]?.state,
          phone: phoneWithPrefix || user.address[0]?.phone,
        },
      ];
    }

    // Save the updated user document
    const updatedUser = await user.save();

    // Send successful response
    return res
      .status(200)
      .json(new ApiResponse(200, updatedUser, "User updated successfully"));
  } catch (err) {
    // Handle errors
    throw new ApiError(
      500,
      `Something went wrong while updating user profile ${err.message}`
    );
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getUserProfile,
  updateUserProfile,
  getUser
};
