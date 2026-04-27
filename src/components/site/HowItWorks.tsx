import { MessageCircle, MessageSquare, CreditCard, PackageCheck } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { icon: MessageCircle, title: "Reach Out", desc: "Contact KumarX via WhatsApp — we reply fast." },
  { icon: MessageSquare, title: "Discuss Needs", desc: "Tell us your goals; we agree on scope and timeline." },
  { icon: CreditCard, title: "Make Payment", desc: "Secure, transparent pricing — no hidden charges." },
  { icon: PackageCheck, title: "Fast Delivery", desc: "Receive your work on time, polished and ready." },
];

export const HowItWorks = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="how" ref={ref} className="py-20 md:py-28 gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background text-secondary-foreground text-xs font-semibold mb-4 shadow-soft">
            How it works
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Simple. Fast. <span className="text-gradient">Reliable.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">Four simple steps from request to delivery.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal relative bg-card rounded-3xl p-7 border border-border shadow-soft hover:shadow-elegant transition-all duration-300"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-4 left-7 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-xs font-bold">
                  Step {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-secondary text-primary grid place-items-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
