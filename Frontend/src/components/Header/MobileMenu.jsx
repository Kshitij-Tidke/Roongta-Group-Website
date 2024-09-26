import React from "react";
import NavItem from "./NavItem";

const MobileMenu = ({ isOpen, toggleMobileMenu, scrollToCarousel, scrollToAbout, scrollToFooter, openModal }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMobileMenu} // Closes the menu when clicking outside
      ></div>

      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6">
          <ul className="space-y-4">
            <NavItem onClick={scrollToCarousel}>Home</NavItem>
            <NavItem onClick={scrollToAbout}>About Us</NavItem>
            <NavItem onClick={scrollToFooter}>Contact Us</NavItem>
            <li className="flex justify-center pt-4">
              <button
                onClick={openModal}
                className="text-teal-500 hover:text-teal-900 flex items-center space-x-2"
              >
                <i className="fas fa-user-circle text-2xl"></i>
                <span>Sign In</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
