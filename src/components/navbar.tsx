"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="Navbar sticky top-0 z-60 w-11/12 md:w-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-between py-3 px-12 mx-auto">
      {/* Logo */}
      <div className="logo">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-14 h-10 md:w-30 md:h-16 p-2"
        />
      </div>

      {/* Hamburger Button (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <i className="ri-menu-line text-2xl"></i>
        </button>
      </div>

      {/* Menu Items */}
      <ul
        className={`menu absolute mt-2 md:mt-0 top-full left-0 w-full bg-white flex-col gap-4 items-center py-4 shadow-md rounded-b-2xl transition-all duration-300 md:static md:flex md:flex-row md:gap-3 xl:gap-10 md:shadow-none md:py-0 md:w-auto ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <Link href="/" className="text-[#19355d] md:text-sm lg:text-md font-medium hover:text-[#28aeb1]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#19355d] md:text-sm lg:text-md font-medium hover:text-[#28aeb1]">
            Services
          </Link>
        </li>
        <li>
          <Link href="/" className="text-[#19355d] md:text-sm lg:text-md font-medium hover:text-[#28aeb1]">
            Popular
          </Link>
        </li>
        <li>
          <Link href="/maintenance" className="text-[#19355d] md:text-sm lg:text-md font-medium hover:text-[#28aeb1]">
            Ticket
          </Link>
        </li>
        <li>
          <Link href="/tour" className="text-[#19355d] md:text-sm lg:text-md font-medium hover:text-[#28aeb1]">
            Tours
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;