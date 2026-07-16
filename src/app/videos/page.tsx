import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
 
interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  slug: string;
}

async function fetchVideos(): Promise<Video[] | null> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  console.log("درخواست به:", `${API_URL}/api/videos`);


  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API Failed");

    const json = await res.json();

    return json.data as Video[]; // ⬅ فقط آرایه واقعی ویدیوها
  } catch (error) {
    console.error("❌ خطا در دریافت ویدیوها:", error);
    return null;
  }
}

export default async function VideosPage() {
  const videos = await fetchVideos();

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      <section className="bg-[var(--color-gray-1)]">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">گالری ویدیوها</h1>
          <p className="text-sm md:text-base text-[var(--color-dark-p)]/70 mt-3">
            ویدیوهای آموزشی روان‌شناسی با بیانی ساده و کاربردی.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos && videos.length > 0 ? (
          videos.map((video: Video ) => (
            <div
              key={video.id}
              className="bg-white border border-gray-2 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all group"
            >
              <div className="relative">
                <Image
                  src={video.thumbnail ?? "/images/default-video.jpg"}
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
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--color-primary)] transition">
                  {video.title}
                </h3>
                <p className="text-sm text-[var(--color-dark-p)]/70 mb-4 leading-6">
                  {video.description}
                </p>
                <Link
                  href={`/videos/${video.slug}`}
                  className="inline-block text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-dark-p)] transition"
                >
                  مشاهده ویدیو
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            ویدیویی یافت نشد.
          </p>
        )}
      </section>
    </main>
  );
}
