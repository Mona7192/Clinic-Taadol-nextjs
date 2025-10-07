import { notFound } from "next/navigation";
import { videos } from "@/data/videos";

export default function SingleVideoPage({ params }: { params: { slug: string } }) {
  const video = videos.find((v) => v.slug === params.slug);
  if (!video) notFound();

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
        />
        <p className="text-[var(--color-dark-p)]/80 leading-7">{video.description}</p>
      </section>
    </main>
  );
}
