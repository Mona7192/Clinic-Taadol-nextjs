// src/components/LatestArticles.tsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { articles } from "@/data/articles";

const LatestArticles: React.FC = () => {
  // فقط ۴ مقاله اول برای نمایش
  const displayedArticles = articles.slice(0, 5);
  const mainArticle = displayedArticles[0];
  const sideArticles = displayedArticles.slice(1);

  return (
    <section className="container mx-auto px-4 py-12 bg-white text-[var(--color-dark-p)]">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-bold">
          جدیدترین مقاله‌ها
        </h2>
        <Link
          href="/articles"
          className="flex items-center gap-2 text-sm bg-[var(--color-primary)] text-white px-5 py-2 rounded-full hover:bg-[var(--color-dark-p)] transition-all"
        >
          مشاهده همه
          <span className="text-lg font-bold">←</span>
        </Link>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* سمت راست: مقاله اصلی */}
        {mainArticle && (
          <Link
            href={`/articles/${mainArticle.slug}`}
            className="group p-4 border border-gray-2 rounded-3xl overflow-hidden bg-white hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div className="relative">
              <Image
                src={mainArticle.image}
                alt={mainArticle.title}
                width={596}
                height={391}
                className="w-full h-full rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5 text-right">
              <h3 className="font-semibold text-base md:text-lg mb-2 text-[var(--color-primary)]">
                {mainArticle.title}
              </h3>
              <p className="text-sm text-[var(--color-dark-p)]/80 mb-3">
                {mainArticle.description}
              </p>
              <div className="absolute flex items-center justify-start text-xs text-dark-p bg-light-p px-2 py-1 rounded-full">
                <FaRegCalendarAlt className="ml-1" /> {mainArticle.date}
              </div>
            </div>
          </Link>
        )}
        {/* سمت چپ: سه مقاله کوچک */}
        <div className="lg:col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group border border-gray-2 p-4 rounded-3xl overflow-hidden bg-white hover:shadow-lg transition-all"
            >
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={270}
                  height={140}
                  className="w-full h-36 rounded-3xl object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 flex items-center bg-light-p text-dark-p text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  <FaRegCalendarAlt className="ml-1" size={12} /> {article.date}
                </div>
              </div>

              <div className="p-4 text-right">
                <h3 className="font-normal text-sm md:text-base mb-2 group-hover:text-[var(--color-primary)] transition">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestArticles;
