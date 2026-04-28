import { Star, Quote } from "lucide-react";
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
  // Duplicate list for seamless infinite scroll
  const loop = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28 overflow-hidden">
      <div className="container">
        <div className="max-w-xl reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Loved by <span className="text-primary">clients across Nigeria</span>
          </h2>
        </div>
      </div>

      <div className="mt-12 relative reveal">
        <div className="group flex overflow-hidden">
          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] shrink-0 pr-6">
            {loop.map((t, k) => (
              <div
                key={`${t.name}-${k}`}
                className="w-[320px] md:w-[380px] shrink-0 bg-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-elegant transition-all duration-500"
              >
                <Quote className="w-8 h-8 text-primary/30" />
                <div className="flex gap-0.5 mt-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
