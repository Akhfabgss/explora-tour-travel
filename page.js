"use client";

import React, { useState, useEffect } from "react";
import CourseCardList from "../../components/CourseCardList.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  Search,
} from "lucide-react";

export default function AllCourses() {
  // --- STATE ---
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const coursesPerPage = 12;

  // --- FILTER & SEARCH ---
  const handleSearch = () => {
    setSearch(searchInput);
    setCurrentPage(1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleToggle = (current, setter, option) => {
    setter(current === option ? null : option);
  };

  const sortOptions = [
    "Baru Rilis",
    "Terpopuler",
    "Sedang Promo",
    "Harga Terendah",
    "Harga Tertinggi",
  ];

  const levelOptions = ["Beginner Friendly", "Intermediate", "All Levels"];
  const typeOptions = ["Starter (Rp 0)", "Premium"];

  // --- FILTER LOGIC ---
  const filteredCourses = courses.filter((c) =>
    c.nama?.toLowerCase().includes(search.toLowerCase())
  );

  // --- SORT (opsional: tambahkan logika sesuai kebutuhan) ---
  if (selectedSort === "Harga Terendah") {
    filteredCourses.sort((a, b) => a.harga - b.harga);
  } else if (selectedSort === "Harga Tertinggi") {
    filteredCourses.sort((a, b) => b.harga - a.harga);
  }

  // --- PAGINATION ---
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(1, "...", currentPage, "...", totalPages);
    }
    return pages;
  };

  // --- LOADING HANDLER ---
  if (loading)
    return <p className="text-center py-6">Loading courses...</p>;


  return (
    <>
    <Navbar />
    <div className="w-full px-6 md:px-12 py-8">
        <div className="w-full mx-auto text-center items-center md:mb-25 mt-8">
            <h1 className="text-3xl font-bold mb-4"> 
                All <span className="text-[#00359C]">Courses</span>
            </h1>
            <p className="text-black mt-4">
              Mentor expert kami juga telah menyediakan ratusan kelas gratis
              yang bisa kamu pelajari sekarang
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
           <aside className="md:col-span-1 p-4 rounded-xl bg-white">
            {/* Sort */}
            <h2 className="text-lg font-semibold mb-4">Sort</h2>
            <div className="flex flex-col gap-3 mb-6">
                {sortOptions.map((option, i) => (
                <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer select-none"
                >
                    <input
                    type="checkbox"
                    checked={selectedSort === option}
                    onChange={() =>
                        handleToggle(selectedSort, setSelectedSort, option)
                    }
                    className="peer hidden"
                    />
                    <span
                    className="
                        w-5 h-5 flex items-center justify-center
                        border-2 border-gray-400 rounded-md
                        peer-checked:bg-[#00359C] peer-checked:border-[#00359C]
                        transition-colors
                    "
                    >
                    
                    <svg
                        className="w-3 h-3 text-white peer-checked:block hidden"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    </span>
                    <span className="text-gray-700">{option}</span>
                </label>
                ))}
            </div>

            {/* Level */}
            <h2 className="text-lg font-semibold mb-4">Level</h2>
            <div className="flex flex-col gap-3 mb-6">
                {levelOptions.map((option, i) => (
                <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer select-none"
                >
                    <input
                    type="checkbox"
                    checked={selectedLevel === option}
                    onChange={() =>
                        handleToggle(selectedLevel, setSelectedLevel, option)
                    }
                    className="peer hidden"
                    />
                    <span
                    className="
                        w-5 h-5 flex items-center justify-center
                        border-2 border-gray-400 rounded-md
                        peer-checked:bg-[#00359C] peer-checked:border-[#00359C]
                        transition-colors
                    "
                    >
                    <svg
                        className="w-3 h-3 text-white peer-checked:block hidden"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    </span>
                    <span className="text-gray-700">{option}</span>
                </label>
                ))}
            </div>

            {/* Type */}
            <h2 className="text-lg font-semibold mb-4">Type</h2>
            <div className="flex flex-col gap-3">
                {typeOptions.map((option, i) => (
                <label
                    key={i}
                    className="flex items-center gap-2 cursor-pointer select-none"
                >
                    <input
                    type="checkbox"
                    checked={selectedType === option}
                    onChange={() =>
                        handleToggle(selectedType, setSelectedType, option)
                    }
                    className="peer hidden"
                    />
                    <span
                    className="
                        w-5 h-5 flex items-center justify-center
                        border-2 border-gray-400 rounded-md
                        peer-checked:bg-[#00359C] peer-checked:border-[#00359C]
                        transition-colors
                    "
                    >
                    <svg
                        className="w-3 h-3 text-white peer-checked:block hidden"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 13l4 4L19 7" />
                    </svg>
                    </span>
                    <span className="text-gray-700">{option}</span>
                </label>
                ))}
            </div>
            </aside>




            {/* Courses + Pagination */}
            <main className="md:col-span-3">
                <div className="flex items-center mb-6">
                <input
                    type="text"
                    placeholder="Search course"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 border border-gray-300 rounded-l-xl px-4 py-2 focus:outline-none bg-white"
                />
                <button
                    onClick={handleSearch}
                    className="bg-[#00359C] text-white px-4 py-2 rounded-r-xl"
                >
                    <Search size={25} />
                </button>
                </div>

                {/* Course List */}
                <CourseCardList />
                

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                <button
                    onClick={() => goToPage(1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    <ChevronsLeft size={18} />
                </button>
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    <ChevronLeft size={18} />
                </button>

                {getPageNumbers().map((p, idx) =>
                    p === "..." ? (
                    <span key={idx} className="px-3 py-1">…</span>
                    ) : (
                    <button
                        key={idx}
                        onClick={() => goToPage(p)}
                        className={`px-3 py-1 border rounded ${
                        currentPage === p
                            ? "bg-[#00359C] text-white"
                            : "hover:bg-gray-100"
                        }`}
                    >
                        {p}
                    </button>
                    )
                )}

                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    <ChevronRight size={18} />
                </button>
                <button
                    onClick={() => goToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="px-2 py-1 border rounded disabled:opacity-50"
                >
                    <ChevronsRight size={18} />
                </button>
                </div>
            </main>
        </div>
    </div>

    <Footer />
    </>
  );
}
