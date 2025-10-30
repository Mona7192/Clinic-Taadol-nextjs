// src/services/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

// دریافت لیست مقالات
// api.ts - درست
export const getArticles = async () => {
  const res = await fetch('http://localhost:8000/api/articles'); // پورت + مسیر API
  if (!res.ok) {
    const text = await res.text();
    console.error('Server response:', text); // برای دیباگ
    throw new Error('خطا در دریافت مقالات');
  }
  return res.json();
};

// دریافت مقاله تکی بر اساس slug
export async function getArticleBySlug(slug: string) {
  const res = await fetch(`${API_URL}/articles/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("❌ خطا در دریافت مقاله:", res.status, text);
    throw new Error("مقاله پیدا نشد");
  }

  return res.json();
}
