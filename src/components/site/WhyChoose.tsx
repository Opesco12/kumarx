import { Zap, Wallet, Award, Headphones } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { icon: Zap, title: "Fast Delivery", desc: "We respect deadlines. Most projects delivered ahead of schedule." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Quality service at student-friendly prices — no hidden fees." },
  { icon: Award, title: "Professional Quality", desc: "Experienced experts deliver work that meets the highest standards." },
  { icon: Headphones, title: "Reliable Support", desc: "We're available whenever you need us — clear and responsive." },
];

export const WhyChoose = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" ref={ref} className="py-20 md:py-28 gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-background text-secondary-foreground text-xs font-semibold mb-4 shadow-soft">
            Why KumarX
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Built on <span className="text-gradient">trust & results</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="reveal text-center bg-card border border-border rounded-3xl p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl gradient-hero grid place-items-center text-primary-foreground shadow-glow mb-5">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
