import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/whatsapp";

export const WhatsAppFab = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
    <span className="relative grid place-items-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant hover:scale-110 transition-transform">
      <MessageCircle className="w-6 h-6" />
    </span>
  </a>
);
