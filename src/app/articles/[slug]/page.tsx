import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function SingleArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  // ⛔ این خط باعث ارور می‌شود اگر تابع async نباشد — الان مشکلی ندارد
  const slug = params.slug;

  // 📌 دریافت مقاله از API
  const res = await fetch(
    `http://localhost:8000/api/articles/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    notFound();
  }

  const article = await res.json();

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* Hero */}
      <section className="bg-[var(--color-light-p)] border-b border-[var(--color-gray-1)]">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--color-primary)]">
            {article.title}
          </h1>
          <p className="text-sm text-[var(--color-dark-p)]/70">
            {new Date(article.created_at).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        {article.image && (
          <div className="overflow-hidden rounded-2xl shadow-md mb-8">
            <Image
              src={article.image}
              alt={article.title}
              width={900}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <article
          className="prose prose-rtl max-w-none text-[var(--color-dark-p)] leading-8"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 text-right">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-dark-p)] font-medium text-sm transition-colors"
          >
            ← بازگشت
          </Link>
        </div>
      </section>
    </main>
  );
}
