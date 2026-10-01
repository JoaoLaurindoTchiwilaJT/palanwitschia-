export interface SiteService {
  t: string;
  d: string;
  l: string;
  b: string[];
}

export interface SiteContent {
  intro: string;
  comp: string;
  items: SiteService[];
}

export const siteContent: SiteContent = {
  "intro": "A Palanwitschia disponibiliza soluções integradas de Recursos Humanos, desenhadas para apoiar organizações na gestão estratégica do seu capital humano, garantindo eficiência operacional, conformidade legal e desenvolvimento organizacional sustentável.",
  "comp": "Na Palanwitschia trabalhamos para fornecer soluções de Recursos Humanos eficazes, personalizadas e alinhadas às melhores práticas do mercado, contribuindo para o crescimento sustentável e sucesso das organizações parceiras.",
  "items": [
    {
      "t": "Recrutamento e Seleção",
      "d": "Identificamos e atraímos os melhores talentos para responder às necessidades específicas de cada cliente.",
      "l": "Os nossos serviços incluem:",
      "b": [
        "Levantamento de necessidades de recrutamento",
        "Elaboração de perfis de função",
        "Divulgação de vagas",
        "Triagem curricular",
        "Entrevistas por competências",
        "Aplicação de testes psicotécnicos e técnicos",
        "Verificação de referências profissionais",
        "Apresentação de candidatos finalistas",
        "Apoio na integração de novos colaboradores"
      ]
    },
    {
      "t": "Outsourcing de Recursos Humanos",
      "d": "Oferecemos soluções de outsourcing que permitem às organizações focarem-se no seu negócio principal, transferindo a gestão operacional de recursos humanos para uma equipa especializada.",
      "l": "Serviços abrangidos:",
      "b": [
        "Gestão administrativa de pessoal",
        "Processamento salarial",
        "Gestão de contratos de trabalho",
        "Gestão de férias, ausências e assiduidade",
        "Gestão de processos disciplinares",
        "Administração de benefícios",
        "Apoio à conformidade laboral e legal",
        "Relatórios e indicadores de RH"
      ]
    },
    {
      "t": "Reestruturação Organizacional e de Departamentos",
      "d": "Apoiamos as organizações em processos de transformação, crescimento e otimização das suas estruturas organizacionais.",
      "l": "Principais áreas de intervenção:",
      "b": [
        "Diagnóstico organizacional",
        "Revisão da estrutura organizacional",
        "Redefinição de funções e responsabilidades",
        "Dimensionamento de equipas",
        "Desenho de organogramas",
        "Gestão da mudança organizacional",
        "Revisão de políticas e procedimentos",
        "Planos de comunicação interna",
        "Apoio em processos de reestruturação e racionalização de custos"
      ]
    },
    {
      "t": "Consultoria Estratégica de RH",
      "d": "Prestamos assessoria especializada para melhorar a gestão e o desempenho das equipas.",
      "l": "Inclui:",
      "b": [
        "Desenvolvimento de políticas de RH",
        "Avaliação de desempenho",
        "Planeamento da força de trabalho",
        "Gestão de talento",
        "Planos de sucessão",
        "Desenvolvimento de liderança",
        "Cultura organizacional e engajamento"
      ]
    },
    {
      "t": "Formação e Desenvolvimento",
      "d": "Concebemos programas de capacitação alinhados com os objetivos estratégicos das organizações.",
      "l": "Áreas de formação:",
      "b": [
        "Liderança e gestão de equipas",
        "Gestão de desempenho",
        "Legislação laboral",
        "Comunicação e relacionamento interpessoal",
        "Ética e Código de Conduta",
        "Saúde e segurança no trabalho"
      ]
    }
  ]
};
