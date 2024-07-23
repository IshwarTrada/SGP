import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  // Register user
  res.status(200).json({ message: "User registered successfully" });
});

export { registerUser };
