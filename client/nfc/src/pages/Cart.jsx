import { Outlet } from "react-router-dom";
import Navi from "../components/Navbar";
import StaticFooter from "../components/Staticfooter";

function CartPage() {
     return (
          <>
          <Navi/>
          <Outlet/>
          <StaticFooter/>
          </>
     )
}

export default CartPage;