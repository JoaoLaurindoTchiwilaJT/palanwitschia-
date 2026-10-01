import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle } from "../components/SectionTitle";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { images } from "../data/images";
import { formationAreas } from "../data/formations";
import { siteContent } from "../data/siteContent";

const values = [
  "Excelência",
  "Integridade",
  "Inovação",
  "Competência",
  "Compromisso",
  "Orientação para Resultados",
  "Partilha de Conhecimento",
  "Responsabilidade Social",
];

export function Home() {
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Consultoria e Formação</span>
            <h1>Formação profissional, consultoria e desenvolvimento de competências</h1>
            <p>Soluções inovadoras, práticas e orientadas para resultados.</p>
            <div className="button-row">
              <WhatsAppButton />
              <Link className="btn btn-light-outline" to="/formacoes">
                Explorar formações
              </Link>
            </div>
            <div className="facts">
              <div>
                <b>{formationAreas.length}</b>
                <span>áreas de formação</span>
              </div>
              <div>
                <b>{siteContent.items.length}</b>
                <span>serviços de Recursos Humanos</span>
              </div>
              <div>
                <b>{values.length}</b>
                <span>valores</span>
              </div>
            </div>
          </div>
          <img src={images.hero} alt="Profissionais em ambiente de formação" />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle eyebrow="Quem Somos" title="Capacitação de pessoas e organizações" />
            <p>
              A Palanwitschia – Consultoria e Formação é uma empresa especializada em
              formação profissional, consultoria e desenvolvimento de competências,
              vocacionada para a capacitação de pessoas e organizações através de soluções
              inovadoras, práticas e orientadas para resultados.
            </p>
            <p>
              Acreditamos que o conhecimento é um dos principais motores do crescimento
              sustentável das organizações e da valorização dos seus profissionais.
            </p>
            <Link className="btn btn-outline" to="/quem-somos">
              Saiba mais
            </Link>
          </div>
          <div className="image-pair">
            <img src={images.a1} alt="Ambiente profissional" />
            <img src={images.a2} alt="Formação profissional" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Serviços"
            title="Serviços de Recursos Humanos"
            description={siteContent.intro}
          />
          <div className="cards-3">
            {siteContent.items.map((item, index) => (
              <article className="card" key={item.t}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </article>
            ))}
          </div>
          <Link className="btn btn-outline section-action" to="/servicos">
            Ver todos os detalhes <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Formações"
            title="Explore as nossas formações"
            description="Escolha uma área para consultar os cursos e respetivas cargas horárias."
          />
          <div className="areas-grid">
            {formationAreas.map(([name, image], index) => (
              <Link
                className="area-card"
                to="/formacoes"
                state={{ area: index }}
                key={name}
              >
                <div
                  className="area-image"
                  style={image ? { backgroundImage: `url(${images[image]})` } : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3>{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionTitle
            eyebrow="Compromisso"
            title="Conhecimento aplicado às necessidades reais"
            description={siteContent.comp}
          />
          <div className="values-grid">
            {values.map((value) => (
              <div className="value" key={value}>
                <Check size={18} />
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Precisa de mais informações?</h2>
          <p>
            Estamos disponíveis para esclarecer dúvidas sobre os nossos serviços e formações.
          </p>
          <WhatsAppButton>Falar pelo WhatsApp</WhatsAppButton>
        </div>
      </section>
    </div>
  );
}
