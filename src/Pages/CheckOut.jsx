import React from "react";
import { useCart } from "../CartContext";

const Checkout = () => {
  const { cart } = useCart();

  const total = cart.reduce((acc, item) => {
    const price = Number(String(item.price).replace("$", "")) || 0;
    return acc + price * (item.qty || 1);
  }, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between border p-3 rounded">
                <span>{item.name} (x{item.qty})</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-bold mt-6">
            Total: ${total}
          </h2>
        </>
      )}
    </div>
  );
};

export default Checkout;