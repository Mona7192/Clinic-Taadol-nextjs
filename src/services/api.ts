
// src/services/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArticles() {
  console.log("API IS:", API_URL); // برای تست

  const res = await fetch(`${API_URL}/articles`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("❌ خطا در دریافت مقالات:", res.status, errorText);
    throw new Error("خطا در دریافت مقالات");
  }

  return res.json();
}


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
