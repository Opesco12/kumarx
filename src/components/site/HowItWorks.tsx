import { MessageCircle, MessageSquare, CreditCard, PackageCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Reach Out",
    desc: "Start with a quick WhatsApp message and tell us what you need.",
    detail: "Response time: typically under 2 minutes",
  },
  {
    icon: MessageSquare,
    title: "Align Scope",
    desc: "We break down your goal, timeline, and exact deliverables.",
    detail: "Clear plan, transparent expectations",
  },
  {
    icon: CreditCard,
    title: "Confirm & Kickoff",
    desc: "Agree pricing and initiate work with secure payment.",
    detail: "No hidden fees, no vague terms",
  },
  {
    icon: PackageCheck,
    title: "Deliver & Refine",
    desc: "Get polished work on time, with support for final adjustments.",
    detail: "Delivery-ready output, every time",
  },
];

export const HowItWorks = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="how" ref={ref} className="py-20 md:py-28 gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 section-grid opacity-45" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[650px] h-[650px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background text-secondary-foreground text-xs font-semibold mb-4 shadow-soft">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            A smooth process from hello to <span className="text-primary">done.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Built for speed and confidence, with full visibility at every step.</p>
        </div>

        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          <div className="hidden md:block absolute left-1/2 top-2 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2" />

          {steps.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={s.title}
                className={`reveal relative mb-6 md:mb-10 md:w-[calc(50%-2.25rem)] ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`hidden md:block absolute top-10 w-10 h-px bg-border ${isEven ? "-right-10" : "-left-10"}`} />
                <div className={`hidden md:grid absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background ${isEven ? "-right-[3.1rem]" : "-left-[3.1rem]"}`} />

                <div className="relative bg-card rounded-3xl p-6 md:p-7 border border-border shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                    Step {i + 1}
                  </div>
                  <div className="mt-4 w-12 h-12 rounded-2xl gradient-hero text-primary-foreground grid place-items-center shadow-soft">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <p className="mt-4 text-xs font-semibold tracking-wide uppercase text-primary">{s.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-10 max-w-3xl mx-auto rounded-3xl border border-border bg-card/85 p-6 md:p-8 shadow-soft text-center">
          <p className="text-sm md:text-base text-foreground">
            Need a custom timeline? We tailor delivery windows to your deadline and keep you updated from kickoff to handoff.
          </p>
        </div>
      </div>
    </section>
  );
};
