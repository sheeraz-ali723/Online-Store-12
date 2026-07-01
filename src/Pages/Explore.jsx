import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const categories = [
  { name: "All", icon: "🛍️" },
  { name: "Phone", icon: "📱" },
  { name: "Watch", icon: "⌚" },
  { name: "Headphone", icon: "🎧" },
  { name: "Earbuds", icon: "🎧" },
];

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "$999",
    tag: "🔥 Hot",
     category: "Phone",
    img: "https://images.unsplash.com/photo-1700805732158-6f1169780ca7?w=600",
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: "$399",
    tag: "⭐ Best",
     category: "Watch",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
  {
    id: 3,
    name: "Sony Headphones",
    price: "$199",
    tag: "⚡ Deal",
      category: "Headphone",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrzIlc4cJswtEBn9ujFbFwVW1zQGBtRfVbOPDQmsHbg&s=10",
  },
  {
    id: 4,
    name: "Air Bud Pro",
    price: "$149",
     category: "Earbuds",
    tag: "New",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PAVYMmBifTLnOuya98aebXd5VTexlSqFY0TvZjGaaA&s=10",
  },
    {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    price: "$399",
    tag: "⭐ Trending",
    category: "Watch",
    img: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Garmin Fenix 7",
    price: "$699",
    tag: "🏃 Sport",
    category: "Watch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEup3hqkYvU5vEkCpNBK63M4No92WqTBwlqypRhbGPIg&s=10",
  },

  // 🎧 HEADPHONES (3)
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "$349",
    tag: "🎧 Top",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Bose QuietComfort Ultra",
    price: "$429",
    tag: "🔇 Noise Cancel",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "JBL Tune 770NC",
    price: "$149",
    tag: "💥 Budget",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
  },

  // 🎧 AIRBUDS / EARBUDS (3)
  {
    id: 10,
    name: "Apple AirPods Pro 2",
    price: "$249",
    tag: "🍏 Apple",
    category: "Earbuds",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjP0em38sYOOkMATx5Ipb2KK9wSHhO1OQp-EGXMY4ssg&s=100",
  },
  {
    id: 11,
    name: "Samsung Galaxy Buds 2 Pro",
    price: "$199",
    tag: "⭐ Best",
    category: "Earbuds",
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 12,
    name: "Nothing Ear (2)",
    price: "$149",
    tag: "⚡ Trend",
    category: "Earbuds",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjP0em38sYOOkMATx5Ipb2KK9wSHhO1OQp-EGXMY4ssg&s=10",
  },
];

const Explore = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter((item) => item.category === selectedCategory);
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* 🔥 HERO SECTION */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-20 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Discover Amazing Products
        </h1>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Explore trending items, top deals, and new arrivals curated just for you.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          {/* Shop Now */}
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Shop Now
          </button>

          {/* View Deals */}
          <button
            onClick={() =>
              document.getElementById("products")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            View Deals
          </button>

        </div>
      </div>

      {/* 🧭 CATEGORIES */}
     {categories.map((cat, i) => (
  <div
    key={i}
    onClick={() => setSelectedCategory(cat.name)}
    className={`p-6 rounded-2xl shadow cursor-pointer text-center transition 
      ${
        selectedCategory === cat.name
          ? "bg-black text-white"
          : "bg-white hover:shadow-lg"
      }`}
  >
    <div className="text-3xl">{cat.icon}</div>
    <p className="mt-2 font-medium">{cat.name}</p>
  </div>
))}

      {/* 🔥 PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 py-12" id="products">

        <h2 className="text-2xl font-bold mb-6">Trending Products</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
            >

              <img
                src={item.img}
                alt={item.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-4">

                <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                  {item.tag}
                </span>

                <h3 className="mt-2 font-semibold">{item.name}</h3>

                <p className="text-gray-600">{item.price}</p>

                <button
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* 💸 CTA SECTION */}
      <div className="bg-black text-white text-center py-16 px-6">

        <h2 className="text-3xl font-bold">
          Ready to Explore More?
        </h2>

        <p className="text-gray-400 mt-2">
          Find your perfect product at unbeatable prices.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Start Shopping
        </button>

      </div>

    </div>
  );
};

export default Explore;