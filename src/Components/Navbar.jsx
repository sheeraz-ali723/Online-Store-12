import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main container */}
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-blue-600">
              Online <span className="text-gray-700">Store</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-amber-400 transition">
              Home
            </a>
            <a href="/Product" className="text-gray-700 hover:text-amber-400 transition">
              Products
            </a>
            <a href="/About" className="text-gray-700 hover:text-amber-400 transition">
              About
            </a>
            <a href="/Contact" className="text-gray-700 hover:text-amber-400 transition">
              Contact
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="px-4 py-2 text-sm text-slate-600 border border-gray-600 rounded-full hover:text-gray-950 transition bg-slate-300 hover:bg-gray-200"
              onClick={() => navigate("/Contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3">
          <a href="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/Product" className="block text-gray-700 hover:text-blue-600">
            Products
          </a>
          <a href="/About" className="block text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="/Contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </a>

          {/* Mobile Button (FIXED) */}
          <div className="flex items-center space-x-4">
            <button
              className="px-4 py-2 text-sm text-slate-600 border border-gray-600 rounded-full hover:text-gray-950 transition bg-slate-300 hover:bg-gray-200"
              onClick={() => navigate("/Contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;