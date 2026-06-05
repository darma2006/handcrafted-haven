export default function Footer() {
  return (
    <footer className="bg-[#4B3621] text-white py-6 mt-12">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-xl font-bold">Handcrafted Haven</h3>

        <p className="mt-2">
          Supporting artisans and handmade creativity.
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Pinterest</a>
        </div>

        <p className="mt-4 text-sm">
          © 2026 Handcrafted Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}