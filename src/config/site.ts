export interface SiteConfig {
  name: string;
  shortName: string;
  whatsappNumber: string;
  generalWhatsAppMessage: string;
}

export const siteConfig: SiteConfig = {
  name: "Palanwitschia – Consultoria e Formação",
  shortName: "Palanwitschia",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER ?? "",
  generalWhatsAppMessage:
    "Olá, gostaria de obter informações sobre os serviços da Palanwitschia.",
};
