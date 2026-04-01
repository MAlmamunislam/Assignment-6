import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const Fotter = () => {
  return (
    <div>
      <nav className="bg-[#0b0f1a] text-white py-10 px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          <div className="max-w-xs">
            <h1 className="text-3xl font-bold mb-4">DigiTools</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>
          <div className="flex space-x-16">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white">Features</a>
                </li>
                <li>
                  <a className="hover:text-white">Pricing</a>
                </li>
                <li>
                  <a className="hover:text-white">Templates</a>
                </li>
                <li>
                  <a className="hover:text-white">Integrations</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white">About</a>
                </li>
                <li>
                  <a className="hover:text-white">Blog</a>
                </li>
                <li>
                  <a className="hover:text-white">Careers</a>
                </li>
                <li>
                  <a className="hover:text-white">Press</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a className="hover:text-white">Documentation</a>
                </li>
                <li>
                  <a className="hover:text-white">Help Center</a>
                </li>
                <li>
                  <a className="hover:text-white">Community</a>
                </li>
                <li>
                  <a className="hover:text-white">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                  <a href="">
                    
                    <FaInstagramSquare />{" "}
                  </a>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                  <a href="">
                   
                    <FaFacebookF />
                  </a>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
                  <a href="">
                    <TiSocialTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 flex justify-between text-gray-500 text-xs">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="space-x-6">
            <a className="hover:text-white">Privacy Policy</a>
            <a className="hover:text-white">Terms of Service</a>
            <a className="hover:text-white">Cookies</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Fotter;
