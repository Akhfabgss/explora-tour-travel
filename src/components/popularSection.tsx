"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { useRouter } from 'next/navigation';
import CardTicket from "./cardPopular";
import { popularTickets } from "../data/tickets";

export default function PopularHotels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section id="popular" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-extrabold text-[#19355d]">
            Popular Ticket
          </h2>

          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-[#19355d] text-white flex items-center justify-center"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-[#19355d] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            no-scrollbar
          "
        >
          {popularTickets.map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[360px] lg:min-w-[380px] snap-start"
            >
              <CardTicket
                {...item}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
