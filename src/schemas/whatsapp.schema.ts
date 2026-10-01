import { z } from "zod";

export const whatsappMessageSchema = z.object({
  message: z.string().trim().min(1).max(2000),
});

export type WhatsAppMessage = z.infer<typeof whatsappMessageSchema>;
