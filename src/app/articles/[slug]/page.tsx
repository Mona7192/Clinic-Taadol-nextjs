// src/app/articles/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// تابع fetch مقاله تک
async function fetchArticle(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch article');
  }

  return response.json(); // فرض کنیم {title, image, date, content, ...} برمی‌گردونه
}

export default async function SingleArticlePage({ params }: { params: { slug: string } }) {
  let article;
  try {
    article = await fetchArticle(params.slug);
  } catch (error) {
    console.error('Error fetching article:', error);
    return <p>خطا در بارگذاری مقاله</p>; // یا redirect/notFound
  }

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* بخش Hero */}
      <section className="bg-[var(--color-light-p)] border-b border-[var(--color-gray-1)]">
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-3 text-[var(--color-primary)]">
            {article.title}
          </h1>
          <p className="text-sm text-[var(--color-dark-p)]/70">{article.date}</p>
        </div>
      </section>

      {/* تصویر مقاله */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="overflow-hidden rounded-2xl shadow-md mb-8">
          <Image
            src={article.image}
            alt={article.title}
            width={900}
            height={450}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* محتوای مقاله */}
        <article
          className="prose prose-rtl max-w-none text-[var(--color-dark-p)] leading-8 prose-headings:text-[var(--color-primary)] prose-p:my-5 prose-p:text-[var(--color-dark-p)] prose-strong:text-[var(--color-primary)]"
          dangerouslySetInnerHTML={{
            __html:
              article.content ||
              "<p>متن این مقاله به زودی در دسترس قرار خواهد گرفت...</p>",
          }}
        />

        {/* دکمه بازگشت */}
        <div className="mt-12 text-right">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-dark-p)] font-medium text-sm transition-colors"
          >
            ← بازگشت به لیست مقالات
          </Link>
        </div>
      </section>
    </main>
  );
}