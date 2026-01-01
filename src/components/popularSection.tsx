"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useRouter } from 'next/navigation';
import CardTicket from "./cardPopular";

const generateWaLink = (phone: string, title: string) => {
  const message = `Halo Admin Explora tour & travel,

Saya tertarik untuk memesan *${title}*.
Boleh minta info lengkapnya?

Terima kasih 
`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};


const PopularSection = [
  {
    image: "/popular/pesawat3.png",
    title: "Tiket Pesawat",
    rating: 5,
    buyers: 1240,
    bookUrl: "https://wa.me/628123456789",
    description:
      "Pilihan maskapai terbaik dengan jadwal fleksibel dan harga kompetitif untuk perjalanan anda.",
  },
  {
    image: "/popular/bus3.png",
    title: "Tiket Bus Antar Kota",
    rating: 4.9,
    buyers: 760,
    description:
      "Bus nyaman dengan fasilitas lengkap untuk perjalanan darat yang hemat dan praktis.",
  },
  {
    image: "/popular/kereta3.png",
    title: "Tiket Kereta Api",
    rating: 4.9,
    buyers: 1680,
    description:
      "Nikmati perjalanan tepat waktu dan nyaman dengan berbagai pilihan kelas kereta.",
  },
  {
    image: "/popular/wisata3.png",
    title: "Paket Wisata Populer",
    rating: 4.9,
    buyers: 890,
    description:
      "Paket wisata lengkap dengan itinerary menarik, guide profesional, dan pengalaman tak terlupakan.",
  },
  {
    image: "/popular/kapal3.png",
    title: "Tiket Kapal Laut",
    rating: 4.8,
    buyers: 540,
    description:
      "Perjalanan laut yang aman dan nyaman dengan jadwal rutin ke berbagai pulau di Indonesia.",
  },
  {
    image: "/popular/hotel3.png",
    title: "Hotel Favorit Traveler",
    rating: 4.7,
    buyers: 980,
    description:
      "Beragam pilihan hotel dari budget hingga premium di destinasi favorit wisatawan.",
  },
];

export default function PopularHotels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="popular" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-extrabold text-[#19355d]">
            Popular Ticket
          </h2>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-[#19355d] text-white flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-[#19355d] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
          "
        >
          {PopularSection.map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[360px] lg:min-w-[380px] snap-start"
            >
              <CardTicket
                {...item}
                bookUrl={generateWaLink(
                  "6281385997264",
                  item.title,
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
