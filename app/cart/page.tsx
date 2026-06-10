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
      <p className="mb-6 text-lg text-[#4B3621]">
  Items in cart: {cart.length}
</p>

      {cart.length === 0 ? (
        <p className="text-lg text-gray-600">
  Your cart is empty. Add some handmade treasures!
</p>
      ) : (
        cart.map((item, index) => (
  <div
    key={index}
    className="mb-4 rounded-xl bg-white p-6 shadow-lg"
  >
    <h2 className="text-xl font-semibold text-[#4B3621]">
      {item.title}
    </h2>

    <p className="mt-2 text-lg text-[#C97B63]">
      {item.price}
    </p>

    <button
      onClick={() => removeFromCart(index)}
      className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:opacity-90"
    >
      Remove Item
    </button>
  </div>
))
      )}
    </main>
  );
}