import React, { useState, useEffect } from "react";
import ProductInformation from "./Prodinformation";
import Navi from "./Navbar";
import { Link, useParams } from "react-router-dom";

// Sample product data
const productData = [
  {
    id: 1,
    name: "Google Review Card",
    category: "Business",
    availability: "In Stock",
    price: 199,
    originalPrice: 6000,
    // The discount is now calculated dynamically
    rating: 3.2,
    userFeedbackCount: 696969,
    image: "./src/assets/logo.png",
    uploadImageIcon: "./src/assets/DocUpload.svg",
    paymentMethods: [
      
      "../src/assets/Gpay.svg",
      "../src/assets/i-pay.svg",
      "../src/assets/Samsung-pay.svg",
      "../src/assets/Visa.svg",
      "../src/assets/MasterCard.svg",
      "../src/assets/payPal.svg",
    ],
    thumbnails: ["./src/assets/visa.svg", "./src/assets/MasterCard.svg"],
  },
];

const ProductDetail = () => {
  const product = productData[0];
  const [file, setFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [count, setCount] = useState(1);
  const [isWished, setIsWished] = useState(false);
  const [isWishing, setIsWishing] = useState(false);
  const [mainImage, setMainImage] = useState(product.image);
  const [products, setProducts] = useState([]);
  const { id } = useParams();



  const fullStars = Math.floor(product.rating);
  const halfStar = product.rating % 1 !== 0;
  // Calculate the discount percentage
  const calculateDiscount = (originalPrice, currentPrice) => {
    if (originalPrice <= 0) return "0% OFF";
    const discount = Math.round(
      ((originalPrice - currentPrice) / originalPrice) * 100
    );
    return `${discount}% OFF`;
  };


  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  // Handle drag over
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  // Handle drag leave
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Handle file selection via the button
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  // Increment the count
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Decrement the count
  const decrementCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const totalPrice = product.price * count;
    console.log(
      `Added to cart: ${count} x ${product.name}, Total Price: Rs.${totalPrice}`
    );
  };

  // Function to handle adding to wishlist
  const handleAddToWishlist = () => {
    setIsWishing(true);
    setTimeout(() => {
      setIsWished(!isWished);
      setIsWishing(false);
    }, 500);
  };
  const productAPI = "http://localhost:3000/api/v1/products/showProduct";
  const fetchProduct = async () => {
    try {
      const res = await fetch(productAPI);
      const data = await res.json();
      console.log("DATA", data.data);

      const foundProduct = data.data?.find((item) => item._id === id);
      console.log("filterItem>>", foundProduct);
      if (foundProduct) {
        setProducts(foundProduct);
        console.log(products);
        console.log("RETING", products.productRating);
        // Set the product to state
      } else {
        setError("Product not found");
      }
    } catch (error) {
      setError("Failed to fetch products.");
      console.error("Error fetching products:", error);
    }
  };
  
  useEffect(() => {
    fetchProduct();
  }, [id]);

  const API = `http://localhost:3000/api/v1/cart/addCart/${id}`;
    

const addToCart = async (id, data) => {
  try {
    const response = await fetch(API, {
      method: 'POST', // POST method for sending data
      headers: {
        'Content-Type': 'application/json', // JSON format
      },
      body: JSON.stringify({
        quantity:1
      }), // Converting the data to a JSON string
      credentials: 'include', // Include credentials such as cookies in the request
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = await response.json(); // Parse the JSON response
    console.log(result); // Handle the response
  } catch (error) {
    console.error('Error:', error); // Handle errors
  }
};

  return (
    <>
      <Navi />
      <div className="pt-11 p-2">
        <div className="flex flex-row max-w-[1360px] gap-14 p-8">
          <div className="relative flex flex-col justify-start items-start w-[616px] h-[464px] bg-gradient-to-b from-purple-700 to-transparent border border-gray-100 rounded-xl">
            <img
              src={products.photos}
              alt={products.productName}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 flex gap-4">
              {product.thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={products.photos}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[100px] h-[100px] object-cover rounded-xl cursor-pointer"
                  onClick={() => setMainImage(thumbnail)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {[...Array(fullStars)].map((_, index) => (
                    <i
                      key={index}
                      className="bx bxs-star text-[#fa8232] text-lg"
                    />
                  ))}
                  {halfStar && (
                    <i className="bx bxs-star-half text-[#fa8232] text-lg" />
                  )}
                  {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map(
                    (_, index) => (
                      <i
                        key={index + fullStars + (halfStar ? 1 : 0)}
                        className="bx bx-star text-gray-300 text-lg"
                      />
                    )
                  )}
                </div>
                <span className="text-lg font-semibold">
                  {product.rating  }
                  Star Rating
                </span>
                <span className="text-gray-600">
                  ({product.userFeedbackCount} User feedback)
                </span>
              </div>
              <h3 className="text-3xl font-normal">{products.productName}</h3>
            </div>
            <div className="flex flex-col gap-1 text-gray-600">
              <div className="flex gap-10">
                <div className="flex flex-col">
                  <span>
                    Category :{" "}
                    <span className="font-semibold text-gray-900">
                      {products.category}
                    </span>
                  </span>
                </div>
                <div className="flex flex-col">
                  <span>
                    Availability :{" "}
                    <span className="font-semibold text-[#4aaa4f]">
                      {product.availability}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start gap-2 text-secondary-500">
              <div className="text-2xl font-semibold">Rs.{products.discountPrice}</div>
              <div className="flex flex-col">
                <div className="line-through text-gray-500 text-xl font-semibold mt-[1px]">
                  Rs.{products.shownPrice}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center h-[30px] justify-center bg-yellow-400 text-black px-2 mt-[3px] ml-3">
                  <div className="font-semibold">{calculateDiscount(products.shownPrice,products.discountPrice)}</div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="flex flex-row items-start gap-4">
              <div className="flex flex-col gap-4 ml-0">
                <div className="line-height-20">
                  Have a design in mind? Share it here...
                </div>
                <div className="flex flex-row gap-8 ">
                  <div
                    className={`flex-1 border rounded-lg ${isDragOver ? "border-blue-500" : "border-gray-100"} flex items-center justify-between px-4 py-2`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <label
                      htmlFor="attach-file"
                      className="cursor-pointer flex-1"
                    >
                      {file ? file.name : "Drag or Drop your design"}
                    </label>
                    <input
                      id="attach-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <div className="flex flex-col">
                      <img
                        src={product.uploadImageIcon}
                        alt="Upload Icon"
                        className="w-4 h-6 ml-4"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className="border border-gray-500 bg-transparent px-4 py-1 rounded-sm cursor-pointer"
                      onClick={() => console.log(file)}
                    >
                      <div className="text-green-600 ">Upload</div>
                    </button>
                  </div>
                </div>
                <div className="flex items-start justify-end gap-2">
                  <div className="flex border rounded-sm border-gray-100 p-3 text-gray-700">
                    <button
                      className="flex items-center justify-center p-1 text-lg text-gray-700 hover:bg-gray-200 transition"
                      onClick={decrementCount}
                      disabled={count <= 1}
                    >
                      <i className="bx bx-minus" />
                    </button>
                    <div className="mx-2 w-[40px] text-center">{count}</div>
                    <button
                      className="flex items-center justify-center p-1 text-lg text-gray-700 hover:bg-gray-200 transition"
                      onClick={incrementCount}
                    >
                      <i className="bx bx-plus" />
                    </button>
                  </div>
                  <Link to={'/cart'}>
                  <button
                    className="flex items-center justify-center bg-gray-500 text-white uppercase px-4 h-[52px] w-[200px] py-2 rounded-sm"
                    onClick={()=>addToCart(id,count)}
                  >
                    <b>Add to cart</b>
                    <i className="bx bx-cart ml-4 text-2xl" />
                  </button></Link>
                  <button className="flex items-center justify-center border-2 border-gray-500 bg-white px-4 py-2 rounded-sm h-[52px] text-gray-600">
                    <b>Buy now</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-1 ${isWished ? "text-red-600" : "text-gray-700"} transition-transform ${isWishing ? "scale-125" : ""}`}
                  onClick={handleAddToWishlist}
                >
                  <i
                    className={`bx bx-heart ${isWished ? "bxs-heart" : "bx-heart"}`}
                  />
                  <div className="line-height-20">Add to Wishlist</div>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="line-height-20">Share product :</div>
                <div className="flex items-center gap-2">
                  <img
                    src="./src/assets/Copy.svg"
                    alt="Copy"
                    className="w-4 h-4"
                  />
                  <a href="https://www.facebook.com/">
                    <img
                      src="./src/assets/Facebook.svg"
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </a>
                  <a href="http://www.twitter.com">
                    <img
                      src="./src/assets/Twitter.svg"
                      alt="Twitter"
                      className="w-4 h-4"
                    />
                  </a>
                  <a href="http://www.pinterest.com">
                    <img
                      src="./src/assets/Pinterest.svg"
                      alt="Pinterest"
                      className="w-4 h-4"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-sm border border-gray-100 p-8 shadow-lg">
              <div>100% Guarantee Safe Checkout</div>
              <div className="flex gap-2 pt-4">
                {product.paymentMethods.map((method, index) => (
                  <img
                    key={index}
                    src={method}
                    alt="Payment Method"
                    className="max-w-[80px] max-h-[80px]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductInformation />
    </>
  );
};

export default ProductDetail;
