import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fname, lname, email, password, confirmPassword } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Passwords do not match."));
  }

  // Create new user
  const newUser = new User({ fname, lname, email, password });

  try {
    await newUser.save();
    res
      .status(201)
      .json(new ApiResponse(201, newUser, "User registered successfully."));
  } catch (error) {
    res.status(500).json(new ApiResponse(500, null, "Error registering user."));
  }
});

export { registerUser };
