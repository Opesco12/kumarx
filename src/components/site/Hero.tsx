import {
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";
import { FloatingObjects } from "@/components/site/FloatingObjects";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 section-grid opacity-35" />
      <div className="absolute -top-28 -right-24 w-[430px] h-[430px] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-40 -left-20 w-[380px] h-[380px] rounded-full bg-accent/20 blur-3xl" />
      <FloatingObjects />

      <div className="container relative z-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="opacity-0 animate-fade-in-slow">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.03] tracking-tight max-w-3xl">
            Your Reliable Partner for Academic & Digital Solutions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From project writing to design and payment services, we help you
            move from idea to delivered result with clarity, speed, and
            consistent quality.
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
              className="inline-flex items-center gap-2 h-14 px-7 rounded-full bg-card/80 border border-border text-secondary-foreground font-semibold hover:bg-card transition"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="relative opacity-0 animate-fade-in-slow [animation-delay:200ms]">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-0 bg-primary/10 rounded-[2.5rem] rotate-6 shadow-elegant" />
            <div className="relative bg-card rounded-[2.5rem] p-8 shadow-elegant border border-border">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-12 h-12 rounded-full bg-primary grid place-items-center text-primary-foreground font-bold">
                  K
                </div>
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
                  Hi, How can KumarX help you today?
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3 text-sm max-w-[85%] ml-auto">
                  I need help with my final-year project.
                </div>
                <div className="bg-secondary rounded-2xl rounded-tl-sm p-3 text-sm max-w-[85%]">
                  We've got you. Can you share the project details and
                  requirements?
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
          </div>
        </div>
      </div>
    </section>
  );
};
