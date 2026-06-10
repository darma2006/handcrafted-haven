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

       <label htmlFor="title" className="mb-1 block font-medium">
  Product Title
</label>

<input
  id="title"
  className="mb-4 w-full rounded border p-3"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>

        <label htmlFor="description" className="mb-1 block font-medium">
  Description
</label>

<textarea
  id="description"
  className="mb-4 w-full rounded border p-3"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
/>

        <label htmlFor="price" className="mb-1 block font-medium">
  Price
</label>

<input
  id="price"
  className="mb-4 w-full rounded border p-3"
  value={price}
  onChange={(e) => setPrice(e.target.value)}
/>

        <label htmlFor="imageUrl" className="mb-1 block font-medium">
  Image URL
</label>

<input
  id="imageUrl"
  className="mb-4 w-full rounded border p-3"
  value={imageUrl}
  onChange={(e) => setImageUrl(e.target.value)}
/>

        <label htmlFor="sellerName" className="mb-1 block font-medium">
  Seller Name
</label>

<input
  id="sellerName"
  className="mb-4 w-full rounded border p-3"
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