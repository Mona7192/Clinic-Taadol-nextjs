// src/app/contact/page.tsx
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">تماس با ما</h1>
        </div>
      </section>

      {/* اطلاعات تماس */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <MapPin className="text-primary mb-3" size={24} />
          <h3 className="font-semibold mb-2">آدرس</h3>
          <p className="text-sm text-gray-600">
            شیراز، بلوار دانش، خیابان سلامت، کلینیک تعادل، طبقه ۲، واحد ۴
          </p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <Phone className="text-primary mb-3" size={24} />
          <h3 className="font-semibold mb-2">تلفن</h3>
          <p className="text-sm text-gray-600">0713 752 264 - 0917 325 54 21</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow">
          <Mail className="text-primary mb-3" size={24} />
          <h3 className="font-semibold mb-2">ایمیل</h3>
          <p className="text-sm text-gray-600">info@example.com</p>
        </div>
      </section>

      {/* شبکه‌های اجتماعی */}
      <section className="max-w-7xl mx-auto px-4 pb-6">
        <div className="flex justify-center gap-4">
          <a href="#" aria-label="facebook" className="text-gray-600 hover:text-primary">
            <Facebook size={24} />
          </a>
          <a href="#" aria-label="instagram" className="text-gray-600 hover:text-primary">
            <Instagram size={24} />
          </a>
        </div>
      </section>

      {/* فرم تماس */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 text-right">فرم تماس با ما</h2>
        <form className="grid grid-cols-1 gap-6 text-right">
          <input
            type="text"
            placeholder="نام شما"
            className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="ایمیل شما"
            className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <textarea
            placeholder="پیام شما"
            rows={5}
            className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md text-sm hover:bg-primary/90 transition"
          >
            ارسال پیام
          </button>
        </form>
      </section>
    </main>
  );
}
