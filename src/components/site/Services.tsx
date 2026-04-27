import {
  GraduationCap, FileText, Presentation, BarChart3, Palette,
  UserPlus, Compass, CreditCard, ArrowUpRight,
} from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappLink } from "@/lib/whatsapp";

const services = [
  { icon: GraduationCap, title: "Project Writing", desc: "ND, HND, BSc, MSc & PhD projects — researched, structured and well-written." },
  { icon: FileText, title: "CV / Resume Writing", desc: "Stand-out, ATS-friendly resumes that get you noticed and hired." },
  { icon: Presentation, title: "Seminar Writing", desc: "Polished seminar papers and presentations ready for defense." },
  { icon: BarChart3, title: "Data Analysis", desc: "SPSS, Excel and statistical analysis with clear interpretation." },
  { icon: Palette, title: "Graphic Design", desc: "Logos, flyers, social media creatives and brand identity." },
  { icon: UserPlus, title: "NERD Onboarding", desc: "Complete NERD registration and onboarding assistance." },
  { icon: Compass, title: "NYSC Consultation", desc: "Guidance through NYSC registration, deployment and relocation." },
  { icon: CreditCard, title: "Payment Services", desc: "School fees, JAMB, WAEC, NECO and other secure bill payments." },
];

export const Services = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center reveal">
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

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={s.title}
                href={whatsappLink(`Hello KumarX, I'm interested in your ${s.title} service.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative bg-card border border-border rounded-3xl p-6 shadow-soft hover:shadow-elegant hover:-translate-y-1.5 transition-all duration-300"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="w-12 h-12 rounded-2xl gradient-hero grid place-items-center text-primary-foreground shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 font-bold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
