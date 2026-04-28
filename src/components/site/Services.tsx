import {
  GraduationCap,
  FileText,
  Presentation,
  BarChart3,
  Palette,
  UserPlus,
  Compass,
  CreditCard,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  {
    icon: GraduationCap,
    title: "Project Writing",
    category: "Academic",
    desc: "ND, HND, BSc, MSc & PhD projects, structured and well-written.",
    featured: true,
  },
  {
    icon: FileText,
    title: "CV / Resume Writing",
    category: "Career",
    desc: "Stand-out, ATS-friendly resumes that get you noticed and hired.",
  },
  {
    icon: Presentation,
    title: "Seminar Writing",
    category: "Academic",
    desc: "Polished seminar papers and presentations ready for defense.",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    category: "Research",
    desc: "SPSS, Excel and statistical analysis with clear interpretation.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    category: "Creative",
    desc: "Logos, flyers, social media creatives and brand identity.",
    featured: true,
  },
  {
    icon: UserPlus,
    title: "NERD Onboarding",
    category: "Onboarding",
    desc: "Complete NERD registration and onboarding assistance.",
  },
  {
    icon: Compass,
    title: "NYSC Consultation",
    category: "Consulting",
    desc: "Guidance through NYSC registration, deployment and relocation.",
  },
  {
    icon: CreditCard,
    title: "Payment Services",
    category: "Bills",
    desc: "School fees, JAMB, WAEC, NECO and other secure bill payments.",
    featured: true,
  },
];

export const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  const featuredServices = services.filter((s) => s.featured);
  const otherServices = services.filter((s) => !s.featured);

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="absolute inset-0 section-grid opacity-40" />
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal relative">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Everything you need,{" "}
            <span className="text-primary">in one place</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From academic excellence to digital solutions — KumarX delivers
            quality you can trust.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5 relative">
          {featuredServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={whatsappLink(
                  `Hello KumarX, I'm interested in your ${s.title} service.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[11px] font-semibold">
                  {s.category}
                </span>
                <div className="mt-4 w-12 h-12 rounded-xl bg-primary/12 text-primary grid place-items-center transition-transform group-hover:scale-105">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                  Request service
                </p>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 reveal rounded-2xl border border-border bg-card p-6 md:p-7 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            Also available
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {otherServices.map((s) => (
              <a
                key={s.title}
                href={whatsappLink(
                  `Hello KumarX, I'm interested in your ${s.title} service.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border/70 bg-background px-4 py-3 hover:border-primary/40 hover:bg-secondary/40 transition"
              >
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm">{s.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {s.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
