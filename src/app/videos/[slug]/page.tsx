import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function fetchSingleVideo(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/videos/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function SingleVideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const video = await fetchSingleVideo(slug);

  if (!video) {
    notFound();
  }

  return (
    <main className="bg-white text-[var(--color-dark-p)]">

      {/* ===== HERO ===== */}
      <section className="bg-[var(--color-gray-1)] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
            {video.title}
          </h1>
          <p className="text-sm text-gray-600 mt-2">
            {new Date(video.created_at).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">

        {/* ===== Thumbnail ===== */}
        <div className="w-full mb-6 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={video.thumbnail ?? "/placeholder-video.jpg"}
            alt={video.title}
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* ===== Video Player ===== */}
        <div className="w-full mb-10">
          <video
            controls
            className="w-full rounded-xl shadow-md border border-gray-200"
          >
            <source src={video.s3_url} type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>

        {/* ===== Description ===== */}
        <p className="text-[var(--color-dark-p)] leading-8 text-lg">
          {video.description}
        </p>

        <div className="mt-12">
          <Link
            href="/videos"
            className="text-[var(--color-primary)] hover:text-[var(--color-dark-p)] transition text-sm font-medium"
          >
            ← بازگشت به گالری ویدیوها
          </Link>
        </div>
      </section>
    </main>
  );
}
