import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="https://readdy.ai/api/search-image?query=modern%20minimalist%20interior%20design%20studio%20logo%20white%20version%20elegant%20typography%20geometric%20accent%20professional%20branding%20mark%20for%20luxury%20design%20firm%20minimal%20sophisticated%20emblem&width=120&height=40&seq=7&orientation=landscape"
              alt="Interior AI Logo"
              className="h-8 mb-6"
            />
            <p className="text-gray-400">
              Transforming spaces with intelligent design solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to={"/home"} className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/search"} className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to={""} className="text-gray-400 hover:text-white">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Design Street</li>
              <li className="text-gray-400">New York, NY 10001</li>
              <li className="text-gray-400">+1 (555) 123-4567</li>
              <li className="text-gray-400">info@interiorai.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link to={""} className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram text-xl"></i>
              </Link>
              <Link to={""} className="text-gray-400 hover:text-white">
                <i className="fab fa-pinterest text-xl"></i>
              </Link>
              <Link to={""} className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin text-xl"></i>
              </Link>
              <Link to={""} className="text-gray-400 hover:text-white">
                <i className="fab fa-houzz text-xl"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Interior AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
