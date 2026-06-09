"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );
    setCart(storedCart);
  }, []);

  function removeFromCart(index: number) {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  }

  return (
    <main className="min-h-screen p-10 bg-[#F5E9DA]">
      <h1 className="mb-8 text-4xl font-bold text-[#4B3621]">
        Shopping Cart
      </h1>
      <p className="mb-4">Items in cart: {cart.length}</p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
            className="mb-4 rounded bg-white p-4 shadow"
          >
            <h2>{item.title}</h2>
            <p>{item.price}</p>

            <button
              onClick={() => removeFromCart(index)}
              className="mt-2 rounded bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </main>
  );
}