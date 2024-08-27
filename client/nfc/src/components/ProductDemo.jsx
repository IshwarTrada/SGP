import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const API = "http://localhost:3000/api/v1/products/showProduct";

const NFCProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API);
        const result = await res.json();

        if (res.ok && result.success) {
          // Sorting by createdAt to get the most recent products
          const sortedProducts = result.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          const recentProducts = sortedProducts.slice(0, 3); // Get top 3 products
          setProducts(recentProducts);
        } else {
          setError(result.message || "Failed to fetch products.");
        }
      } catch (error) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-gray-100 p-16 text-center">
      <p className="text-2xl font-light mb-0">
        Connect Effortlessly with Our Cutting-Edge NFC Cards
      </p>
      <h1 className="text-5xl mb-16 mt-6">
        <strong>Explore Our NFC Card Products</strong>
      </h1>

      <div className="flex justify-center gap-12 flex-nowrap">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative w-80 mx-2 rounded-lg bg-gray-100 cursor-pointer overflow-hidden"
          >
            <Link to="/products">
              <img
                src={product.photos}
                alt={product.productName}
                className="w-full h-48 object-cover rounded-xl border-[2px] border-black"
                // style={{
                //      background:
                //           "conic-gradient(from var(--border-angle), #f5f3f3 0% 25%, #0088ff 25% 50%, #f5f3f3 50% 75%, #0088ff 75% 100%) border-box, conic-gradient(from calc(var(--border-angle) + 180deg), #f5f3f3 0% 25%, #0088ff 25% 50%, #f5f3f3 50% 75%, #0088ff 75% 100%) border-box",
                //      animation: "bg-spin 8s linear infinite"}}
              />
            </Link>

            <div className="absolute top-[9.5rem] left-4 bg-black bg-opacity-80 px-2 py-1 rounded-full text-white">
              {product.productRating} ⭐
            </div>

            <Link to="/signin">
              <div
                className="absolute top-[9.5rem] right-1 w-9 h-9 rounded-full bg-black bg-opacity-80 flex justify-center items-center cursor-pointer"
                style={{
                  backgroundImage: "url('./src/assets/cart.svg')",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Link>

            <div className="text-center mt-4">
              <div className="text-xl font-bold">{product.productName}</div>
              <div className="text-lg text-gray-900 mt-2">
                {parseFloat(product.discountPrice).toFixed(2)+"/-"}{" "}
                <span className="line-through text-gray-500 pl-2">
                  {parseFloat(product.shownPrice).toFixed(2)+"/-"}
                </span>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute right-5 mt-[40px] mr-[50px]">
          <Link to="/products">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
              <div
                className="w-12 h-12"
                style={{
                  backgroundImage: "url('./src/assets/arrow.svg')",
                  backgroundSize: "50px 50px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NFCProducts;
