import { MessageCircle } from "lucide-react";
import { siteConfig } from "../config/site";
import { buildWhatsAppUrl } from "../services/whatsapp.service";
import type { ReactNode } from "react";

interface WhatsAppButtonProps {
  message?: string;
  children?: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export function WhatsAppButton({
  message = siteConfig.generalWhatsAppMessage,
  children = "Fale Connosco pelo WhatsApp",
  variant = "primary",
  className = "",
}: WhatsAppButtonProps) {
  const href = (() => {
    try {
      return buildWhatsAppUrl(message);
    } catch {
      return "#";
    }
  })();

  return (
    <a
      className={`btn ${variant === "outline" ? "btn-outline" : ""} btn-whatsapp ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

export function FloatingWhatsApp() {
  const href = (() => {
    try {
      return buildWhatsAppUrl();
    } catch {
      return "#";
    } 
  })();

  return (
    <a
      className="floating-whatsapp"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Palanwitschia pelo WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
