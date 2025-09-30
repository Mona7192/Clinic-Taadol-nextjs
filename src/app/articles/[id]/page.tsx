// src/app/articles/[id]/page.tsx
import Image from "next/image";
import Link from "next/link";

// اینجا به صورت نمونه از داده ساختگی استفاده شده
export default function SingleArticlePage({ params }: { params: { id: string } }) {
  const article = {
    id: params.id,
    title: "نقش خانواده در فرآیند بهبود بیماران وابسته",
    date: "1404/03/20",
    image: "/images/article-1.jpg",
    content: `
      <p>این مقاله به بررسی نقش خانواده در فرآیند بهبود بیماران وابسته می‌پردازد...</p>
      <p>متن کامل مقاله را اینجا قرار دهید...</p>
    `,
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">{article.title}</h1>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
      </section>

      {/* محتوای مقاله */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg mb-8 object-cover"
        />
        <div
          className="prose prose-sm md:prose-base prose-rtl text-gray-700"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <div className="mt-8 text-right">
          <Link
            href="/articles"
            className="text-primary hover:underline text-sm"
          >
            ← بازگشت به وبلاگ
          </Link>
        </div>
      </section>
    </main>
  );
}
