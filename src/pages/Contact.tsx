import { MessageCircle } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Contact() {
  return (
    <>
      <PageHeader
        title="Contactos"
        description="Estamos disponíveis para esclarecer dúvidas através do WhatsApp."
      />

      <section className="section">
        <div className="container contact-card card">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Fale directamente connosco</h2>
            <p>
              Para informações sobre formações, serviços ou outros assuntos
              institucionais, envie uma mensagem pelo WhatsApp.
            </p>
            <WhatsAppButton>Falar pelo WhatsApp</WhatsAppButton>
          </div>

          <div className="contact-note">
            <strong>Canal principal</strong>
            <span>WhatsApp</span>
            <small>
              Entre em contacto connosco através do WhatsApp para obter
              informações sobre as nossas formações, serviços e soluções
              profissionais.
            </small>
          </div>
        </div>
      </section>
    </>
  );
}
