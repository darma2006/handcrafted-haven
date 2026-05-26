import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5E9DA]">
      <Navbar />

      <section className="p-10">
        <h1 className="text-5xl font-bold text-[#4B3621]">
          Handcrafted Haven
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-[#4B3621]">
          Discover unique handmade treasures crafted by talented artisans
          around the world.
        </p>

        <button className="mt-6 rounded-lg bg-[#C97B63] px-6 py-3 text-white hover:opacity-90">
          Explore Products
        </button>
      </section>
    </main>
  );
}