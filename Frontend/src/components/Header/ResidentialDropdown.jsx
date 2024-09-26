import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ResidentialDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Hook to get current URL

  // Function to handle closing the dropdown and navigating
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      // Close the dropdown manually even if it's the same route
      setIsOpen(false);
    }
  };

  return (
    <li className="relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-teal-500 focus:outline-none flex"
      >
        Residential{" "}
        <span className="mt-1 text-teal-500">
          <svg
            className="w-4 h-4 text-gray-700 hover:text-teal-500 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.23 7.21a.75.75 0 011.06 0L10 10.6l3.71-3.39a.75.75 0 011.06 1.06l-4.25 3.75a.75.75 0 01-1.06 0l-4.25-3.75a.75.75 0 010-1.06z" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute mt-2 w-48 bg-white border rounded shadow-lg">
          <li>
            <Link
              to="/residential"
              className="block px-4 py-2 text-gray-700 hover:text-teal-500"
              onClick={() => handleLinkClick("/residential")}
            >
              All Projects
            </Link>
          </li>
          <li>
            <Link
              to="/residential"
              className="block px-4 py-2 text-gray-700 hover:text-teal-500"
              onClick={() => setIsOpen(false)} // Close on click
            >
              Ready Possession
            </Link>
          </li>
          <li>
            <Link
              to="/residential"
              className="block px-4 py-2 text-gray-700 hover:text-teal-500"
              onClick={() => setIsOpen(false)} // Close on click
            >
              Ongoing Projects
            </Link>
          </li>
          <li>
            <Link
              to="/residential"
              className="block px-4 py-2 text-gray-700 hover:text-teal-500"
              onClick={() => setIsOpen(false)} // Close on click
            >
              Upcoming Projects
            </Link>
          </li>
        </ul>
      )}
    </li>
  );
};

export default ResidentialDropdown;
