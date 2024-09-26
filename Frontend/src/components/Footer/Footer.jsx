import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/Logo.png';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {/* Logo Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget">
                <img src={Logo} className="w-60" alt="Logo" />
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget">
                <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                <div className="footer-add">
                  <p>Shree Tirumala Ashirwad Apt, Pethe Nagar Rd (Indira Nagar), Opp. Balbharti, Nashik 422009.</p>
                  <p><a href="tel:+91 7770002222" className="text-green-400">+91 7770002222</a></p>
                  <p><a href="mailto:Connect@roongtagroup.co.in" className="text-green-400">Connect@roongtagroup.co.in</a></p>
                </div>
              </div>
            </div>

            {/* Category Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget">
                <h4 className="text-xl font-semibold mb-4">Category</h4>
                <ul className="space-y-2">
                  <li><Link to="/properties-list/residential" className="hover:text-green-400">Residential</Link></li>
                  <li><Link to="/properties-list/commercial" className="hover:text-green-400">Commercial</Link></li>
                  <li><Link to="/properties-list/na-plots" className="hover:text-green-400">NA Plots</Link></li>
                </ul>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="footer-widget">
                <h4 className="text-xl font-semibold mb-4">Navigations</h4>
                <ul className="space-y-2">
                  <li><Link to="/blogs-list" className="hover:text-green-400">Blogs</Link></li>
                  <li><Link to="/about-us" className="hover:text-green-400">About Us</Link></li>
                  <li><Link to="/privacy-policy" className="hover:text-green-400">Privacy Policy</Link></li>
                  <li><Link to="/terms-and-condition" className="hover:text-green-400">Terms And Condition</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Copyright Section */}
            <div className="text-center md:text-left w-full md:w-1/2">
              <p className="mb-0 text-sm">
                © 2024 Lalit Roongta Group.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="text-center md:text-right w-full md:w-1/2 mt-4 md:mt-0">
              <ul className="inline-flex space-x-4 text-xl">
                <li><a href="https://www.facebook.com/Roongtagroup" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/roongta_group" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://www.instagram.com/lalitroongtagroup/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"> <i class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/lalit-roongta-group-22749310b/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i class="fab fa-linkedin "></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCLNoZcZaje38XEfxrP8V48A" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i class="fab fa-youtube"></i></a></li>
                <li><a href="https://www.google.com/maps/dir//roongta+group/@19.9893537,73.7557855,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bddeb013af2e74b:0x2152463b888888d5!2m2!1d73.77699!2d19.973551" target="_blank" rel="noopener noreferrer" className="hover:text-green-400"><i class="fab fa-google"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
