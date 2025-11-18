import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { localVideos } from "@/data/videos"; // ← دیتای لوکال

export default async function SingleVideoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("📡 Fetch Video:", `${process.env.NEXT_PUBLIC_API_URL}/videos/${slug}`);

  // -------------------------------
  // 1) دریافت از API
  // -------------------------------
  let video = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/videos/${slug}`,
      { cache: "no-store" }
    );

    if (res.ok) {
      video = await res.json();
      console.log("✔ از API دریافت شد");
    } else {
      console.log("❌ API جواب نداد → از لوکال استفاده می‌کنیم");
    }
  } catch (error) {
    console.log("❌ خطا در API → از لوکال استفاده می‌کنیم");
  }

  // -------------------------------
  // 2) fallback → دیتای لوکال
  // -------------------------------
  if (!video) {
    video = localVideos.find((v) => v.slug === slug);
  }

  if (!video) {
    notFound();
  }

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* Hero */}
      <section className="bg-[var(--color-light-p)] border-b border-[var(--color-gray-1)]">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--color-primary)]">
            {video.title}
          </h1>
          <p className="text-sm text-[var(--color-dark-p)]/70">
            {video.created_at
              ? new Date(video.created_at).toLocaleDateString("fa-IR")
              : "—"}
          </p>
        </div>
      </section>

      {/* Thumbnail */}
      
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/*
        {video.thumbnail && (
          <div className="overflow-hidden rounded-2xl shadow-md mb-8">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={900}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        */}
        {/* Video Player */}
        <video
          controls
          className="w-full rounded-xl shadow-lg mb-6"
          poster={video.thumbnail || undefined}
        >
          <source src={video.s3_url} type="video/mp4" />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>

        {/* Description */}
        <p className="text-[var(--color-dark-p)] leading-8 mb-10">
          {video.description}
        </p>

        <div className="mt-10 text-right">
          <Link
            href="/videos"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-dark-p)] text-sm transition"
          >
            ← بازگشت به ویدیوها
          </Link>
        </div>
      </section>
    </main>
  );
}
