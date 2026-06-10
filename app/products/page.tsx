import ProductCard from "@/components/ProductCard";
import { supabase } from "@/lib/supabase";

export default async function ProductsPage() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*");

  if (error) {
    return (
      <main className="p-10">
        <p>Error loading products: {error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <h1 className="mb-8 text-4xl font-bold text-[#4B3621]">
        Products
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={`$${product.price}`}
            image={product.image_url}
          />
        ))}
      </div>
    </main>
  );
}