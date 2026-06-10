"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister() {
    const { error } = await authClient.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage("Registration failed: " + error.message);
    } else {
      setMessage(
        "Account created! Please check your email to confirm your account."
      );
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5E9DA]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-[#4B3621]">
          Create Account
        </h1>

        <label
  htmlFor="email"
  className="mb-1 block font-medium text-[#4B3621]"
>
  Email
</label>

<input
  id="email"
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="mb-4 w-full rounded-lg border p-3"
/>

<label
  htmlFor="password"
  className="mb-1 block font-medium text-[#4B3621]"
>
  Password
</label>

<input
  id="password"
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="mb-4 w-full rounded-lg border p-3"
/>

        <button
          onClick={handleRegister}
          className="w-full rounded-lg bg-[#4B3621] py-3 text-white"
        >
          Register
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