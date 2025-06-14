import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20minimalist%20interior%20design%20studio%20logo%20with%20elegant%20typography%20and%20geometric%20accent%20professional%20branding%20mark%20for%20luxury%20design%20firm%20minimal%20sophisticated%20emblem&width=120&height=40&seq=1&orientation=landscape"
              alt="Interior AI Logo"
              className="h-8"
            />
          </div>
          <div className="flex items-center space-x-8">
            <Link to={"/"} className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/about"} className="text-gray-900 font-medium">
              About
            </Link>
            <Link
              to={"/category"}
              className="text-gray-600 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link to={"/search"} className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link to={"/signup"} className="text-gray-600 hover:text-gray-900">
              sign up
            </Link>
            <Link to={"/login"} className="text-gray-600 hover:text-gray-900">
              login
            </Link>
            <Link to={"/contact"} className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
