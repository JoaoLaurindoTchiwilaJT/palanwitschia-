import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { images } from "../data/images";

const links = [
  ["/", "Início"],
  ["/quem-somos", "Quem Somos"],
  ["/servicos", "Serviços"],
  ["/formacoes", "Formações"],
  ["/contactos", "Contactos"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            className="logo"
            src={images.logo}
            alt="Palanwitschia – Consultoria e Formação"
          />
        </Link>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "main-nav open" : "main-nav"}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <WhatsAppButton className="small" />
        </nav>
      </div>
    </header>
  );
}
