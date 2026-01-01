import Image from "next/image";
import Link from "next/link";

interface CardTourProps {
  image: string;
  tag: string;
  price: string;
  title: string;
  days: string;
  location: string;
  bookUrl: string;
}

export default function CardTour({
  image,
  tag,
  price,
  title,
  days,
  location,
  bookUrl
}: CardTourProps) {
  return (
    <div className="min-w-[280px] sm:min-w-[380px] bg-white rounded-xl shadow-lg snap-start flex flex-col">
      {/* IMAGE */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between text-sm font-semibold">
          <span className="text-[#28aeb1]">{tag}</span>
          <span className="text-[#19355d]">
            {price}{" "}
            <span className="text-gray-400 font-normal">
              /pax
            </span>
          </span>
        </div>

        <h3 className="mt-3 font-bold text-lg text-[#19355d] leading-snug">
          {title}
        </h3>

        <div className="flex gap-4 text-xs text-gray-400 mt-3">
          <span>🔥 Trending</span>
          <span>⏱ {days}</span>
          <span>📍 {location}</span>
        </div>

        <Link
          href={bookUrl}
          target="_blank"
          className="mt-6 bg-[#28aeb1] text-white py-3 rounded-lg font-semibold hover:bg-[#19355d] transition text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}