import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";


export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-[#F5E9DA]">
  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="text-5xl font-bold text-[#4B3621] md:text-7xl">
      Discover Handmade Treasures
    </h1>


    <p className="mt-6 max-w-2xl text-lg text-gray-700">
      Explore unique handcrafted products created by talented artisans.
      Support creativity, sustainability, and local craftsmanship.
    </p>


    
    <Link
  href="/products"
  className="mt-8 inline-block rounded-lg bg-[#C97B63] px-8 py-4 text-white hover:opacity-90"
>

  <section className="mx-auto max-w-6xl px-6 py-16">
  <h2 className="mb-8 text-4xl font-bold text-[#4B3621]">
    Featured Products
  </h2>

  <div className="grid gap-6 md:grid-cols-3">
    <ProductCard
      title="Handmade Vase"
      price="$35"
      image="/images/vase.jpg"
    />

    <ProductCard
      title="Crochet Plushie"
      price="$20"
      image="/images/crochet.jpg"
    />

    <ProductCard
      title="Wooden Bowl"
      price="$50"
      image="/images/wood-bowl.jpg"
    />
  </div>
</section>


  Explore Products
</Link>
  </section>
</main>
     <Footer />
    </>

  );
}