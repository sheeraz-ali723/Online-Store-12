import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500 mb-4">
              ShopSmart
            </h2>
            <p className="text-gray-400 leading-7">
              Your one-stop online shopping destination for premium products,
              unbeatable deals, and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Shop</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Customer Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-500 transition">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Return Policy</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for latest offers and updates.
            </p>

            <div className="flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-black outline-none"
              />
              <button className="bg-blue-600 px-5 py-3 hover:bg-blue-700 transition">
                Join
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500">
          <p>
            © 2026 ShopSmart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;