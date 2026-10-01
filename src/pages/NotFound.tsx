import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <span className="eyebrow">404</span>
        <h1>Página não encontrada</h1>
        <p>O conteúdo que procura não está disponível.</p>
        <Link className="btn" to="/">
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
