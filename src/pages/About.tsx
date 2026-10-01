import { PageHeader } from "../components/PageHeader";
import { SectionTitle } from "../components/SectionTitle";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { images } from "../data/images";

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

export function About() {
  return (
    <>
      <PageHeader
        title="Quem Somos"
        description="Formação profissional, consultoria e desenvolvimento de competências."
      />

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle
              eyebrow="Quem Somos"
              title="Capacitação de pessoas e organizações"
            />
            <p>
              A Palanwitschia – Consultoria e Formação é uma empresa
              especializada em formação profissional, consultoria e
              desenvolvimento de competências, vocacionada para a capacitação
              de pessoas e organizações através de soluções inovadoras,
              práticas e orientadas para resultados.
            </p>
            <p>
              Acreditamos que o conhecimento é um dos principais motores do
              crescimento sustentável das organizações e da valorização dos
              seus profissionais. Por isso, desenvolvemos programas de formação
              alinhados com as necessidades do mercado, utilizando metodologias
              modernas e fortemente orientadas para a componente prática.
            </p>
          </div>

          <div className="image-pair">
            <img src={images.a1} alt="Ambiente de formação" />
            <img src={images.a2} alt="Profissionais" />
          </div>
        </div>

        <div className="container cards-3 about-cards">
          <article className="card">
            <h3>Missão</h3>
            <p>
              Promover o desenvolvimento de competências técnicas e profissionais
              através de formação de elevada qualidade e serviços de consultoria
              especializados, contribuindo para o crescimento das organizações,
              para a valorização do capital humano e para a melhoria contínua
              dos processos de tomada de decisão.
            </p>
            <p>
              Pretendemos aproximar o conhecimento das necessidades reais do
              mercado, oferecendo soluções práticas, inovadoras e orientadas
              para resultados.
            </p>
          </article>

          <article className="card">
            <h3>Visão</h3>
            <p>
              Ser reconhecida como uma das principais referências nacionais e
              internacionais na área da formação profissional, consultoria e
              análise de dados, distinguindo-se pela excelência dos seus
              serviços, inovação, credibilidade e impacto positivo no
              desenvolvimento das organizações e da sociedade.
            </p>
          </article>

          <article className="card">
            <h3>Valores</h3>
            {values.map((value) => (
              <div className="value-line" key={value}>
                {value}
              </div>
            ))}
          </article>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Fale connosco</h2>
          <p>
            Para informações institucionais, serviços ou formações, utilize o
            WhatsApp.
          </p>
          <WhatsAppButton>Falar pelo WhatsApp</WhatsAppButton>
        </div>
      </section>
    </>
  );
}
