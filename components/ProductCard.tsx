import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-md">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="h-48 w-full rounded-xl object-cover"
      />

      <h2 className="mt-4 text-xl font-semibold text-[#4B3621]">
        {title}
      </h2>

      <p className="mt-2 text-lg text-[#C97B63]">
        {price}
      </p>

      <Link href="/products/1">
  <button className="mt-4 rounded-lg bg-[#4B3621] px-4 py-2 text-white">
    View Product
  </button>
</Link>
    </div>
  );
}