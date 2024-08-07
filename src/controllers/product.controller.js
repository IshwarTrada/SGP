import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";
import { Product } from "../models/product.model.js";

const addProduct = asyncHandler(async (req, res) => {
  // Step 1 : Get Product data from frontend
  // Step 2 : Validation
  // Step 3 : Check for Product Images req.files;
  // Step 4 : Upload Product Images to Cloudinary
  // Step 5 : Wait for all promises to resolve.
  // Step 6 : Create Product Object
  // Step 7 : Check Product saved in database or not
  try {
    // Step 1 : Get Product data from frontend
    const {
      productName,
      productRating,
      shownPrice,
      discountPrice,
      productDescription,
      stock,
      category,
    } = req.body;

    // Step 2 : Validation
    if (
      [
        productName,
        productRating,
        shownPrice,
        discountPrice,
        productDescription,
        stock,
        category,
      ].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "All fields are required to add product");
    }

    // Step 3 : Check for Product Images req.files
    const productPhotosLocalPath = req.files;

    if (!productPhotosLocalPath || productPhotosLocalPath.length === 0) {
      throw new ApiError(400, "Product photos are required");
    }

    // Step 4: Upload Product Images to Cloudinary
    // Mapping Over Files: Create an array of promises for uploading each file to Cloudinary.
    const productPhotos = productPhotosLocalPath.map((file) =>
      uploadOnCloudinary(file.path)
    );

    // Step 5 : Wait for all promises to resolve.
    const cloudinaryUploadResults = await Promise.all(productPhotos);

    if (
      !cloudinaryUploadResults ||
      cloudinaryUploadResults.some((result) => !result)
    ) {
      throw new ApiError(
        500,
        "Some product photos could not be uploaded to Cloudinary"
      );
    }

    // Step 6 : Create Product Object
    const newProduct = await Product.create({
      productName,
      shownPrice: parseInt(shownPrice, 10),
      discountPrice: parseInt(discountPrice, 10),
      productRating,
      productDescription,
      stock: parseInt(stock, 10),
      category,
      photos: cloudinaryUploadResults.map((result) => result.secure_url),
    });

    // Step 7 : Product saved in database or not
    const newlyCreatedProduct = await Product.findById(newProduct._id);

    if (!newlyCreatedProduct) {
      throw new ApiError(500, "Product not added successfully");
    }

    res
      .status(200)
      .json(new ApiResponse(200, newlyCreatedProduct, "Product added"));
  } catch (err) {
    throw new ApiError(500, "Something went wrong while adding new product");
  }
});

const showProduct = asyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(new ApiResponse(200, products, "Product found"));
  } catch (err) {
    throw new ApiError(500, "Something went wrong while fetching products");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const selectedProduct = await Product.findByIdAndDelete(id);

    if (!selectedProduct) {
      throw new ApiError(404, "No such product exists");
    }

    res
      .status(200)
      .json(new ApiResponse(200, null, "Product deleted successfully"));
  } catch (err) {
    throw new ApiError(500, "Something went wrong while deleting product");
  }
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const photoUrls = "";

    const {
      productName,
      productRating,
      shownPrice,
      discountPrice,
      productDescription,
      stock,
      category,
    } = req.body;

    const updateProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        shownPrice: parseInt(shownPrice, 10),
        discountPrice: parseInt(discountPrice, 10),
        productRating,
        productDescription,
        stock: parseInt(stock, 10),
        category,
        photos: photoUrls,
      },
      { new: true, runValidators: true }
    );
    if (!updateProduct) {
      return res.status(404).send("Product not found");
    }

    res.status(200).send("Product updated successfully");
  } catch (err) {
    console.log(err, " At update Product");
  }
});

export { addProduct, showProduct, deleteProduct, updateProduct };
