export const WHATSAPP_NUMBER = "2348106737046";
export const WHATSAPP_MESSAGE =
  "Hello KumarX, I'm interested in your services.";
export const whatsappLink = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
