import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-right">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">خدمات کلینیک تعادل</h1>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              ما با ارائه خدمات تخصصی و یکپارچه، شما را در مسیر دستیابی به سلامت روان و تعادل در زندگی همراهی می‌کنیم.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {services.map((service, index) => (
              <AccordionItem key={service.id} value={`item-${index}`} className="bg-card rounded-lg mb-4 border px-4">
                <AccordionTrigger className="py-6 text-lg font-headline hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span>{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                  {service.description} ما در این بخش با استفاده از رویکردهای مبتنی بر شواهد و همچنین اصول نظریه تعادل، به شما کمک می‌کنیم تا ریشه‌های مشکلات را شناسایی کرده و مهارت‌های لازم برای مقابله با چالش‌ها را بیاموزید. جلسات به صورت کاملاً محرمانه و در محیطی امن و حمایتگر برگزار می‌شود.
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
