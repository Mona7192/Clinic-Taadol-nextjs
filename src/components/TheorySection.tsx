import Image from "next/image";
import Link from "next/link";
import { ClipboardPlus, Activity, CircleCheckBig, UserCheck } from "lucide-react";

export default function TheorySection() {
  return (
    <section className="container mx-auto">
      <div className="px-4 py-12">
        {/* ردیف اول: تیتر + دکمه */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-right text-black">
            نظریه دکتر مختارپور
          </h2>
          <Link
            href="/theory"
            className="bg-primary text-white px-5 py-3 rounded-md text-sm md:text-base hover:bg-primary/90 transition"
          >
            مشاهده کامل نظریه
          </Link>
        </div>

        {/* ردیف دوم: توضیح کوتاه */}
        <p className="text-gray-600 text-sm md:text-base leading-7 mb-10 text-right">
          این نظریه نتیجه سال‌ها پژوهش و تجربه بالینی دکتر مختارپور است و به بررسی نحوه ارتباط بدن، روان و محیط در ایجاد یا درمان اختلالات روانی، به‌ویژه اعتیاد، می‌پردازد.
        </p>

        {/* ردیف سوم: دو ستون */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* ستون اول: تصویر */}
          <div>
            <Image
              src="/images/theory-illustration.png"
              alt="نظریه دکتر مختارپور"
              width={605}
              height={329}
              className="w-full h-auto rounded-3xl object-cover"
            />
          </div>

          {/* ستون دوم: چهار آیکون باکس */}
<div className="flex flex-col gap-6">
  {/* باکس ۱ */}
  <div className="flex rounded-lg p-5 text-right">
    <ClipboardPlus className="text-primary bg-light-p rounded-3xl p-3 mx-3 my-auto" size={56} />
    <div>
      <h3 className="text-sm text-black font-bold mb-2">نگاه یکپارچه به بدن، ذهن و محیط</h3>
    <p className="text-sm text-gray-600">تمرکز بر تعامل سیستم‌های زیستی، روانی و محیطی در سلامت روان</p>
    </div>
    
  </div>
  {/* باکس ۲ */}
  <div className="flex rounded-lg p-5 text-right">
    <Activity className="text-primary bg-light-p rounded-3xl p-3 mx-3 my-auto" size={56} />
    <div>
       <h3 className="text-sm text-black font-bold mb-2">کاربردی در درمان اعتیاد و وابستگی‌ها</h3>
       <p className="text-sm text-gray-600">ارائه مسیر درمانی نوین بر اساس تعادل عملکرد مغز و هیجانات</p>
    </div>
   
  </div>
  {/* باکس ۳ */}
  <div className="flex rounded-lg p-5 text-right">
    <CircleCheckBig className="text-primary bg-light-p rounded-3xl p-3 mx-3 my-auto" size={56} />
    <div>
    <h3 className="text-sm text-black font-bold mb-2">تکیه بر تجربه بالینی و پژوهش‌های میدانی</h3>
    <p className="text-sm text-gray-600">پایه‌گذاری‌شده بر مشاهدات بالینی بیش از یک دهه </p>
    </div>
  </div>
  {/* باکس ۴ */}
  <div className="flex rounded-lg p-5 text-right">
    <UserCheck className="text-primary bg-light-p rounded-3xl p-3 mx-3 my-auto" size={56} />
    <div>
    <h3 className="text-sm text-black font-bold mb-2">قابل استفاده برای درمانگران و متخصصان سلامت روان</h3>
    <p className="text-sm text-gray-600">مدلی علمی و کاربردی برای جلسات روان‌درمانی و مشاوره</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
