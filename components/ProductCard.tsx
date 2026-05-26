type ProductCardProps = {
  title: string;
  price: string;
};

export default function ProductCard({
  title,
  price,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <div className="h-48 rounded-xl bg-gray-200"></div>

      <h2 className="mt-4 text-xl font-semibold text-[#4B3621]">
        {title}
      </h2>

      <p className="mt-2 text-lg text-[#C97B63]">
        {price}
      </p>

      <button className="mt-4 rounded-lg bg-[#4B3621] px-4 py-2 text-white hover:opacity-90">
        View Product
      </button>
    </div>
  );
}