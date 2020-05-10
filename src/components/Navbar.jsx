import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-back flex">
      <Link className="navbar" to="/">Home</Link>
      <Link className="navbar" to="/profile">Profile</Link>
    </div>
  );
}

export default Navbar;