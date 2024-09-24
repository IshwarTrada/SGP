import Products from './ProdPage';
import Filter from '../components/Filter';
import Navi from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MainLayout = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate(); 
    const productAPI = "http://localhost:3000/api/v1/products/showProduct";
    const fetchProduct = async () => {
      try {
        const res = await fetch(productAPI);
        const result = await res.json();
  
        if (res.ok && result.success) {
          // Sorting by createdAt to get the most recent products
          const sortedProducts = result.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          ); 
          // const recentProducts = sortedProducts.slice(0, 3); // Get top 3 products
          setProducts(sortedProducts);
        } else {
          setError(result.message || "Failed to fetch products.");
        }
      } catch (error) {
        setError("Failed to fetch products.");
        console.error("Error fetching products:", error);
      }
    };
    const handleCardClick = (id) => {
        navigate(`/prod-description/${id}`); // Navigate to product detail page with _id in the URL
      };

    useEffect(()=>{
        fetchProduct();
        console.log("PRODUCTS>>>",products);
        
      },[])



    return (
        <>
        <Navi/>
            <div className="flex flex-col md:flex-row container mx-auto">
                <div className="flex flex-row gap-8">
                    <div className="fixed mt-24 pr-8 border-r-[1px] border-[#272727] h-[500px] w-[250px] -z-50">
                        <Filter products={products}/>
                    </div>
                    <div className="flex flex-col gap-8 ml-[300px]">
                        <Products products = {products} handleCardClick={handleCardClick}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MainLayout;
