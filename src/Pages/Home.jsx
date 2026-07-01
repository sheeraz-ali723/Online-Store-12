import React from "react";
import img01 from "../assets/images.jpg";
import { useNavigate } from "react-router-dom";


const Home = () => {
   const navigate = useNavigate();
    const handleShopNow = () => {
    navigate("/shop"); // 👈 goes to Shop page
  };

   
  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto">

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Shop the Latest <span className="text-blue-600">Trends</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Discover premium products at unbeatable prices. Fast delivery,
            secure payments, and trusted quality.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            onClick={handleShopNow}>
              Shop Now
            </button>

            <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                      onClick={() => navigate("/explore")}>
              Explore
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src={img01}
            alt="Hero"
            className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition duration-500"
          />
        </div>

      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">

        <div className="p-6 bg-white shadow rounded-xl text-center">
          <h3 className="text-xl font-semibold">Free Delivery</h3>
          <p className="text-gray-500 mt-2">Fast and free shipping worldwide</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl text-center">
          <h3 className="text-xl font-semibold">Secure Payment</h3>
          <p className="text-gray-500 mt-2">100% secure transactions</p>
        </div>

        <div className="p-6 bg-white shadow rounded-xl text-center">
          <h3 className="text-xl font-semibold">24/7 Support</h3>
          <p className="text-gray-500 mt-2">We are always here to help</p>
        </div>

      </div>

    </div>
  );
};

export default Home;