import React, { useState } from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";

const productsData = [
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


const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const { addToCart } = useCart(); 
  const navigate = useNavigate();

  const filteredProducts = productsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          🛍️ Our Products
        </h1>
        <p className="text-gray-500">
          Find the best deals on premium products
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="mt-4 w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="p-5 space-y-2">
              <span className="text-xs text-blue-600 font-semibold">
                {product.category}
              </span>

              <h2 className="text-lg font-bold text-gray-800">
                {product.name}
              </h2>

              {/* Rating */}
             {/* Rating */}
            <div className="text-yellow-500 text-sm">
                 ⭐ 4.5
                </div>

              {/* Price */}
              <div className="text-xl font-bold text-gray-900">
                ${product.price}
              </div>

              {/* Button */}
              
      <button
 onClick={() => {
  addToCart && addToCart(product);
  navigate("/cart");
}}
  className="mt-6 w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
>
  🛒 Add to Cart
</button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No products found 😕
        </p>
      )}
    </div>
  );
};

export default ProductsPage;