import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signup from "../src/pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import CartPage from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Dash from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Settings from "./pages/Settings.jsx";
import Products from "./pages/Products.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import ShowCart from "./pages/ShowCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import CheckOutPage from "./pages/CheckOutPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path="/" element={<Home />}/> */}
          <Route path="/cart" element={<ShowCart />} />
          <Route path="/" element={<LandingPage/>}/>
          
            <Route path="/dashboard" element={<LandingPage/>} />
            <Route path="/analytics" element={<LandingPage/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/cartpage" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
