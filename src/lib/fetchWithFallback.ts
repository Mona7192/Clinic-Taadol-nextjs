export async function fetchWithFallback(apiUrl: string, localData: any[]) {
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.warn("API Error → Using local fallback");
      return localData;
    }

    const data = await res.json();

    // اگر دیتا خالی بود → fallback استفاده کن
    if (!data || data.length === 0) {
      console.warn("API Returned Empty → Using local fallback");
      return localData;
    }

    return data;
  } catch (error) {
    console.error("Fetch failed → Using local fallback:", error);
    return localData;
  }
}
