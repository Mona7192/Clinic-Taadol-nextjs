// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">درباره دکتر حسن مختارپور</h1>
        </div>
      </section>

      {/* معرفی دکتر */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12 items-center">
        <div>
          <Image
            src="/images/doctor-portrait.jpg"
            alt="دکتر حسن مختارپور"
            width={500}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
        <div className="text-right">
          <h2 className="text-2xl font-bold mb-4">دکتر حسن مختارپور</h2>
          <p className="text-gray-600 text-sm md:text-base leading-7 mb-6">
            دکترای تخصصی روان‌شناسی بالینی، بنیان‌گذار نظریه تعادل روان در چرخه زیست‌روان‌شناختی.
            بیش از ۵۱ سال تجربه در روان‌درمانی، درمان اعتیاد و آموزش مهارت‌های روانی-شناختی.
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>✓ بنیان‌گذار نظریه تعادل روان</li>
            <li>✓ سخنران بیش از ۵۰ رویداد علمی</li>
            <li>✓ طراح مدل‌های درمانی کاربردی</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-primary text-white px-5 py-3 rounded-md hover:bg-primary/90 transition"
          >
            دریافت مشاوره
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            آماده دریافت مشاوره هستید؟
          </h3>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            تماس با ما
          </Link>
        </div>
      </section>
    </main>
  );
}
