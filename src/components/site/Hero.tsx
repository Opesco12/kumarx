import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="opacity-0 animate-fade-in-slow">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Trusted by 1,000+ students & professionals
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-gradient">KumarX</span> — Your Reliable Partner for Academic & Digital Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            We help students and professionals achieve their goals with expert writing, design, and digital services — fast, affordable, and dependable.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 h-14 px-7 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/70 transition"
            >
              Explore services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-extrabold text-foreground">1k+</div>
              Happy clients
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-extrabold text-foreground">24/7</div>
              Support
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-extrabold text-foreground">98%</div>
              On-time delivery
            </div>
          </div>
        </div>

        {/* visual */}
        <div className="relative opacity-0 animate-fade-in-slow [animation-delay:200ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 gradient-hero rounded-[2.5rem] rotate-6 shadow-elegant" />
            <div className="relative bg-card rounded-[2.5rem] p-8 shadow-elegant border border-border">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full gradient-hero grid place-items-center text-primary-foreground font-bold">K</div>
                <div>
                  <div className="font-semibold">KumarX Support</div>
                  <div className="text-xs text-whatsapp flex items-center gap-1.5">
                    <span className="relative flex w-2 h-2">
                      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
                      <span className="relative w-2 h-2 rounded-full bg-whatsapp" />
                    </span>
                    Online now
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-3">
                <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
                  Hi 👋 How can KumarX help you today?
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 text-sm max-w-[85%] ml-auto">
                  I need help with my final-year project.
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
                  Perfect — we've got you. Let's begin 🚀
                </div>
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 h-12 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold hover:opacity-90 transition"
              >
                <MessageCircle className="w-4 h-4" /> Start chat
              </a>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-elegant border border-border animate-float hidden sm:block">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-whatsapp" /> Avg reply: 2 min
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
