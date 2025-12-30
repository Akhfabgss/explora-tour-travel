'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Layanan apa saja yang tersedia di platform ini?",
    answer:
      "Kami menyediakan layanan travel lengkap mulai dari tiket pesawat, kereta, bus, kapal laut, hotel, hingga paket wisata dalam satu platform.",
  },
  {
    question: "Apakah pemesanan tiket dan paket wisata aman?",
    answer:
      "Aman. Semua transaksi dilindungi sistem keamanan dan kami hanya bekerja sama dengan partner resmi dan terpercaya.",
  },
  {
    question: "Apakah saya bisa memesan untuk rombongan?",
    answer:
      "Bisa banget. Kami melayani pemesanan untuk rombongan sekolah, kantor, keluarga, hingga gathering dengan paket yang bisa disesuaikan.",
  },
  {
    question: "Bagaimana jika saya butuh bantuan saat perjalanan?",
    answer:
      "Tenang, tim customer support kami siap membantu 24/7 melalui chat, email, atau kontak yang tersedia di website.",
  },
];


export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 items-start">

          {/* FAQ CONTENT - Mobile First */}
          <div className="lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#19355d]">
              Pertanyaan Umum
            </h2>

            <p className="mt-4 text-slate-500 max-w-xl leading-relaxed">
              Berikut beberapa pertanyaan yang sering diajukan seputar layanan travel kami.
              Jika masih ada pertanyaan lain, jangan ragu untuk menghubungi kami melalui form kontak di bawah.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() =>
                      setActiveIndex(isOpen ? null : index)
                    }
                    className="cursor-pointer border rounded-xl px-4 sm:px-6 py-4 sm:py-5 transition hover:shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base sm:text-lg font-semibold text-[#19355d]">
                        {faq.question}
                      </h4>

                      <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#19355d] text-white">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 sm:mt-4 text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* IMAGE - Mobile Responsive */}
          <div className="relative h-64 sm:h-80 lg:h-[560px] lg:order-1">
            <Image
              src="/faq.jpg"
              alt="Hotel View"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
