import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  { name: "Adaeze O.", role: "BSc Student, UNILAG", text: "KumarX delivered my final-year project ahead of schedule. Quality writing and very professional!" },
  { name: "Tunde A.", role: "MSc Candidate", text: "Their data analysis service is top-notch. SPSS results were clear and well-explained." },
  { name: "Chiamaka I.", role: "Job Seeker", text: "Got 3 interview calls within a week of using their CV writing service. Worth every naira." },
  { name: "Emeka N.", role: "HND Graduate", text: "Smooth NERD onboarding and helpful guidance throughout. Highly recommend KumarX!" },
  { name: "Fatima B.", role: "Corper", text: "NYSC consultation made my deployment so much easier. Truly reliable team." },
  { name: "Samuel K.", role: "Entrepreneur", text: "Their graphic design work transformed my brand. Creative, fast and affordable." },
];

export const Testimonials = () => {
  const ref = useReveal<HTMLDivElement>();
  const [i, setI] = useState(0);
  const perView = 3;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((p) => (p + 1) % testimonials.length);

  const visible = Array.from({ length: perView }, (_, k) => testimonials[(i + k) % testimonials.length]);

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 reveal">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold">
              Loved by <span className="text-gradient">clients across Nigeria</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary transition grid place-items-center">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} aria-label="Next" className="w-12 h-12 rounded-full border border-border bg-card hover:bg-secondary transition grid place-items-center">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {visible.map((t, k) => (
            <div
              key={`${t.name}-${k}-${i}`}
              className="bg-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${k * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30" />
              <div className="flex gap-0.5 mt-3">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-11 h-11 rounded-full gradient-hero grid place-items-center text-primary-foreground font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
