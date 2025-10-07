import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { HiMiniCheckBadge } from "react-icons/hi2";

export default function Hero() {
  return (
    <section className="bg-white container mx-auto">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 py-12">
        {/* ستون راست: متن */}
        <div className="text-right md:order-1 order-2">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-black">
            به سوی<span className="text-primary"> تعادل روان</span>، رهایی از <span className="text-primary">اعتیاد و اضطراب</span> 
          </h1>
          <div className="flex">
            <HiMiniCheckBadge className="text-black mx-2 text-4xl" />
             <h2 className="text-2xl font-bold text-black mb-3">همراه با دکتر حسن مختارپور</h2>

          </div>
          <p className="text-gray-600 text-sm md:text-base leading-7 mb-6">
            دکترای تخصصی روان‌شناسی بالینی، بنیان‌گذار نظریه تعادل روان در چرخه زیست‌روان‌شناختی
          </p>

          <div className="flex flex-wrap gap-3 justify-start">
            <Link
              href="/contact"
              className="flex bg-primary text-white px-5 py-3 rounded-md text-sm md:text-base hover:bg-primary/90 transition"
            >
              <CalendarDays size={18} className="mx-2 mt-1" />
              <span>دریافت مشاوره</span>
            </Link>
            <Link
              href="/theory"
              className="border border-primary text-primary px-5 py-3 rounded-md text-sm md:text-base hover:bg-primary hover:text-white transition"
            >
              مشاهده نظریه
            </Link>
          </div>
        </div>

        {/* ستون چپ: تصویر */}
        <div className="md:order-2 order-1">
          <Image
            src="/images/hero-doctor.png" // مسیر تصویر را در public بگذار: public/images/hero-doctor.png
            alt="دکتر حسن مختارپور"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
