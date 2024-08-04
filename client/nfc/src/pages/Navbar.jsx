import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1 className="text-blue-500">NavBar</h1>
      <Link to='/about'> About</Link>
      <Link to='/contact'> Contact</Link>
    </div>
  );
}

export default Navbar;
