"use client";

import { Facebook, Twitter, Phone } from "lucide-react";
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
              { label: "Ticket", id: "ticket" },
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
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Phone size={20} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <p className="mt-10 text-sm text-gray-500">
            © Copyright 2020, Treact Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
