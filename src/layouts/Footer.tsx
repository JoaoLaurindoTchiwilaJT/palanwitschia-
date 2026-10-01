import { Link } from "react-router-dom";
import { images } from "../data/images";
import { buildWhatsAppUrl } from "../services/whatsapp.service";

const links = [
  ["/", "Início"],
  ["/quem-somos", "Quem Somos"],
  ["/servicos", "Serviços"],
  ["/formacoes", "Formações"],
  ["/contactos", "Contactos"],
] as const;

export function Footer() {
  let whatsappUrl = "#";

  try {
    whatsappUrl = buildWhatsAppUrl();
  } catch {
    // A configuração pode estar ausente durante o desenvolvimento.
  }

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src={images.logo} alt="Palanwitschia" />
          <p>
            Empresa especializada em formação profissional, consultoria e
            desenvolvimento de competências.
          </p>
        </div>

        <div>
          <h4>Navegação</h4>
          {links.map(([to, label]) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
        </div>

        <div>
          <h4>Contacto</h4>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>

      <div className="container copyright">
        © 2026 Palanwitschia – Consultoria e Formação. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
