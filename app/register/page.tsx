export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F5E9DA]">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-3xl font-bold text-[#4B3621]">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button className="w-full rounded-lg bg-[#4B3621] py-3 text-white">
          Register
        </button>
      </div>
    </main>
  );
}