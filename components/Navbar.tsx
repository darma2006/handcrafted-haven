import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#4B3621] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">
          Handcrafted Haven
        </h1>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/seller">Sellers</Link>
          <Link href="/login">Login</Link>
          <Link href="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  );
}