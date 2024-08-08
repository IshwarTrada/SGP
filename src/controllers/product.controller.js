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

const updateProductData = asyncHandler(async (req, res) => {
  // Step 1 : Get Product ID from params
  // Step 2 : Get Product data from frontend
  // Step 3 : Validation
  // Step 4 : Update Product Data
  // Step 5 : Check Product updated in database or not

  try {
    // Step 1 : Get Product ID from params
    const { id } = req.params;

    // Step 2 : Get Product data from frontend
    const {
      productName,
      productRating,
      shownPrice,
      discountPrice,
      productDescription,
      stock,
      category,
    } = req.body;

    // Step 3 : Validation
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
      throw new ApiError(400, "All fields are required to update product");
    }

    // Step 4 : Update Product Data
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        productName,
        shownPrice: parseInt(shownPrice, 10),
        discountPrice: parseInt(discountPrice, 10),
        productRating,
        productDescription,
        stock: parseInt(stock, 10),
        category,
      },
      { new: true, runValidators: true }
    );

    // Step 5 : Check Product updated in database or not
    if (!updatedProduct) {
      throw new ApiError(404, "Product data updation failed");
    }

    res
      .status(200)
      .json(new ApiResponse(200, updatedProduct, "Product updated"));
  } catch (err) {
    throw new ApiError(500, "Something went wrong while updating product");
  }
});

const updateProductPhoto = asyncHandler(async (req, res) => {
  // Step 1: Get Product ID and photo index from params
  // Step 2: Get the new photo from the request
  // Step 3: Upload the new photo to Cloudinary
  // Step 4: Delete the old photo from Cloudinary
  // Step 5: Update the photo URL in the product's photo array
  // Step 6: Save the updated product

  try {
    // Step 1: Get Product ID and photo id from params
    const { id } = req.params;
    const { photoId } = req.body;

    if (!photoId) {
      throw new ApiError(400, "Can't get unique photo ID");
    }

    // Step 2: Get the new photo from the request
    const newPhoto = req.file;

    if (!newPhoto) {
      throw new ApiError(400, "No photo provided");
    }

    // Find the product
    const product = await Product.findById(id);

    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    // Step 3: Upload the new photo to Cloudinary
    const uploadResult = await uploadOnCloudinary(newPhoto.path);
    if (!uploadResult) {
      throw new ApiError(500, "Failed to upload new photo on cloudinary");
    }

    // Step 4: Delete the old photo from Cloudinary
    const oldPhotoPublicId = photoId;
    if (oldPhotoPublicId) {
      await deleteFromCloudinary(oldPhotoPublicId);
    }

    // Step 5: Update the photo URL in the product's photo array
    const updatedPhotoUrls = [...product.photos];
    // updatedPhotoUrls[photoId] = uploadResult.secure_url;

    // Step 6: Save the updated product
    product.photos = uploadResult.secure_url;
    await product.save();

    res
      .status(200)
      .json(
        new ApiResponse(200, product, "Product photo updated successfully")
      );
  } catch (err) {
    console.error(err);
    throw new ApiError(
      500,
      "Something went wrong while updating product photo"
    );
  }
});

export {
  addProduct,
  showProduct,
  deleteProduct,
  updateProductData,
  updateProductPhoto,
};
