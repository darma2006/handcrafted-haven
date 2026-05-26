export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-[#4B3621] px-8 py-4 text-white">
      <h1 className="text-2xl font-bold">Handcrafted Haven</h1>

      <div className="flex gap-6 text-lg">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/seller">Sellers</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}