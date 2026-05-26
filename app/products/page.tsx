import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <h1 className="mb-8 text-4xl font-bold text-[#4B3621]">
        Products
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        <ProductCard title="Handmade Vase" price="$35" />
        <ProductCard title="Crochet Plushie" price="$20" />
        <ProductCard title="Wooden Bowl" price="$50" />
      </div>
    </main>
  );
}