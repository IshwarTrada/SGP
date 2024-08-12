import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { v4 as uuidv4 } from "uuid";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

function generateReceiptId() {
  return uuidv4();
}

// Product description page
const addToCart = asyncHandler(async (req, res) => {
  // Step 1 : Get product data from frontend
  const { productId } = req.params;
  const { quantity = 1, currency = "INR" } = req.body;

  const quantityInt = parseInt(quantity);
  // Validate quantity
  if (quantityInt <= 0 || !Number.isInteger(quantityInt)) {
    throw new ApiError(400, "Quantity must be a positive integer");
  }

  try {
    // Step 2 : Validation
    const product = await Product.findById(productId);
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    // Step 3: Find or create a cart for the user
    let cart = await Cart.findOne({ userId: req.user._id });

    // If cart does not exist, create a new cart
    if (!cart) {
      cart = await Cart.create({
        userId: req.user._id,
        items: [],
        currency: currency || "INR",
        receiptId: generateReceiptId(),
        totalCost: 0,
      });
    }

    // Step 4: Update existing item quantity or add new item
    const existingItemIndex = cart.items.findIndex((item) =>
      item.productId.equals(productId)
    );

    // If the item already exists in the cart, update the quantity
    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity = quantityInt; // Update quantity
      cart.items[existingItemIndex].price = product.discountPrice; // Update price if necessary
    }
    // Only add a new item if it does not exist in the cart
    else {
      cart.items.push({
        productId: productId, // Store only the product ID
        quantity,
        price: product.discountPrice, // Set price using the product's discountPrice
      });
    }

    // Step 5: Calculate total cost
    cart.totalCost = cart.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    await cart.save();

    const actionMessage =
      existingItemIndex !== -1
        ? "Product quantity updated in cart"
        : "Product added to cart";
    res.status(200).json(new ApiResponse(200, cart, actionMessage));
  } catch (err) {
    console.log(err);
    throw new ApiError(
      500,
      "Something went wrong while adding product to cart"
    );
  }
});

export { addToCart };
