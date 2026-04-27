import { Mail, Phone, MessageCircle, Instagram, Twitter, Facebook } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <a href="#top" className="flex items-center gap-2 font-display font-extrabold text-xl">
            <span className="w-9 h-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground">K</span>
            Kumar<span className="text-primary">X</span>
          </a>
          <p className="mt-4 text-muted-foreground max-w-sm leading-relaxed">
            Your reliable partner for academic & digital solutions. Fast, affordable, professional.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">Quick links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
            <li><a href="#how" className="hover:text-foreground transition">How it works</a></li>
            <li><a href="#testimonials" className="hover:text-foreground transition">Testimonials</a></li>
            <li><a href="#why" className="hover:text-foreground transition">Why choose us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@kumarx.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> +234 800 000 0000</li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-2 px-4 h-10 rounded-full bg-whatsapp text-whatsapp-foreground font-semibold hover:opacity-90 transition">
                <MessageCircle className="w-4 h-4" /> WhatsApp us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} KumarX. All rights reserved.</p>
          <p>Crafted with care for students & professionals.</p>
        </div>
      </div>
    </footer>
  );
};
