// src/app/articles/page.tsx
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

// تابع fetch — حتماً داخل همین فایل
async function fetchArticles() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  console.log("درخواست به:", `${API_URL}/api/articles`);

  const res = await fetch(`${API_URL}/api/articles`, {
    cache: "no-store", // همیشه تازه
  });

  if (!res.ok) {
    console.error("خطا در API:", res.status);
    return { data: [] };
  }

  const data = await res.json();
  console.log("داده‌های دریافتی:", data);
  return data;
}

// کامپوننت صفحه — حتماً async باشه
export default async function BlogPage() {
  const articlesData = await fetchArticles();
  const articles = articlesData.data || [];

  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* Hero */}
      <section className="bg-[var(--color-gray-1)]">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-p)]">
            وبلاگ
          </h1>
          <p className="text-sm md:text-base text-[var(--color-dark-p)]/70 mt-3">
            جدیدترین مقالات علمی و آموزشی در حوزه روان‌شناسی و تعادل ذهن
          </p>
        </div>
      </section>

      {/* لیست مقالات */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.length > 0 ? (
          articles.map((article: any) => (
            <div
              key={article.id}
              className="bg-white border border-gray-2 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all"
            >
              <Image
                src={article.image || "/placeholder.jpg"}
                alt={article.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-right">
                <span className="inline-flex rounded-2xl text-xs text-dark-p bg-light-p px-2 py-1">
                  <FaRegCalendarAlt className="ml-1" />
                  {article.date}
                </span>
                <h2 className="text-lg font-semibold mt-2 mb-2 text-[var(--color-dark-p)]">
                  {article.title}
                </h2>
                <p className="text-sm text-[var(--color-dark-p)]/70 mb-4">
                  {article.description}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="text-[var(--color-primary)] text-sm font-medium hover:underline"
                >
                  ادامه مطلب
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            مقاله‌ای یافت نشد.
          </p>
        )}
      </section>
    </main>
  );
}