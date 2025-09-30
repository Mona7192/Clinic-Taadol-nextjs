import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4 py-12">
        {/* ستون اول: عکس دکتر */}
        <div className="md:col-span-1">
          <Image
            src="/images/doctor-portrait.png" // مسیر عکس دکتر را در public/images بگذار
            alt="دکتر حسن مختارپور"
            width={300}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* ستون دوم: نام دکتر + متن کوتاه + دکمه */}
        <div className="md:col-span-1 text-right">
          <h2 className="text-xl font-bold mb-3">دکتر حسن مختارپور</h2>
          <p className="text-sm text-gray-600 mb-5">
            دکترای تخصصی روان‌شناسی بالینی، بنیان‌گذار نظریه تعادل روان در چرخه زیست‌روان‌شناختی.
          </p>
          <Link
            href="/about"
            className="inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition"
          >
            بیشتر بخوانید
          </Link>
        </div>

        {/* ستون سوم: ویژگی‌ها - نصف عرض (۲ ستون) */}
        <div className="md:col-span-2 grid grid-cols-1 gap-6">
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">بیش از ۵۱ سال تجربه</h3>
            <p className="text-sm text-gray-600">
              تجربه در حوزه روان‌شناسی بالینی، درمان اعتیاد و ارتقاء سلامت روان فردی و سازمانی.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">نظریه تعادل روان</h3>
            <p className="text-sm text-gray-600">
              بنیان‌گذار نظریه نوآورانه تعادل روان در چرخه زیست‌روان‌شناختی و طراح مدل‌های درمانی کاربردی.
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-2">سخنران و برگزارکننده رویداد</h3>
            <p className="text-sm text-gray-600">
              برگزارکننده و سخنران بیش از ۵۰ رویداد علمی و تخصصی در حوزه روان‌درمانی و توسعه فردی.
            </p>
          </div>
        </div>

        
      </div>
    </section>
  );
}
