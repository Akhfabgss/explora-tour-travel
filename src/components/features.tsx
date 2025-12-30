import { ShieldCheck, Headphones, Sliders } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Aman & Terpercaya",
    description:
      "Kami hanya bekerja sama dengan partner resmi dan terpercaya. Semua transaksi dilindungi sistem keamanan terbaik.",
  },
  {
    icon: Headphones,
    title: "Layanan 24/7",
    description:
      "Butuh bantuan kapan pun? Tim support kami siap membantu 24 jam non-stop, sebelum, saat, dan setelah perjalanan.",
  },
  {
    icon: Sliders,
    title: "Fleksibel & Lengkap",
    description:
      "Pesan sesuai kebutuhanmu—tiket, hotel, transportasi, hingga paket wisata bisa disesuaikan dengan rencana perjalananmu.",
  },
];

export default function Features() {
  return (
    <section id="services" className="bg-white py-15 md:py-46">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-3 text-center">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              {/* ICON */}
              <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-[#19355d]" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-[#19355d] mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 max-w-xs mb-4">
                {item.description}
              </p>

              {/* LINK */}
              <a
                href="#"
                className="text-[#28aeb1] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
