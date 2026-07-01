import React from "react";
import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
const { 
  cart = [], 
  removeFromCart, 
  clearCart, 
  increaseQty, 
  decreaseQty 
} = useCart();
  const navigate = useNavigate();

const total = cart.reduce((acc, item) => {
  const price = Number(String(item.price).replace("$", "")) || 0;
  return acc + price * (item.qty || 1);
}, 0);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🛒 Your Cart</h1>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-sm text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Empty State */}
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-black text-white px-5 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                 <div className="flex items-center gap-2 mt-1">
  <button
    onClick={() => decreaseQty(item.id)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    -
  </button>

  <span className="font-semibold">{item.qty}</span>

  <button
    onClick={() => increaseQty(item.id)}
    className="px-2 py-1 bg-gray-200 rounded"
  >
    +
  </button>
</div>
                  <p className="font-bold mt-1">{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="bg-white shadow-lg rounded-xl p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">${total}</span>
            </div>
<div className="space-y-3">

  {/* Continue Shopping */}
  <button
    onClick={() => navigate("/Product")}
    className="w-full bg-gray-200 text-black py-3 rounded-lg hover:bg-gray-300 transition"
  >
    Continue Shopping
  </button>

  {/* Checkout */}
 <button
  onClick={() => navigate("/checkout")}
  disabled={cart.length === 0}
  className={`w-full py-3 rounded-lg transition ${
    cart.length === 0
      ? "bg-gray-400 cursor-not-allowed text-white"
      : "bg-black text-white hover:bg-gray-800"
  }`}
>
  Checkout
</button>

</div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Cart;