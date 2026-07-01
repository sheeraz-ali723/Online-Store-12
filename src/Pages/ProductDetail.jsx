import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: "$999",
    img: "https://images.unsplash.com/photo-1700805732158-6f1169780ca7?w=600",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 2,
    name: "Apple Watch Series 9",
    price: "$399",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    desc: "Advanced smartwatch with fitness tracking, ECG, and smart notifications.",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "$299",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrzIlc4cJswtEBn9ujFbFwVW1zQGBtRfVbOPDQmsHbg&s=10",
    desc: "Industry-leading noise canceling headphones with crystal clear sound quality.",
  },
  {
    id: 4,
    name: "Nike Air Max 270",
    price: "$149",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7PAVYMmBifTLnOuya98aebXd5VTexlSqFY0TvZjGaaA&s=10",
    desc: "Comfortable and stylish sneakers designed for everyday wear and performance.",
  },
   {
    id: 5,
    name: "Samsung Galaxy Watch 6",
    price: "$399",
    tag: "⭐ Trending",
    category: "Watch",
    img: "https://images.unsplash.com/photo-1617043983671-adaadcaa2460?w=800&auto=format&fit=crop&q=80",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 6,
    name: "Garmin Fenix 7",
    price: "$699",
    tag: "🏃 Sport",
    category: "Watch",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEup3hqkYvU5vEkCpNBK63M4No92WqTBwlqypRhbGPIg&s=10",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },

  // 🎧 HEADPHONES (3)
  {
    id: 7,
    name: "Sony WH-1000XM5",
    price: "$349",
    tag: "🎧 Top",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 8,
    name: "Bose QuietComfort Ultra",
    price: "$429",
    tag: "🔇 Noise Cancel",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1612444530582-fc66183b16f7?w=800&auto=format&fit=crop&q=80",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 9,
    name: "JBL Tune 770NC",
    price: "$149",
    tag: "💥 Budget",
    category: "Headphone",
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },

  // 🎧 AIRBUDS / EARBUDS (3)
  {
    id: 10,
    name: "Apple AirPods Pro 2",
    price: "$249",
    tag: "🍏 Apple",
    category: "Earbuds",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjP0em38sYOOkMATx5Ipb2KK9wSHhO1OQp-EGXMY4ssg&s=100",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 11,
    name: "Samsung Galaxy Buds 2 Pro",
    price: "$199",
    tag: "⭐ Best",
    category: "Earbuds",
    img: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=800&auto=format&fit=crop&q=80",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
  {
    id: 12,
    name: "Nothing Ear (2)",
    price: "$149",
    tag: "⚡ Trend",
    category: "Earbuds",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjP0em38sYOOkMATx5Ipb2KK9wSHhO1OQp-EGXMY4ssg&s=10",
    desc: "Latest Apple flagship smartphone with A17 chip, pro camera system, and titanium design.",
  },
];
const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

const cartContext = useCart();
const addToCart = cartContext?.addToCart;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        Product not found
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">

        <img
          src={product.img}
          alt={product.name}
          className="rounded-xl w-full object-cover"
        />

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {product.desc}
          </p>

          <p className="text-2xl font-semibold mt-5">
            ${product.price}
          </p>

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
    </div>
  );
};
export default ProductDetail;