"use client";

import { ArrowRight } from "lucide-react";
import CardTour from "./CardTour";
import { useRouter } from 'next/navigation';

const generateWaLink = (phone: string, title: string) => {
  const message = `Halo Admin Explora tour & travel,

Saya tertarik untuk memesan *${title}*.
Boleh minta info lengkapnya?

Terima kasih
`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const tours = [
  {
    image: "/trending/museum-bogor.jpg",
    tag: "Edukasi",
    price: "Rp 393.000",
    title: "Paket 3 Museum di Bogor",
    days: "1 Hari Full Trip",
    location: "Bogor, Jawa Barat",
    bookUrl: generateWaLink("628123456789", "Paket 3 Museum di Bogor"),
  },
  {
    image: "/trending/pulau-seribu.jpg",
    tag: "Island Trip",
    price: "Rp 500.000",
    title: "Wisata Pulau Seribu 2D1N",
    days: "2 Hari 1 Malam",
    location: "Pulau Seribu, Jakarta",
    bookUrl: generateWaLink("628123456789", "Wisata Pulau Seribu 2D1N"),
  },
];


export default function TrendingTours() {
  const router = useRouter();

  return (
    <section id="tour" className="max-w-7xl mx-auto px-6 py-15 md:py-20">
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

          <button
            onClick={() => router.push('/tour')}
            className="inline-flex items-center gap-2 mt-6 text-[#28aeb1] font-semibold hover:underline"
          >
            Lihat Semua Paket Wisata <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-8/12">
          <div className="flex gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-4 no-scrollbar">
            {tours.map((tour, i) => (
              <CardTour
                key={i}
                image={tour.image}
                tag={tour.tag}
                price={tour.price}
                title={tour.title}
                days={tour.days}
                location={tour.location} 
                bookUrl={""}           
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
