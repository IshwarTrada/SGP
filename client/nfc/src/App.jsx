import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "../src/pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import CartPage from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Dash from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import Products from "./pages/ProdPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ShowCart from "./pages/ShowCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";
import MainLayout from "./pages/MainProductsPage.jsx";
import ProductInformation from "./components/Prodinformation.jsx";
import ProductDetail from "./components/ProductDetails.jsx";
import OrderHistory from "./components/ProductHistory.jsx";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/cart" element={<ShowCart />} />
          <Route path="/" element={<LandingPage/>}/>
          
            <Route path="/dashboard" element={<LandingPage/>} />
            <Route path="/placeorder" element={<LandingPage/>} />
            <Route path="/analytics" element={<LandingPage/>} />
            <Route path="/products" element={<MainLayout />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/checkout" element={<Checkout />} />
            
            <Route path="/cartpage" element={<CartPage />} />
            <Route path="/checkoutPage" element={<CheckOutPage />} />
            <Route path="/orders" element={<OrderHistory />} />

            <Route path="/product-detailed-view/:id" element={ <ProductDetail/> } ></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
