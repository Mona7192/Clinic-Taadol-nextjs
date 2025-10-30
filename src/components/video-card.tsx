"use client";

import React from "react";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import { videos } from "@/data/videos";

export default function EducationalVideos() {
  const mainVideo = videos[0];
  const sideVideos = videos.slice(1, 4);

  return (
    <div className="bg-gray-1 py-12">
      <section className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-dark-p)] text-center sm:text-right">
            فیلم‌های آموزشی با دکتر مختارپور
          </h2>
          <Link
            href="/videos"
            className="bg-[var(--color-primary)] text-white px-5 py-2 rounded-full hover:bg-[var(--color-dark-p)] transition text-center"
          >
            مشاهده همه
          </Link>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Video */}
          <div className="lg:w-1/2 relative group overflow-hidden rounded-2xl shadow-lg">
            <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-md">
              <img
                src={mainVideo.thumbnail}
                alt={mainVideo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <FaPlayCircle className="text-white rounded-full text-4xl sm:text-5xl" />
              </div>
            </div>
            {/* Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <h3 className="text-lg sm:text-xl font-semibold">{mainVideo.title}</h3>
              <p className="text-sm mt-1 hidden sm:block">{mainVideo.description}</p>
              <Link
                href={`/videos/${mainVideo.slug}`}
                className="mt-3 inline-flex items-center text-white px-4 py-2 rounded-md hover:text-black transition"
              >
                <FaPlayCircle className="text-dark-p text-lg mx-1 mt-[2px]" />
                <span>مشاهده ویدیو</span>
              </Link>
            </div>
          </div>

          {/* Side Videos */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {sideVideos.map((video) => (
              <div
                key={video.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-[var(--color-gray-1)] rounded-3xl p-3 hover:shadow-md transition bg-white"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-1/3 aspect-video overflow-hidden rounded-3xl shadow-md">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <FaPlayCircle className="text-white rounded-full text-3xl sm:text-4xl" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center w-full sm:w-2/3 text-right">
                  <h4 className="font-bold text-[16px] text-primary hover:text-dark-p transition">
                    {video.title}
                  </h4>
                  <p className="text-sm text-[var(--color-dark-p)]/70 mt-1 line-clamp-2">
                    {video.description}
                  </p>
                  <Link
                    href={`/videos/${video.slug}`}
                    className="mt-3 inline-flex items-center text-black px-3 py-1 rounded-md text-sm hover:text-dark-p transition"
                  >
                    <FaPlayCircle className="text-black text-lg mx-1" />
                    <span>مشاهده ویدیو</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
