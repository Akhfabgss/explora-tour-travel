'use client';

import Image from "next/image";

const statistics = [
  { key: "Countries", value: "192" },
  { key: "Hotels", value: "479" },
  { key: "Rooms", value: "2093" },
  { key: "Workers", value: "85" },
];

export default function BestServiceSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* IMAGE COLUMN */}
          <div className="w-full md:w-1/2 h-[320px] md:h-[520px] relative">
            <Image
              src="/company.png"
              alt="Company Building"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#19355d] leading-tight">
              Layanan Terbaik untuk Setiap Perjalanan
            </h2>

            <p className="mt-7 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Kami menghadirkan solusi travel lengkap dalam satu platform.
              Mulai dari transportasi, akomodasi, hingga paket wisata. Semua dirancang
              untuk memberi pengalaman perjalanan yang aman, nyaman, dan bebas ribet.
            </p>

            {/* STATISTICS */}
            <div className="mt-20 grid grid-cols-2 gap-y-8 gap-x-10">
              {statistics.map((item, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-[#28aeb1]">
                    {item.value}
                  </div>
                  <div className="text-[#19355d] font-medium mt-1">
                    {item.key}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
