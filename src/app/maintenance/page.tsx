"use client";

import Image from "next/image";
import Link from "next/link";

const WA_NUMBER = "6281385997264";

const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`
Halo Admin 

Saya ingin melakukan pemesanan tiket.
Mohon dibantu info detail dan proses pemesanannya ya
`)}`;

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE SECTION */}
        <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[520px]">
          <Image
            src="/maintenance.png"
            alt="Website Maintenance"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#19355d] mb-6">
            Sistem Pemesanan
            <br />
            Sedang Dalam Pengembangan
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Kami sedang menyempurnakan sistem pemesanan agar lebih cepat,
            aman, dan nyaman untuk digunakan.
            <br />
            <span className="font-semibold text-gray-700">
              Untuk sementara, pemesanan tetap dapat dilakukan melalui WhatsApp.
            </span>
          </p>

          <Link
            href={waLink}
            target="_blank"
            className="inline-block bg-[#28aeb1] hover:bg-[#19355d] transition text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
          >
            Pesan Tiket via WhatsApp
          </Link>

          <p className="text-sm text-gray-400 mt-6">
            Tim kami siap membantu proses pemesanan secara manual.
          </p>
        </div>

      </div>
    </main>
  );
}
