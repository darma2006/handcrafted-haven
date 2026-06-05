export default function SellerPage() {
  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <div className="flex items-center gap-6">
        <div className="h-32 w-32 rounded-full bg-gray-300"></div>

        <div>
          <h1 className="text-4xl font-bold text-[#4B3621]">
            Maria's Crafts
          </h1>

          <p className="mt-2 text-gray-700">
            Handmade artisan products inspired by nature and tradition.
          </p>
        </div>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-[#4B3621]">
        Products by this Seller
      </h2>
    </main>
  );
}