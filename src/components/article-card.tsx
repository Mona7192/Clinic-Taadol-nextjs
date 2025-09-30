// components/LatestArticles.tsx
import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

type Article = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string; // برای لینک به صفحه تکی
};

type Props = {
  mainArticle: Article;
  sideArticles: Article[];
};

const LatestArticles: React.FC<Props> = ({ mainArticle, sideArticles }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold">جدیدترین مقالات</h2>
        <Link
          href="/blog"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          مشاهده همه
        </Link>
      </div>

      {/* Articles Row */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* مقاله بزرگ */}
        <Link
          href={`/blog/${mainArticle.slug}`}
          className="lg:w-1/2 group relative overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={mainArticle.image}
            alt={mainArticle.title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg sm:text-xl font-semibold">{mainArticle.title}</h3>
            <p className="text-sm mt-1">{mainArticle.description}</p>
            <div className="flex items-center mt-2 text-sm text-gray-200">
              <FaRegCalendarAlt className="mr-1" /> {mainArticle.date}
            </div>
          </div>
        </Link>

        {/* مقالات کناری با افکت Hover */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sideArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group relative overflow-hidden rounded-lg shadow-md flex flex-col"
            >
              {/* تصویر با افکت تاریکی روی Hover */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all rounded-lg"></div>

              {/* متن */}
              <div className="p-4 flex flex-col flex-1 justify-between relative z-10">
                <div>
                  <h4 className="font-semibold text-md text-gray-900 group-hover:text-white transition">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-200 transition">
                    {article.description}
                  </p>
                </div>
                <div className="flex items-center mt-2 text-gray-500 text-sm group-hover:text-gray-200 transition">
                  <FaRegCalendarAlt className="mr-1" /> {article.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
