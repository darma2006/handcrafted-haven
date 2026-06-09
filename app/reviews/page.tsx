"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ReviewsPage() {
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  async function submitReview() {
    const { error } = await supabase
      .from("reviews")
      .insert([
        {
          product_id: 1,
          rating: Number(rating),
          comment,
        },
      ]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("Review submitted!");
      setComment("");
    }
  }

  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <div className="mx-auto max-w-xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-[#4B3621]">
          Leave a Review
        </h1>

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="mb-4 w-full rounded border p-3"
        >
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>

        <textarea
          placeholder="Write your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4 w-full rounded border p-3"
        />

        <button
          onClick={submitReview}
          className="w-full rounded bg-[#4B3621] py-3 text-white"
        >
          Submit Review
        </button>

        {message && (
          <p className="mt-4 text-center">{message}</p>
        )}
      </div>
    </main>
  );
}