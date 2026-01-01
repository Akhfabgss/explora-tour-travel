import Image from "next/image";
import Link from "next/link";
import { Star, Users } from "lucide-react";

interface Props {
  image: string;
  title: string;
  rating: number;
  description: string;
  buyers: number;
  bookUrl: string;
}

export default function CardTicket({
  image,
  title,
  rating,
  description,
  buyers,
  bookUrl,
}: Props) {
  return (
    <div className="ml-2 bg-white rounded-tl-3xl rounded-br-[3rem] shadow-[0_0_10px_rgba(0,0,0,0.12)] overflow-hidden flex flex-col my-5">
      {/* IMAGE */}
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        {/* TITLE + RATING */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-1 text-yellow-500 font-semibold">
            <Star className="w-5 h-5 fill-yellow-400" />
            {rating}
          </div>
        </div>

        {/* BUYERS */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <Users className="w-4 h-4" />
          <span>{buyers} Terjual </span>
        </div>

        {/* DESCRIPTION */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* BUTTON */}
        <Link
          href={bookUrl}
          target="_blank"
          className="mt-auto bg-[#28aeb1] hover:bg-[#19355d] transition text-white py-4 text-center font-semibold rounded-br-[3rem]"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}
