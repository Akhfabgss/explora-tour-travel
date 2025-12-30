'use client';

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    imageSrc: "/testimoni/testimonial-1.jpg",
    profileImageSrc: "/testimoni/profile-1.jpg",
    quote:
      "Pesan tiket pesawat, hotel, sampai paket wisata semuanya gampang banget. Proses cepat dan harganya masuk akal. Bikin liburan jadi jauh lebih santai.",
    name: "Rizky Pratama",
    title: "Traveler & Content Creator",
  },
  {
    imageSrc: "/testimoni/testimonial-2.jpg",
    profileImageSrc: "/testimoni/profile-2.jpg",
    quote:
      "Kami pesan paket wisata rombongan sekolah dan semuanya diurus rapi. Anak-anak senang, guru tenang. Recommended buat trip edukasi.",
    name: "Dewi Lestari",
    title: "Guru & Koordinator Study Tour",
  },
  {
    imageSrc: "/testimoni/testimonial-3.jpg",
    profileImageSrc: "/testimoni/profile-3.jpg",
    quote:
      "Customer service-nya responsif banget. Waktu jadwal kereta berubah langsung dibantu tanpa ribet. Fix bakal pakai lagi.",
    name: "Andi Saputra",
    title: "Pekerja Profesional",
  },
];

export default function TestimonialsSection() {
  const [imageSlider, setImageSlider] = useState<Slider | null>(null);
  const [textSlider, setTextSlider] = useState<Slider | null>(null);

  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    swipe: true,
  };

  return (
    <section id="testimoni" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 items-center">

          {/* IMAGE - mobile first */}
          <div className="relative order-1 lg:order-2 lg:col-span-2">
            <Slider
              {...settings}
              asNavFor={textSlider as any}
              ref={(slider) => setImageSlider(slider)}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="relative h-[200px] sm:h-[260px] md:h-[320px] lg:h-[480px]"
                >
                  <Image
                    src={item.imageSrc}
                    alt="testimonial image"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>

            {/* CONTROLS */}
            <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-4 md:right-4 bg-white rounded-xl shadow-md px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-3 flex gap-1 sm:gap-2 md:gap-3">
              <button
                onClick={() => imageSlider?.slickPrev()}
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#19355d] text-white hover:bg-[#28aeb1]"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => imageSlider?.slickNext()}
                className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-[#19355d] text-white hover:bg-[#28aeb1]"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* TEXT */}
          <div className="order-2 lg:order-1 lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#19355d]">
              Testimonials
            </h2>

            <p className="mt-3 sm:mt-4 text-slate-500 max-w-xl text-base sm:text-lg md:text-xl">
              Here are what some of our amazing customers are saying about our
              hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <Slider
              {...settings}
              asNavFor={imageSlider as any}
              ref={(slider) => setTextSlider(slider)}
              className="mt-6 sm:mt-10 md:mt-20"
            >
              {testimonials.map((item, i) => (
                <div key={i}>
                  <blockquote className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                    <span className="text-[#19355d] text-2xl sm:text-3xl mr-1 sm:mr-2">“</span>
                    {item.quote}
                    <span className="text-[#19355d] text-2xl sm:text-3xl ml-1 sm:ml-2">”</span>
                  </blockquote>

                  <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={item.profileImageSrc}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="text-base sm:text-lg md:text-xl font-semibold text-[#28aeb1]">
                        {item.name}
                      </div>
                      <div className="text-sm sm:text-slate-500">{item.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
}
