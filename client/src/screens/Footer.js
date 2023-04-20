import React from 'react';
import Logo from "../images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
  {/* Top Section */}
  <div className="container mx-auto px-6 py-12 grid grid-cols-3 gap-6">
    {/* Column 1 */}
    <div className="column1">
      <a href="/"><img src={Logo} alt="Website Logo" className="w-70 h-16 mb-4 rounded-lg"  /></a> 
      <p>
      Welcome to Foodlicious: Food Blogging and Ordering Website
      </p>
    </div>
    {/* Column 2 */}
    <div className="column2">
      <h3 className="text-xl font-bold mb-4">Quick Links</h3>
      <ul>
        <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
        <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
        <li><a href="/menu" className="text-gray-300 hover:text-white">Menu</a></li>
        <li><a href="/ContactUs" className="text-gray-300 hover:text-white">Contact</a></li>
      </ul>
    </div>
    {/* Column 3 */}
    <div className="column3">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <ul>
        <li>
          <a href="https://facebook.com" class="text-white hover:text-grey"><i className="fab fa-facebook-f  w-8 h-2 mb-4"></i></a>
          <a href="https://twitter.com" class="text-white hover:text-grey"><i className="fab fa-twitter w-8 h-2 mb-4"></i></a>
          <a href="https://instagram.com" class="text-white hover:text-grey"><i className="fab fa-instagram w-8 h-2 mb-4"></i></a>
        </li>
        <li>
        <i className="fas fa-phone w-6 h-2 mb-4"></i><a href='tel:+16179716509' class="text-white">(555) 123-4567</a>
        </li>
        <li>
          <i className="fas fa-envelope w-6 h-2 mb-4"></i> <a href='mailto:info@foodlicious.com' class="text-white">info@foodlicious.com</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="bottom-section border-t border-gray-700 py-4 text-center">
    <p className="text-gray-400">
    <a href="/home" className="text-gray-400 hover:text-white">&copy; 2023 FoodLicious.</a> <a href="/privacy-policy" className="text-gray-400 hover:text-white">All rights reserved.</a> | <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a> | <a href="/terms-and-conditions" className="text-gray-400 hover:text-white">Terms and Conditions</a>
    | <a href="/admin" className="text-gray-400 hover:text-white">Admin Panel</a>
    </p>
  </div>
</footer>

  );
};

export default Footer;
