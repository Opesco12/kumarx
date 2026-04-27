import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyChoose } from "@/components/site/WhyChoose";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "KumarX — Reliable Academic & Digital Solutions";
    const desc = "KumarX helps students & professionals with project writing, CVs, design, data analysis, NYSC, NERD, and secure payments. Chat on WhatsApp.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <WhyChoose />
      <CTA />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
