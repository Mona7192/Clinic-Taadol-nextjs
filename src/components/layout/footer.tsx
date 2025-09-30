import Link from "next/link";
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-light-p text-gray-700 pb-5">
      {/* بخش اول */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-10">
        {/* ستون اول: لوگو و توضیح کوتاه */}
        <div>
          <h2 className="text-primary text-xl font-bold mb-3">دکتر حسن مختارپور</h2>
          <p className="text-sm leading-6">
            کلینیک تعادل به مدیریت دکتر حسن مختارپور، با رویکردی علمی و انسانی در حوزه روان‌شناسی بالینی، اعتیاد و توسعه فردی فعالیت می‌کند.
          </p>
        </div>

        {/* ستون دوم: لینک‌های مفید */}
        <div>
          <h3 className="text-lg font-semibold mb-3">لینک‌های مفید</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-primary">درباره دکتر</Link></li>
            <li><Link href="/services" className="hover:text-primary">خدمات</Link></li>
            <li><Link href="/theory" className="hover:text-primary">نظریه تعادل روان</Link></li>
            <li><Link href="/articles" className="hover:text-primary">وبلاگ</Link></li>
            <li><Link href="/contact" className="hover:text-primary">تماس با ما</Link></li>
          </ul>
        </div>

        {/* ستون سوم: آدرس و شماره تماس */}
        <div>
          <h3 className="text-lg font-semibold mb-3">تماس با ما</h3>
          <div className="flex items-start gap-2 mb-2">
            <MapPin size={30} className="flex-shrink-0 mt-1 text-primary bg-white p-1.5 rounded-2xl hover:text-primary" />
            <p className="text-sm leading-6">
              شیراز، بلوار دانش، خیابان سلامت، کلینیک تعادل، طبقه ۲، واحد ۴
            </p>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <Phone size={30} className="flex-shrink-0 text-primary bg-white p-1.5 rounded-2xl hover:text-primary" />
            <p className="text-sm">0713 752 264 - 0917 325 54 21</p>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={30} className="flex-shrink-0 text-primary bg-white p-1.5 rounded-2xl hover:text-primary" />
            <p className="text-sm">info@example.com</p>
          </div>
        </div>
      </div>

      {/* بخش دوم */}
      <div className="bg-white rounded-3xl max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-6">
        {/* ستون اول: شبکه‌های اجتماعی */}
        <div className="items-center gap-3">
          <p className="text-sm font-bold pb-2">فضای مجازی</p>
          <span className="text-sm font-normal">ما را در فضای مجازی دنبال کنید:</span>
          <div className="flex gap-3 pt-3">
            <Link href="#" aria-label="facebook" className="text-primary bg-light-p p-1.5 rounded-2xl hover:text-primary">
            <Facebook size={18} />
          </Link>
          <Link href="#" aria-label="instagram" className="text-primary bg-light-p p-1.5 rounded-2xl hover:text-primary">
            <Instagram size={18} />
          </Link>
          <Link href="#" aria-label="linkedin" className="text-primary bg-light-p p-1.5 rounded-2xl hover:text-primary">
            <Linkedin size={18} />
          </Link>
          </div>
          
        </div>

        {/* ستون دوم: عضویت در خبرنامه */}
        <div className="items-center gap-2">
          <p className="text-sm font-bold pb-2">عضویت در خبرنامه اورولوژی</p>
          <p className="text-[12px] font-normal">جدیدترین مقالات، نکات سلامت و اطلاعیه‌های مطب را در inbox خود دریافت کنید.</p>
          <input
            type="email"
            placeholder="ایمیل شما..."
            className="w-[80%] border border-primary rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-dark-p m-2"
          />
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition">
            عضویت
          </button>
        </div>
      </div>
    </footer>
  );
}
