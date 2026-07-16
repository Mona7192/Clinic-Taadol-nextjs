export async function fetchWithFallback<T>(
  apiUrl: string,
  localData: T[]
): Promise<T[]> {
  try {
    const res = await fetch(apiUrl, { cache: "no-store" });

    if (!res.ok) {
      console.warn("API Error → Using local fallback");
      return localData;
    }

    const data = (await res.json()) as T[];

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