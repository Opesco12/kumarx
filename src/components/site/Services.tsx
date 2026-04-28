import {
  GraduationCap, FileText, Presentation, BarChart3, Palette,
  UserPlus, Compass, CreditCard, ArrowUpRight,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  { icon: GraduationCap, title: "Project Writing", category: "Academic", desc: "ND, HND, BSc, MSc & PhD projects — researched, structured and well-written.", featured: true },
  { icon: FileText, title: "CV / Resume Writing", category: "Career", desc: "Stand-out, ATS-friendly resumes that get you noticed and hired." },
  { icon: Presentation, title: "Seminar Writing", category: "Academic", desc: "Polished seminar papers and presentations ready for defense." },
  { icon: BarChart3, title: "Data Analysis", category: "Research", desc: "SPSS, Excel and statistical analysis with clear interpretation.", featured: true },
  { icon: Palette, title: "Graphic Design", category: "Creative", desc: "Logos, flyers, social media creatives and brand identity." },
  { icon: UserPlus, title: "NERD Onboarding", category: "Onboarding", desc: "Complete NERD registration and onboarding assistance." },
  { icon: Compass, title: "NYSC Consultation", category: "Consulting", desc: "Guidance through NYSC registration, deployment and relocation." },
  { icon: CreditCard, title: "Payment Services", category: "Bills", desc: "School fees, JAMB, WAEC, NECO and other secure bill payments.", featured: true },
];

export const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  const categories = Array.from(new Set(services.map((s) => s.category)));

  return (
    <section id="services" ref={ref} className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 section-grid opacity-40" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Everything you need, <span className="text-gradient">in one place</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From academic excellence to digital solutions — KumarX delivers quality you can trust.
          </p>
        </div>

        <div className="mt-8 reveal relative">
          <div className="rounded-3xl border border-border bg-card/90 p-4 md:p-5 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-3">Most requested this week</p>
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <span key={cat} className="inline-flex items-center px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={whatsappLink(`Hello KumarX, I'm interested in your ${s.title} service.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative bg-card/95 border border-border rounded-3xl p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="absolute right-0 top-0 w-20 h-20 bg-primary/8 rounded-full blur-2xl group-hover:bg-primary/15 transition-colors" />
                {s.featured && (
                  <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide bg-primary/15 text-primary">
                    Popular
                  </span>
                )}
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-semibold">
                  {s.category}
                </span>
                <div className="mt-4 w-12 h-12 rounded-2xl gradient-hero grid place-items-center text-primary-foreground shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform relative">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">Tap to request service</p>
                <div className="mt-4 h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full gradient-accent rounded-full" style={{ width: `${60 + (i % 4) * 10}%` }} />
                </div>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
