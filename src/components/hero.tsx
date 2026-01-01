import Image from "next/image";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
      <section id="home" className="flex flex-col lg:flex-row items-stretch bg-[#F7FAFCFF]">
        {/* LEFT */}
        {/* Navbar */}
        <div className="w-full lg:w-1/2 px-6 lg:pl-40 pt-12 lg:pt-5 pb-16">
          <nav className="flex items-center justify-between py-5 md:pb-20 pr-0 md:pr-10">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>

            <ul className="hidden md:flex gap-8 text-sm font-medium text-[#19355d]">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#28aeb1] transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[#28aeb1] transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#popular"
                  className="hover:text-[#28aeb1] transition"
                >
                  Popular
                </a>
              </li>
              <li>
                <a
                  href="#tour"
                  className="hover:text-[#28aeb1] transition"
                >
                  Tour
                </a>
              </li>
              
            </ul>
          </nav>

          {/* Hero */}
          <h1 className="text-2xl sm:text-5xl xl:text-5xl font-extrabold leading-tight text-[#19355d]">
            Solusi Lengkap <br />
            <span className="text-[#28aeb1]">Untuk Setiap Perjalanan</span>
          </h1>

          <p className="mt-6 max-w-lg text-gray-600 text-base sm:text-lg leading-relaxed">
            Platform travel terpadu untuk kebutuhan transportasi, akomodasi,
            dan paket wisata di berbagai destinasi.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
            onClick={() => router.push('/tour')}
            className="bg-[#19355d] hover:bg-[#28aeb1] text-white font-semibold px-8 py-4 rounded-lg transition">
              Cari Wisata
            </button>

            <button 
            onClick={() => router.push('/maintenance')}
            className="bg-gray-200 hover:bg-gray-300 text-[#19355d] font-semibold px-8 py-4 rounded-lg transition">
              Cari Tiket
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-auto">
            <Image
              src="/hero2.jpg"
              alt="Hotel View"
              fill
              className="object-cover"
            />
        </div>
      </section>
  )
}

export default Hero