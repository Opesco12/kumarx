export const WHATSAPP_NUMBER = "2348000000000"; // placeholder — update with real number
export const WHATSAPP_MESSAGE = "Hello KumarX, I'm interested in your services.";
export const whatsappLink = (msg: string = WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
