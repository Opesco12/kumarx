import { MessageCircle, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappLink } from "@/lib/whatsapp";

export const CTA = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] gradient-hero p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground max-w-3xl mx-auto leading-tight">
              Need help? KumarX is ready to assist you.
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-xl mx-auto">
              Get a fast response and start your project today.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 h-14 px-8 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-elegant hover:scale-105 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Message KumarX on WhatsApp Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
