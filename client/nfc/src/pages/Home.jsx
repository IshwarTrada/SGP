import { Link } from "react-router-dom";
import Navi from "../components/Navbar";
import StaticFooter from "../components/Staticfooter";
import { Outlet } from "react-router-dom";

function Home() {
     return (
          <>
          <div className="flex flex-col col-span-8">

         <Navi/>
         {/* <Link to="/signup">Signup</Link> */}
         <Outlet/>
          <StaticFooter/>
          </div>
          </>
     )
}

export default Home;
