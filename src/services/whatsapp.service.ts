import { siteConfig } from "../config/site";
import { whatsappMessageSchema } from "../schemas/whatsapp.schema";

export function buildWhatsAppUrl(
  message: string = siteConfig.generalWhatsAppMessage,
): string {
  const parsed = whatsappMessageSchema.safeParse({ message });

  if (!parsed.success) {
    throw new Error("Mensagem do WhatsApp inválida.");
  }

  const number = siteConfig.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    throw new Error("Configure VITE_WHATSAPP_NUMBER no ambiente.");
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(parsed.data.message)}`;
}

export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}
