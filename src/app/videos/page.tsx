import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* Hero */}
      <section className="bg-[var(--color-gray-1)]">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-p)]">
            گالری ویدیوها
          </h1>
          <p className="text-sm md:text-base text-[var(--color-dark-p)]/70 mt-3">
            مفاهیم روان‌شناسی را با بیانی ساده و کاربردی در قالب ویدیوهای آموزشی بیاموزید.
          </p>
        </div>
      </section>

      {/* لیست ویدیوها */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white border border-gray-2 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all group"
          >
            <div className="relative">
              <Image
                src={video.thumbnail}
                alt={video.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPlay className="text-white text-4xl" />
              </div>
            </div>

            <div className="p-5 text-right">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-dark-p)] group-hover:text-[var(--color-primary)] transition">
                {video.title}
              </h3>
              <p className="text-sm text-[var(--color-dark-p)]/70 mb-4 leading-6">
                {video.description}
              </p>
              <Link
                href={`/videos/${video.slug}`}
                className="inline-block text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-dark-p)] transition"
              >
                مشاهده ویدیو →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
