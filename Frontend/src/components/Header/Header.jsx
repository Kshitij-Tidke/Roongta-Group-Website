import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "./Logo";
import NavItem from "./NavItem";
import ResidentialDropdown from "./ResidentialDropdown";
import SignInModal from "./SignInModal";
import MobileMenu from "./MobileMenu";

const Header = ({ scrollToFooter, scrollToAbout, scrollToCarousel }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="main-wrapper">
      <div className="header bg-white shadow-sm py-4 fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex items-center justify-center flex-grow space-x-8">
              <ul className="flex space-x-6">
                {/* Update Home NavItem to be a Link */}
                <NavItem>
                  <Link to="/">Home</Link>
                </NavItem>
                <NavItem onClick={scrollToAbout}>About Us</NavItem>
                <ResidentialDropdown />
                <NavItem onClick={scrollToFooter}>Contact Us</NavItem>
              </ul>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={openModal} className="flex items-center text-teal-500 hover:text-teal-900">
                <i className="fas fa-user-circle text-2xl mr-2"></i>
                Sign In
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollToCarousel={scrollToCarousel}
        scrollToAbout={scrollToAbout}
        scrollToFooter={scrollToFooter}
        openModal={openModal}
      />

      {/* Sign In Modal */}
      <SignInModal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Header;
