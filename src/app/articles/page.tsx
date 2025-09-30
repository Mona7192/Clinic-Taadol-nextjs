// src/app/articles/page.tsx
import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "نقش خانواده در فرآیند بهبود بیماران وابسته",
    excerpt: "بررسی علمی چگونگی حفظ ثبات روانی در دوران پس از درمان...",
    date: "1404/03/20",
    image: "/images/article-1.jpg",
  },
  {
    id: 2,
    title: "تأثیر تنفس آگاهانه بر کاهش اضطراب روزمره",
    excerpt: "تمرینات ساده ذهن‌آگاهی می‌تواند به کاهش اضطراب کمک کند...",
    date: "1404/03/20",
    image: "/images/article-2.jpg",
  },
  // ...
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">وبلاگ</h1>
        </div>
      </section>

      {/* لیست مقالات */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 text-right">
              <span className="text-xs text-gray-500">{article.date}</span>
              <h2 className="text-lg font-semibold mb-2 mt-1">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
              <Link
                href={`/articles/${article.id}`}
                className="text-primary text-sm hover:underline"
              >
                ادامه مطلب →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
