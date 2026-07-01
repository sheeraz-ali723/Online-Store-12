import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
      const navigate = useNavigate();   
  return (
    <div className="bg-gray-50 min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Us
          </h1>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            We are passionate about delivering high-quality products with a
            seamless shopping experience for everyone.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We are a modern e-commerce platform focused on providing the best
              products at competitive prices. Our mission is to make online
              shopping simple, fast, and reliable for everyone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From electronics to lifestyle products, we carefully select each
              item to ensure quality and satisfaction for our customers.
            </p>

            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
               onClick={() => navigate("/explore")}
              >
                Explore Products
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
              alt="About us"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-center">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-600 mt-2">Products</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>

        </div>

        {/* Footer Note */}
        <div className="text-center mt-20 text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Store. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default About;