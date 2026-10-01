import { PageHeader } from "../components/PageHeader";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteContent } from "../data/siteContent";

export function Services() {
  return (
    <>
      <PageHeader
        title="Serviços"
        description="Soluções integradas de Recursos Humanos para organizações."
      />

      <section className="section section-alt">
        <div className="container">
          <div className="cards-2">
            {siteContent.items.map((service, index) => (
              <article className="card service-card" key={service.t}>
                <span className="number">{String(index + 1).padStart(2, "0")}</span>
                <h2>{service.t}</h2>
                <p>{service.d}</p>
                <h4>{service.l}</h4>
                <ul>
                  {service.b.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <WhatsAppButton
                  variant="outline"
                  message={`Olá, gostaria de obter informações sobre o serviço de ${service.t} da Palanwitschia.`}
                >
                  Pedir informações
                </WhatsAppButton>
              </article>
            ))}
          </div>

          <article className="card commitment">
            <h3>O Nosso Compromisso</h3>
            <p>{siteContent.comp}</p>
          </article>
        </div>
      </section>
    </>
  );
}
