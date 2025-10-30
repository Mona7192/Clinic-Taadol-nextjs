"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MapPin, Facebook, Instagram, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm relative z-50">
      {/* ردیف اول */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 py-2 gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-gray-700">
            <div className="flex items-center gap-1">
              <Phone size={16} className="text-primary" />
              <span>0713 752 264 - 0917 325 54 21</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-primary" />
              <span>شیراز، بلوار دانش، خیابان سلامت</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-primary">
            <Link href="#" aria-label="facebook">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="instagram">
              <Instagram size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* ردیف دوم */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-3 relative">
          {/* لوگو */}
          <Link href="/" className="sm:text-2xl text-xl font-bold text-primary">
            دکتر حسن مختارپور
          </Link>

          {/* منو دسکتاپ */}
          <nav className="hidden md:flex gap-6 text-gray-700">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/about">درباره دکتر</Link>
            <Link href="/services">خدمات</Link>
            <Link href="/articles">آرشیو وبلاگ</Link>
            <Link href="/contact">تماس با ما</Link>
          </nav>

          {/* دکمه‌ها */}
          <div className="flex items-center gap-4">
            {/* دکمه سرچ */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-700 border-2 border-white sm:border-black px-3 py-2 rounded-2xl hover:text-primary hover:border-primary transition"
            >
              <Search size={20} />
            </button>

            {/* تماس با ما */}
            <Link
              href="/contact"
              className="bg-white text-black flex items-center gap-1 px-3 py-2 border-2 border-white sm:border-black rounded-2xl text-base hover:bg-primary/90 hover:border-white hover:text-white transition"
            >
              <Phone size={16} />
              <span className="hidden sm:block">تماس با ما</span>
            </Link>

            {/* منوی موبایل */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 p-2 border-2 border-white sm:border-black rounded-lg"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* باکس جستجو (نمایش بازشو) */}
          {showSearch && (
            <div className="absolute top-full right-4 mt-2 min-w-11/12 sm:w-96 bg-white border border-gray-300 shadow-lg rounded-2xl p-3 flex items-center gap-2 animate-fadeIn">
              <Search size={20} className="text-gray-500" />
              <input
                type="text"
                placeholder="جستجو کنید..."
                className="flex-1 outline-none bg-transparent text-gray-700 text-sm"
                autoFocus
              />
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-primary transition"
              >
                <X size={20} />
              </button>
            </div>
          )}
        </div>

        {/* منوی موبایل */}
        {menuOpen && (
          <nav className="flex flex-col gap-2 mt-3 text-gray-700 md:hidden border-t pt-2 bg-white shadow-md p-3 rounded-lg">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              صفحه اصلی
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              درباره دکتر
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              خدمات
            </Link>
            <Link href="/articles" onClick={() => setMenuOpen(false)}>
              آرشیو وبلاگ
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              تماس با ما
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
