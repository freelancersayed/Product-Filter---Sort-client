import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-4 py-10 bg-gray-100 text-gray-900">
      <div className="max-w-[1280px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-between">
        {/* About Us Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm leading-relaxed">
            Welcome to our e-commerce store! We offer a wide range of products to suit your needs. Shop with confidence knowing that our team is dedicated to providing the best customer experience.
          </p>
        </div>

       
         {/* Customer Service Section */}
         <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">Help & FAQs</a></li>
            <li><a href="#" className="hover:underline">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:underline">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:underline">Track Order</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:underline">New Arrivals</a></li>
            <li><a href="#" className="hover:underline">Best Sellers</a></li>
            <li><a href="#" className="hover:underline">Men's Fashion</a></li>
            <li><a href="#" className="hover:underline">Women's Fashion</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>

     

        {/* Subscribe and Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers:</p>
          <form action="#" method="POST" className="flex items-center">
            <input type="email" placeholder="Your Email" className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none" />
            <button type="submit" className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500">Subscribe</button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className=" hover:text-blue-500"><FaFacebook></FaFacebook></a>
            <a href="#" className=" hover:text-blue-400"><FaTwitter></FaTwitter></a>
            <a href="#" className=" hover:text-pink-500"><FaInstagram></FaInstagram></a>
            <a href="#" className=" hover:text-blue-700"><FaLinkedin></FaLinkedin></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-10 pt-5">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 Product-Nest. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | 
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
