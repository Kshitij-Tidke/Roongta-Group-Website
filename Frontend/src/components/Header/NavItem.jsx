import React from "react";

const NavItem = ({ onClick, children }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-gray-700 hover:text-teal-500 focus:outline-none"
      >
        {children}
      </button>
    </li>
  );
};

export default NavItem;
