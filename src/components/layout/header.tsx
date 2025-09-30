"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, MapPin, Facebook, Instagram, Search } from "lucide-react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="w-full shadow-sm">
      
      {/* ردیف اول */}
      <div className="bg-gray-100 text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-gray-700">
              <Phone size={16} className="text-primary bg-secondary rounded-2xl"/>
              <span>0713 752 264 - 0917 325 54 21</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <MapPin size={16} />
              <span>شیراز، بلوار دانش، خیابان سلامت</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-primary">
            <Link href="#" aria-label="facebook"><Facebook size={18} /></Link>
            <Link href="#" aria-label="instagram"><Instagram size={18} /></Link>
            {/* اینجا می‌تونی هر شبکه اجتماعی دیگه هم اضافه کنی */}
          </div>
        </div>
      </div>

      {/* ردیف دوم */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* لوگو */}
          <Link href="/" className="text-xl font-bold text-primary">
            دکتر حسن مختارپور
          </Link>

          {/* منو */}
          <nav className="hidden md:flex gap-6 text-gray-700">
            <Link href="/">صفحه اصلی</Link>
            <Link href="/about">درباره دکتر</Link>
            <Link href="/services">خدمات</Link>
            <Link href="/articles">آرشیو وبلاگ</Link>
            <Link href="/contact">تماس با ما</Link>
            
          </nav>

          {/* دکمه‌ها */}
          <div className="flex items-center gap-4">
            {/* سرچ */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="text-gray-700 border-2 border-black px-3 py-2 rounded-2xl hover:text-primary"
              >
                <Search size={20} />
              </button>
              {showSearch && (
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="absolute top-full mt-1 right-0 border border-gray-300 rounded-md px-2 py-1 text-sm w-40"
                />
              )}
            </div>

            {/* تماس با ما */}
            <Link
              href="/contact"
              className="bg-white text-black flex items-center gap-1 px-3 py-2 border-2 border-black rounded-2xl text-sm hover:bg-primary/90 transition"
            >
              <Phone size={16} />
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
