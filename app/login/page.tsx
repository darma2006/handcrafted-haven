"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    const { error } = await authClient.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("Login failed: " + error.message);
    } else {
      setMessage("Login successful!");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5E9DA]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-[#4B3621]">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-[#4B3621] py-3 text-white"
        >
          Login
        </button>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}