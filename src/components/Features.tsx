import Image from "next/image";
import Link from "next/link";
import { HiMiniCheckBadge } from "react-icons/hi2";

export default function Features() {
  return (
    <section className="container mx-auto">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center px-4 py-12">
        {/* ستون اول: عکس دکتر */}
        <div className="md:col-span-1 rounded-3xl">
          <Image
            src="/images/doctor-portrait.png" // مسیر عکس دکتر را در public/images بگذار
            alt="دکتر حسن مختارپور"
            width={301}
            height={364}
            className="rounded-3xl object-fill w-[352px] h-[364px]"
          />
        </div>

        {/* ستون دوم: نام دکتر + متن کوتاه + دکمه */}
        <div className="md:col-span-1 text-right px-6 py-12 bg-light-p rounded-3xl h-[364px] w-[303px]">
          <h2 className="text-3xl font-bold mb-3 text-dark-p">دکتر حسن مختارپور</h2>
          <p className="text-base text-black mb-5">
            دکتر حسن مختارپور، دارای دکترای تخصصی روان‌شناسی بالینی، بیش از ۱۵ سال سابقه فعالیت حرفه‌ای در حوزه روان‌درمانی، درمان اعتیاد و آموزش مهارت‌های روانی-شناختی دارد. او بنیان‌گذار کلینیک تعادل و نظریه‌پرداز چرخه تعادل روان در نظام درمانی نوین است.
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
          <div className="bg-light-p flex shadow rounded-lg p-5">
            <HiMiniCheckBadge className="text-primary mx-2 text-4xl" />
            <p className="text-base font-normal text-black">
بیش از ۱۵ سال تجربه در زمینه روان‌شناسی بالینی، درمان اعتیاد و ارتقاء سلامت روان فردی و سازمانی           
            </p>
          </div>
          <div className="bg-light-p flex shadow rounded-lg p-5">
            <HiMiniCheckBadge className="text-primary mx-2 text-4xl" />
            <p className="text-base font-normal text-black">
بنیان‌گذار نظریه نوآورانه «تعادل روان در چرخه زیست‌روان‌شناختی» و طراح چندین مدل درمانی کاربردی 
            </p>
          </div>
          <div className="bg-light-p flex shadow rounded-lg p-5">
            <HiMiniCheckBadge className="text-primary mx-2 text-4xl font-bold" />
            <p className="text-base font-normal text-black">
              برگزارکننده و سخنران بیش از ۱۵۰ رویداد علمی، آموزشی و تخصصی در حوزه روان‌درمانی و توسعه فردی در سطح ملی و بین‌المللی
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
