import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#F5E9DA] p-10">
      <h1 className="mb-8 text-4xl font-bold text-[#4B3621]">
        Products
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product: any) => (
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