// src/app/videos/[slug]/page.tsx
import { notFound } from "next/navigation";

// تابع دریافت ویدیو بر اساس slug
async function fetchVideo(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/videos/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    if (res.status === 404) notFound();
    throw new Error("Failed to fetch video");
  }

  return res.json(); // { title, thumbnail, videoUrl, description }
}

export default async function SingleVideoPage({ params }: { params: { slug: string } }) {
  let video;

  try {
    video = await fetchVideo(params.slug);
  } catch (error) {
    console.error("Error:", error);
    return <p className="text-center py-10">خطا در بارگذاری ویدیو</p>;
  }

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      <section className="bg-[var(--color-light-p)] border-b border-[var(--color-gray-1)]">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-2">
            {video.title}
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <video
          src={video.videoUrl}
          controls
          className="w-full rounded-2xl shadow mb-6"
          poster={video.thumbnail}
          preload="metadata"
        />
        <p className="text-[var(--color-dark-p)]/80 leading-7">{video.description}</p>
      </section>
    </main>
  );
}