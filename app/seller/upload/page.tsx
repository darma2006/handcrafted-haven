"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const { error } = await supabase
      .from("products")
      .insert([
        {
          title,
          description,
          price,
          image_url: imageUrl,
          seller_name: sellerName,
        },
      ]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Product added successfully!");
      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setSellerName("");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-[#4B3621]">
          Upload Product
        </h1>

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="mb-4 w-full rounded border p-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <input
          className="mb-4 w-full rounded border p-3"
          placeholder="Seller Name"
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded bg-[#4B3621] py-3 text-white"
        >
          Upload Product
        </button>

        {message && (
          <p className="mt-4 text-center">{message}</p>
        )}
      </div>
    </main>
  );
}