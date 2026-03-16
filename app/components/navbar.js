"use client"; // Krävs för att använda onClick och state
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* LOGO */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold tracking-wider text-orange-500">
              DRINKS TO GO
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Hem</Link>
              <Link href="/menu" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Meny</Link>
              <Link href="/om-oss" className="hover:bg-slate-700 px-3 py-2 rounded-md transition">Om oss</Link>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <span className="sr-only">Öppna meny</span>
              {/* Hamburger-ikon */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (Visas bara när isOpen är true) */}
      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block hover:bg-slate-700 px-3 py-2 rounded-md">Hem</Link>
            <Link href="/meny" className="block hover:bg-slate-700 px-3 py-2 rounded-md">Meny</Link>
            <Link href="/om-oss" className="block hover:bg-slate-700 px-3 py-2 rounded-md">Om oss</Link>
          </div>
        </div>
      )}
    </nav>
  );
};