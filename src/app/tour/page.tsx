"use client";

import React, { useState } from "react";
import CardTour from "../../components/CardTour";
import { Search } from "lucide-react";
import Navbar from "@/src/components/navbar";
import { allTours } from "../../data/tours";

export default function TourPage() {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(searchInput);
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") handleSearch();
  };

  // Filter tours based on search term
  const filteredTours = allTours.filter((tour) =>
    tour.title.toLowerCase().includes(search.toLowerCase()) ||
    tour.location.toLowerCase().includes(search.toLowerCase()) ||
    tour.tag.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="w-full px-6 md:px-12 py-8 bg-white">
      <div className="w-full mx-auto text-center items-center md:mb-12 mt-8">
        <h1 className="text-3xl font-bold mb-4 text-[#28aeb1]">
          All <span className="text-[#19355d]">Tours</span>
        </h1>
        <p className="text-[#19355d] mt-4">
          Temukan paket wisata terbaik sesuai dengan kebutuhan dan minat Anda
        </p>
      </div>

      {/* Search Section */}
      <div className="flex items-center mb-8 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Cari tour berdasarkan judul, lokasi, atau tag..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none bg-white placeholder-gray-400 text-[#19355d]"
        />
        <button
          onClick={handleSearch}
          className="bg-[#19355d] text-white px-6 py-3 rounded-r-xl flex items-center gap-2"
        >
          <Search size={20} />
          Search
        </button>
      </div>

      {/* Tours Grid */}
      <div className="mt-12">
        {filteredTours.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredTours.map((tour, index) => (
              <CardTour
                key={index}
                image={tour.image}
                tag={tour.tag}
                price={tour.price}
                title={tour.title}
                days={tour.days}
                location={tour.location}
                bookUrl={tour.bookUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700">Tour tidak ditemukan</h3>
            <p className="text-gray-500 mt-2">Coba kata kunci lainnya</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
}