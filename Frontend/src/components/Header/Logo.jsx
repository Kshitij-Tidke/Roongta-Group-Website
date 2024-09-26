import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/Logo/Logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="text-2xl font-bold">
        <img src={LogoImage} className="w-40" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
