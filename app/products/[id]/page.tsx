<input
  type="text"
  placeholder="Search products..."
  className="mb-6 w-full rounded-lg border p-3"
/>

export default function ProductDetailsPage() {
  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="h-96 rounded-2xl bg-gray-300"></div>

        <div>
          <h1 className="text-4xl font-bold text-[#4B3621]">
            Handmade Vase
          </h1>

          <p className="mt-3 text-2xl text-[#C97B63]">$35</p>

          <p className="mt-6 text-gray-700">
            Beautiful handcrafted ceramic vase created by local artisans.
            Every piece is unique and made with care.
          </p>

          <button className="mt-8 rounded-lg bg-[#4B3621] px-6 py-3 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}