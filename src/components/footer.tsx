"use client";

import { Music3, Instagram, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] w-full px-6">
      <div className="max-w-7xl mx-auto py-20 lg:py-24">
        <div className="flex flex-col items-center text-center">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/logo-putih.png"
              alt="Treact"
              width={150}
              height={150}
            />
          </div>

          {/* NAV */}
          <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium">
            {[
              { label: "Home", id: "home" },
              { label: "popular", id: "popular" },
              { label: "Services", id: "services" },
              { label: "Tour", id: "tour" },
              { label: "Testimoni", id: "testimoni" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-white border-b-2 border-transparent hover:border-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* SOCIAL */}
          <div className="mt-10 flex gap-6">
            <a target="_blank" href="https://www.tiktok.com/@official.exploratour?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-white transition">
              <Music3 size={20} />
            </a>
            <a target="_blank" href="https://www.instagram.com/exploratravel.co/" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a target="_blank" href="https://wa.me/6281210272198" className="text-gray-400 hover:text-white transition">
              <Phone size={20} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-10 text-sm text-gray-500">
            © Copyright 2020, Kodehana Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
