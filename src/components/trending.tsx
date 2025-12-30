"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const tours = [
  {
    image: "/trending/museum-bogor.jpg",
    tag: "Edukasi",
    price: "Rp 393.000",
    title: "Paket 3 Museum di Bogor",
    days: "1 Hari Full Trip",
    location: "Bogor, Jawa Barat",
  },
  {
    image: "/trending/pulau-seribu.jpg",
    tag: "Island Trip",
    price: "Rp 500.000",
    title: "Wisata Pulau Seribu 2D1N",
    days: "2 Hari 1 Malam",
    location: "Pulau Seribu, Jakarta",
  },
];


export default function TrendingTours() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-15 md:py-20">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT CONTENT */}
        <div className="lg:w-4/12">
          <h2 className="text-4xl font-extrabold text-[#19355d]">
            Paket Wisata Populer
          </h2>

          <p className="mt-4 text-gray-500 leading-relaxed">
            Pilihan paket wisata favorit yang paling banyak diminati.
            Mulai dari wisata edukasi hingga liburan seru, semua dirancang lengkap dan nyaman.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 mt-6 text-[#28aeb1] font-semibold hover:underline"
          >
            Lihat Semua Paket Wisata <ArrowRight size={18} />
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-8/12">
          <div className="flex gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 no-scrollbar">
            {tours.map((tour, i) => (
              <div
                key={i}
                className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl shadow-lg snap-start flex flex-col"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-[#28aeb1]">{tour.tag}</span>
                    <span className="text-[#19355d]">
                      {tour.price}{" "}
                      <span className="text-gray-400 font-normal">
                        /pax
                      </span>
                    </span>
                  </div>

                  <h3 className="mt-3 font-bold text-lg text-[#19355d] leading-snug">
                    {tour.title}
                  </h3>

                  <div className="flex gap-4 text-xs text-gray-400 mt-3">
                    <span>🔥 Trending</span>
                    <span>⏱ {tour.days}</span>
                    <span>📍 {tour.location}</span>
                  </div>

                  <button className="mt-6 bg-[#28aeb1] text-white py-3 rounded-lg font-semibold hover:bg-[#19355d] transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
