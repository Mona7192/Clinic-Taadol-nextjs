// src/app/contact/page.tsx
import { Phone, MapPin, Mail, Facebook, Instagram } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white text-[var(--color-dark-p)]">
      {/* Hero */}
      <section className="bg-[var(--color-gray-1)]">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark-p)]">
            تماس با ما
          </h1>
        </div>
      </section>

      {/* اطلاعات تماس */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        {[
          {
            icon: <MapPin className="text-[var(--color-primary)] mb-3" size={28} />,
            title: "آدرس",
            text: "شیراز، بلوار دانش، خیابان سلامت، کلینیک تعادل، طبقه ۲، واحد ۴",
          },
          {
            icon: <Phone className="text-[var(--color-primary)] mb-3" size={28} />,
            title: "تلفن",
            text: "0713 752 264 - 0917 325 54 21",
          },
          {
            icon: <Mail className="text-[var(--color-primary)] mb-3" size={28} />,
            title: "ایمیل",
            text: "info@example.com",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg p-6 shadow border border-[var(--color-secondary)] hover:shadow-lg transition-shadow"
          >
            {item.icon}
            <h3 className="font-semibold mb-2 text-[var(--color-dark-p)]">{item.title}</h3>
            <p className="text-sm text-[var(--color-dark-p)]/70 leading-6">{item.text}</p>
          </div>
        ))}
      </section>

      {/* شبکه‌های اجتماعی */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex justify-center gap-6">
          <a
            href="#"
            aria-label="facebook"
            className="text-[var(--color-dark-p)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            <Facebook size={28} />
          </a>
          <a
            href="#"
            aria-label="instagram"
            className="text-[var(--color-dark-p)]/70 hover:text-[var(--color-primary)] transition-colors"
          >
            <Instagram size={28} />
          </a>
        </div>
      </section>

      {/* فرم تماس */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-right text-[var(--color-primary)]">
          فرم تماس با ما
        </h2>
        <form className="grid grid-cols-1 gap-6 text-right">
          {["نام شما", "ایمیل شما"].map((placeholder, i) => (
            <input
              key={i}
              type={i === 1 ? "email" : "text"}
              placeholder={placeholder}
              className="border border-[var(--color-secondary)] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
          ))}
          <textarea
            placeholder="پیام شما"
            rows={5}
            className="border border-[var(--color-secondary)] rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          />
          <button
            type="submit"
            className="bg-[var(--color-primary)] text-white px-6 py-3 rounded-md text-sm hover:bg-[var(--color-dark-p)] transition-colors"
          >
            ارسال پیام
          </button>
        </form>
      </section>
    </main>
  );
}
