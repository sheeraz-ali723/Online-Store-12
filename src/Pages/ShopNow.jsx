import React from "react";
import { useNavigate } from "react-router-dom";

const ShopNow = () => {
  const navigate = useNavigate();   

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center px-6">

      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Discover Your Next <span className="text-yellow-400">Favorite Product</span>
        </h1>

        <p className="mt-4 text-gray-300">
          Premium products, best prices, fast delivery.
        </p>

        <button
          onClick={() => navigate("/explore")}
          className="mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
        >
          Start Shopping
        </button>
      </div>

    </div>
  );
};

export default ShopNow;