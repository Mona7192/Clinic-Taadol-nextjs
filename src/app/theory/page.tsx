import { TheoryExplainer } from "@/components/TheorySection";

export default function TheoryPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-right">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">نظریه تعادل زیستی-روانی</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              درک عمیق‌تری از رویکرد منحصر به فرد کلینیک تعادل به سلامت روان.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-right mx-auto text-foreground leading-loose mb-16">
            <p>
              نظریه "تعادل در چرخه زیستی-روانی" که توسط دکتر حسن مختارپور توسعه یافته است، یک رویکرد یکپارچه و کل‌نگر به روان انسان است. این نظریه بر این اصل استوار است که سلامت و بهزیستی انسان حاصل تعادل پویا بین چهار بعد اصلی وجودی اوست: <strong>جسمی، روانی، اجتماعی و معنوی</strong>.
            </p>
            <p>
              برخلاف بسیاری از رویکردهای سنتی که ممکن است بر یک جنبه از مشکلات تمرکز کنند، این نظریه معتقد است که هر مشکلی در روان انسان، ریشه در عدم تعادل در یک یا چند مورد از این ابعاد دارد و درمان واقعی تنها با بازگرداندن این تعادل امکان‌پذیر است.
            </p>
            <ul>
              <li><strong>بعد جسمی:</strong> شامل سلامت بدن، تغذیه، ورزش و خواب.</li>
              <li><strong>بعد روانی:</strong> شامل افکار، احساسات، باورها و سلامت هیجانی.</li>
              <li><strong>بعد اجتماعی:</strong> شامل کیفیت روابط، حمایت اجتماعی و احساس تعلق.</li>
              <li><strong>بعد معنوی:</strong> شامل معنا، هدف در زندگی و ارتباط با چیزی فراتر از خود.</li>
            </ul>
            <p>
              در کلینیک تعادل، ما از این چارچوب برای ارزیابی کامل مراجعین و طراحی برنامه‌های درمانی شخصی‌سازی شده استفاده می‌کنیم که تمام ابعاد وجودی آن‌ها را در بر می‌گیرد.
            </p>
          </div>

          <TheoryExplainer />

        </div>
      </div>
    </div>
  );
}
