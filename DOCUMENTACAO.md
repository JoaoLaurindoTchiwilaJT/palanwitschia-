# Documentação completa — Palanwitschia React + TypeScript

## 1. Objetivo do projeto

Este projeto é um site institucional/informativo da **Palanwitschia – Consultoria e Formação**.

O site apresenta:

- informação institucional;
- serviços;
- áreas de formação;
- catálogo de cursos;
- contactos;
- chamadas para ação direcionadas ao WhatsApp.

O projeto **não é um e-commerce**. Não existe checkout, pagamento, carrinho, autenticação ou área administrativa.

---

## 2. Tecnologias utilizadas

- React
- TypeScript
- Vite
- React Router DOM
- Zod
- Lucide React
- CSS próprio
- ESLint

### Papel de cada tecnologia

| Tecnologia | Responsabilidade |
|---|---|
| React | Construção da interface |
| TypeScript | Tipagem e segurança do código |
| Vite | Servidor de desenvolvimento e build |
| React Router | Rotas e navegação |
| Zod | Validação de dados |
| Lucide React | Ícones |
| CSS | Layout, cores, responsividade e aparência |
| ESLint | Qualidade e consistência do código |

---

# 3. Como executar o projeto

Entre na pasta do projeto:

```bash
cd palanwitschia-react
```

Instale as dependências:

```bash
npm install
```

Execute em desenvolvimento:

```bash
npm run dev
```

Para validar e gerar produção:

```bash
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

Para verificar o ESLint:

```bash
npm run lint
```

---

# 4. Variável de ambiente

Existe um arquivo:

```text
.env.example
```

Crie uma cópia chamada:

```text
.env
```

E configure:

```env
VITE_WHATSAPP_NUMBER=244XXXXXXXXX
```

Use o número em formato internacional, de preferência somente com números.

Exemplo:

```env
VITE_WHATSAPP_NUMBER=244923000000
```

Não coloque espaços, parênteses ou hífens.

O número é lido em:

```text
src/config/site.ts
```

---

# 5. Arquitetura geral

A aplicação segue esta divisão:

```text
src/
├── assets/       imagens e recursos estáticos
├── components/   componentes reutilizáveis
├── config/       configurações globais
├── data/         conteúdo estático do site
├── layouts/      estruturas compartilhadas das páginas
├── pages/        páginas associadas às rotas
├── routes/       configuração das rotas
├── schemas/      validações Zod e tipos derivados
├── services/     regras de integração/serviços
├── styles/       estilos globais
├── utils/        funções auxiliares
└── main.tsx      ponto de entrada
```

## Regra principal

Antes de alterar qualquer coisa, identifique se está a alterar:

**Conteúdo** → `data/`

**Aparência** → `styles/` ou componente correspondente

**Página** → `pages/`

**Componente reutilizável** → `components/`

**Navegação** → `routes/` ou `Header.tsx`

**WhatsApp** → `config/` + `services/`

**Validação** → `schemas/`

**Função auxiliar** → `utils/`

---

# 6. Ponto de entrada — `src/main.tsx`

Este é o ponto onde o React inicia.

Fluxo:

```text
index.html
   ↓
src/main.tsx
   ↓
AppRoutes
   ↓
MainLayout
   ↓
página correspondente
```

Normalmente você não precisa alterar este arquivo.

Altere-o apenas quando precisar adicionar providers globais, como um contexto, tema ou biblioteca que envolva toda a aplicação.

---

# 7. Rotas — `src/routes/AppRoutes.tsx`

As rotas atuais são:

| URL | Página |
|---|---|
| `/` | Home |
| `/quem-somos` | Quem Somos |
| `/servicos` | Serviços |
| `/formacoes` | Formações |
| `/contactos` | Contactos |
| `*` | Página 404 |

Exemplo:

```tsx
{ path: "servicos", element: <Services /> }
```

## Como adicionar uma página

### 1. Crie a página

```text
src/pages/Empresa.tsx
```

### 2. Importe no router

```tsx
import { Empresa } from "../pages/Empresa";
```

### 3. Adicione a rota

```tsx
{ path: "empresa", element: <Empresa /> }
```

### 4. Adicione ao menu, se necessário

O menu principal está em:

```text
src/layouts/Header.tsx
```

---

# 8. Layout principal — `src/layouts/MainLayout.tsx`

O layout é compartilhado por todas as páginas.

Estrutura:

```text
Header
  ↓
main
  ↓
Outlet (página atual)
  ↓
Footer
  ↓
FloatingWhatsApp
```

Isso significa que você não deve repetir Header e Footer dentro de cada página.

---

# 9. Cabeçalho — `src/layouts/Header.tsx`

Responsável por:

- logo;
- menu desktop;
- menu mobile;
- links das páginas;
- botão WhatsApp.

Os links estão neste bloco:

```tsx
const links = [
  ["/", "Início"],
  ["/quem-somos", "Quem Somos"],
  ["/servicos", "Serviços"],
  ["/formacoes", "Formações"],
  ["/contactos", "Contactos"],
] as const;
```

## Para mudar o nome de um menu

Altere somente o texto:

```tsx
["/servicos", "Serviços"],
```

para:

```tsx
["/servicos", "Nossos Serviços"],
```

## Para adicionar menu

Se a rota `/empresa` existir:

```tsx
["/empresa", "Empresa"],
```

---

# 10. Rodapé — `src/layouts/Footer.tsx`

O Footer contém informações institucionais, navegação e chamadas para contacto.

Se quiser alterar texto do rodapé, altere este arquivo.

Se o mesmo texto for usado em várias partes do site, considere movê-lo para `src/data/siteContent.ts`.

---

# 11. Conteúdo institucional — `src/data/siteContent.ts`

Este é um dos arquivos mais importantes para manutenção.

Ele concentra conteúdo como:

- missão;
- visão;
- valores;
- informações institucionais;
- serviços;
- textos apresentados nas páginas.

## Regra

Se você quer **alterar uma frase**, procure primeiro em `siteContent.ts` antes de editar JSX.

Isso evita misturar conteúdo com estrutura visual.

---

# 12. Catálogo de cursos — `src/data/catalog.ts`

Este arquivo contém o catálogo de formações.

O catálogo é armazenado como dados e não como HTML.

A estrutura usada pelo projeto é equivalente a:

```ts
[
  ["Nome do curso", 20, 0, 1]
]
```

Onde:

```text
1º valor → título
2º valor → número de horas
3º valor → índice da área
4º valor → índice da categoria
```

## Exemplo

```ts
[
  ["Excel Avançado", 24, 7, 72]
]
```

Não coloque componentes React neste arquivo.

---

# 13. Áreas e categorias — `src/data/formations.ts`

Este arquivo contém:

```text
formationAreas
formationCategories
```

As áreas são utilizadas nos filtros e na apresentação das formações.

Exemplo:

```ts
["Informática", "p38"]
```

O primeiro valor é o nome da área.

O segundo valor é a referência da imagem associada, quando existir.

## Adicionar uma área

```ts
["Nova Área", "p50"]
```

Se não existir imagem:

```ts
["Nova Área", null]
```

---

# 14. Imagens — `src/data/images.ts`

Este arquivo cria um mapa entre nomes e imagens.

Exemplo:

```ts
logo: "/src/assets/logo.jpg"
```

As imagens físicas estão em:

```text
src/assets/
```

## Para trocar o logo

Substitua o arquivo:

```text
src/assets/logo.jpg
```

mantendo o mesmo nome.

Ou altere o caminho em `images.ts`.

## Para adicionar uma imagem

1. Coloque o arquivo em `src/assets/`.
2. Adicione uma entrada em `images.ts`.
3. Use o nome da entrada no componente/página.

---

# 15. Página Home — `src/pages/Home.tsx`

É a página inicial.

Ela combina conteúdo dos arquivos `data/` com componentes reutilizáveis.

A Home normalmente deve ser alterada quando você quiser mudar:

- hero;
- apresentação inicial;
- blocos de serviços;
- áreas de formação destacadas;
- valores;
- CTA.

Se você estiver somente trocando texto, procure primeiro em `data/`.

Se estiver mudando a estrutura da página, altere `Home.tsx`.

---

# 16. Página Quem Somos — `src/pages/About.tsx`

Apresenta a parte institucional.

Para alterar a estrutura visual:

```text
src/pages/About.tsx
```

Para alterar conteúdo compartilhado:

```text
src/data/siteContent.ts
```

---

# 17. Página Serviços — `src/pages/Services.tsx`

Apresenta os serviços da empresa.

Cada serviço possui chamada para WhatsApp.

Ao criar um novo serviço, mantenha a mesma estrutura visual dos existentes e, quando possível, coloque os dados em `siteContent.ts` em vez de duplicar texto no JSX.

---

# 18. Página Formações — `src/pages/Trainings.tsx`

Esta é a página mais dinâmica do site.

Ela controla:

- pesquisa;
- filtro por área;
- filtro por categoria;
- quantidade de resultados exibidos;
- seleção de curso;
- abertura do modal.

Estados principais:

```ts
query
area
category
limit
selected
```

O catálogo filtrado é obtido por:

```ts
filterCourses({ query, area, category })
```

## Fluxo

```text
catalog.ts
    ↓
utils/catalog.ts
    ↓
filterCourses()
    ↓
Trainings.tsx
    ↓
CourseCard
    ↓
CourseModal
```

---

# 19. Filtro do catálogo — `src/utils/catalog.ts`

Este arquivo contém a regra de filtragem.

A pesquisa compara o título do curso.

A área compara `areaIndex`.

A categoria compara `categoryIndex`.

Não altere a interface visual aqui.

Este arquivo deve permanecer focado em lógica.

---

# 20. Validação com Zod — `src/schemas/catalog.schema.ts`

O catálogo é validado antes de ser usado.

Exemplo:

```ts
export const courseSchema = z.object({
  title: z.string().min(1),
  hours: z.number().positive(),
  areaIndex: z.number().int().nonnegative(),
  categoryIndex: z.number().int().nonnegative(),
});
```

Se adicionar uma propriedade obrigatória ao curso, altere o schema e os dados/componentes que dependem dela.

O tipo TypeScript é gerado pelo próprio Zod:

```ts
type Course = z.infer<typeof courseSchema>;
```

Isso evita manter manualmente duas definições diferentes do mesmo objeto.

---

# 21. Componentes reutilizáveis

## `CourseCard.tsx`

Apresenta um curso individual.

Recebe um `Course` e uma função para abrir os detalhes.

Use este componente quando precisar apresentar cursos em outros locais.

## `CourseModal.tsx`

Mostra os detalhes do curso selecionado.

Também pode encaminhar o utilizador para WhatsApp.

## `PageHeader.tsx`

Cabeçalho reutilizável das páginas internas.

Recebe título e descrição.

## `SectionTitle.tsx`

Título reutilizável para secções.

## `WhatsAppButton.tsx`

Componente centralizado para CTA de WhatsApp.

Também existe:

```tsx
FloatingWhatsApp
```

para o botão flutuante.

---

# 22. WhatsApp — configuração e funcionamento

Existem três partes principais:

```text
src/config/site.ts
src/services/whatsapp.service.ts
src/components/WhatsAppButton.tsx
```

## Configuração

`site.ts` lê:

```ts
import.meta.env.VITE_WHATSAPP_NUMBER
```

## Serviço

`whatsapp.service.ts` transforma a mensagem em uma URL:

```text
https://wa.me/NUMERO?text=MENSAGEM
```

## Componente

`WhatsAppButton.tsx` utiliza o serviço para gerar o link.

## Alterar mensagem padrão

Em `src/config/site.ts`:

```ts
generalWhatsAppMessage:
  "Olá, gostaria de obter informações sobre os serviços da Palanwitschia.",
```

Você pode alterar essa mensagem.

---

# 23. Mensagens específicas do WhatsApp

Você pode enviar uma mensagem diferente para cada ação.

Exemplo:

```tsx
<WhatsAppButton
  message="Olá, gostaria de informações sobre a formação em Excel."
>
  Saber mais
</WhatsAppButton>
```

O utilizador será encaminhado para o WhatsApp com essa mensagem preenchida.

---

# 24. Validação de WhatsApp — `src/schemas/whatsapp.schema.ts`

A mensagem precisa:

- ter pelo menos 1 caractere;
- ter no máximo 2000 caracteres;
- ser uma string.

Isso evita enviar dados inválidos ao serviço.

---

# 25. CSS — `src/styles/global.css`

O CSS global controla:

- cores;
- tipografia;
- espaçamento;
- containers;
- botões;
- cards;
- grids;
- header;
- footer;
- formulários/filtros;
- modal;
- responsividade;
- botão flutuante do WhatsApp.

## Alterar cor principal

Procure as variáveis CSS no início do arquivo.

A ideia é manter cores centralizadas em variáveis em vez de espalhar valores pelo projeto.

## Alterar tamanho do botão

Procure as classes:

```css
.btn
.btn-whatsapp
```

## Alterar cards

Procure:

```css
.card
.cards-3
```

---

# 26. Responsividade

O CSS possui regras para diferentes larguras de ecrã.

O Header também possui estado de menu mobile:

```ts
const [open, setOpen] = useState(false);
```

Não crie outro menu mobile numa página individual.

O menu deve continuar centralizado no `Header.tsx`.

---

# 27. Ícones

Os ícones vêm de `lucide-react`.

Exemplo:

```tsx
import { MessageCircle } from "lucide-react";
```

Uso:

```tsx
<MessageCircle size={18} />
```

Para trocar um ícone, procure no catálogo do Lucide e altere o import/componente.

---

# 28. Como alterar apenas textos

### Título da Home

Procure primeiro em:

```text
src/pages/Home.tsx
```

ou, se o texto estiver centralizado:

```text
src/data/siteContent.ts
```

### Missão/visão/valores

```text
src/data/siteContent.ts
```

### Serviços

```text
src/data/siteContent.ts
```

### Cursos

```text
src/data/catalog.ts
```

### Áreas

```text
src/data/formations.ts
```

### Menu

```text
src/layouts/Header.tsx
```

### Rodapé

```text
src/layouts/Footer.tsx
```

---

# 29. Como trocar imagens

### Logo

```text
src/assets/logo.jpg
```

### Hero

```text
src/assets/hero.jpg
```

### Imagens institucionais

```text
src/assets/a1.jpg
src/assets/a2.jpg
```

### Imagens das formações

```text
src/assets/p30.jpg
src/assets/p38.jpg
src/assets/p54.jpg
...
```

Depois confirme o mapeamento em:

```text
src/data/images.ts
```

---

# 30. Como adicionar um novo curso

1. Abra:

```text
src/data/catalog.ts
```

2. Adicione uma entrada no formato:

```ts
["Nome do Curso", 20, 7, 72]
```

3. Confirme que o índice da área existe em `formationAreas`.

4. Confirme que o índice da categoria existe em `formationCategories`.

5. Execute:

```bash
npm run build
```

Se o curso não aparecer, verifique principalmente os índices.

---

# 31. Como adicionar uma nova área de formação

Em:

```text
src/data/formations.ts
```

adicione:

```ts
["Nova Área", null]
```

ou com imagem:

```ts
["Nova Área", "p50"]
```

Depois, os cursos dessa área precisam utilizar o índice correto.

---

# 32. Como criar uma nova página

Exemplo: página `Empresa`.

### Arquivo

```text
src/pages/Empresa.tsx
```

### Componente

```tsx
export function Empresa() {
  return (
    <section className="section">
      <div className="container">
        <h1>Empresa</h1>
      </div>
    </section>
  );
}
```

### Rota

Em `AppRoutes.tsx`:

```tsx
import { Empresa } from "../pages/Empresa";
```

Depois:

```tsx
{ path: "empresa", element: <Empresa /> }
```

### Menu

Em `Header.tsx`:

```tsx
["/empresa", "Empresa"],
```

---

# 33. Como criar um componente reutilizável

Não coloque um componente que será reutilizado diretamente numa página se ele puder ficar em `components/`.

Exemplo:

```text
src/components/InfoCard.tsx
```

Interface:

```tsx
interface InfoCardProps {
  title: string;
  description: string;
}
```

Componente:

```tsx
export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
```

Isso permite reutilização em várias páginas.

---

# 34. TypeScript — regra de desenvolvimento

Evite:

```ts
const data: any = ...
```

Prefira:

```ts
interface User {
  name: string;
  email: string;
}
```

E:

```ts
const user: User = ...
```

Quando o dado for validado pelo Zod, prefira derivar o tipo do schema.

---

# 35. Quando usar cada camada

## `data/`

Use para conteúdo estático.

Não coloque lógica complexa.

## `components/`

Use para UI reutilizável.

## `pages/`

Use para composição de páginas e lógica específica da página.

## `services/`

Use para operações externas ou regras de integração.

## `utils/`

Use para funções puras auxiliares.

## `schemas/`

Use para validar entradas e definir tipos derivados.

## `config/`

Use para configurações globais.

## `layouts/`

Use para elementos estruturais compartilhados.

---

# 36. O que não fazer

### Não colocar o número do WhatsApp em vários componentes

Errado:

```tsx
href="https://wa.me/244923000000"
```

Use `siteConfig` + serviço.

### Não duplicar o Header

O Header pertence ao layout.

### Não colocar 850 cursos dentro de JSX

O catálogo pertence a `data/catalog.ts`.

### Não colocar textos institucionais repetidos em várias páginas

Centralize em `data/siteContent.ts` quando o conteúdo for compartilhado.

### Não usar `any` sem necessidade

A finalidade do TypeScript é justamente reduzir dados sem contrato.

### Não colocar regras de filtragem dentro do CSS

Filtro é lógica e deve ficar em `utils/catalog.ts`/página.

---

# 37. Fluxo completo da aplicação

```text
index.html
   ↓
main.tsx
   ↓
AppRoutes
   ↓
MainLayout
   ├── Header
   ├── Outlet
   │    ├── Home
   │    ├── About
   │    ├── Services
   │    ├── Trainings
   │    ├── Contact
   │    └── NotFound
   ├── Footer
   └── FloatingWhatsApp
```

Fluxo das formações:

```text
catalog.ts
   ↓
Zod courseSchema
   ↓
utils/catalog.ts
   ↓
filterCourses()
   ↓
Trainings.tsx
   ↓
CourseCard.tsx
   ↓
CourseModal.tsx
   ↓
WhatsAppButton
   ↓
whatsapp.service.ts
   ↓
WhatsApp
```

---

# 38. Fluxo de um clique no WhatsApp

```text
Utilizador clica
      ↓
WhatsAppButton
      ↓
buildWhatsAppUrl()
      ↓
whatsappMessageSchema
      ↓
VITE_WHATSAPP_NUMBER
      ↓
https://wa.me/...
      ↓
WhatsApp
```

Isso permite mudar o número em um único lugar.

---

# 39. Como fazer uma alteração com segurança

Sempre siga:

### 1. Identifique o tipo de alteração

É conteúdo? UI? rota? lógica? configuração?

### 2. Edite a camada correta

Não coloque uma solução rápida no primeiro arquivo que encontrar.

### 3. Execute o lint

```bash
npm run lint
```

### 4. Execute o build

```bash
npm run build
```

### 5. Teste no navegador

```bash
npm run dev
```

### 6. Verifique desktop e mobile

Especialmente:

- Header;
- menu mobile;
- cards;
- filtros;
- modal;
- botões WhatsApp.

---

# 40. Checklist para futuras alterações

## Alteração de conteúdo

- [ ] Alterei o arquivo em `data/` quando aplicável.
- [ ] Não dupliquei conteúdo desnecessariamente.

## Alteração visual

- [ ] Usei classes existentes quando possível.
- [ ] Não criei CSS duplicado.
- [ ] Testei mobile.

## Nova página

- [ ] Criei `.tsx`.
- [ ] Adicionei rota.
- [ ] Adicionei ao menu se necessário.
- [ ] Mantive o layout existente.

## Novo dado

- [ ] Criei/atualizei o tipo.
- [ ] Atualizei o schema se necessário.
- [ ] Atualizei os componentes dependentes.

## WhatsApp

- [ ] Usei `WhatsAppButton`.
- [ ] Não coloquei número diretamente no JSX.
- [ ] Testei a mensagem gerada.

## Antes de publicar

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Teste desktop
- [ ] Teste mobile
- [ ] Teste todos os links
- [ ] Teste WhatsApp
- [ ] Teste pesquisa de formações
- [ ] Teste filtros
- [ ] Teste modal de curso

---

# 41. Evolução recomendada do projeto

Se o projeto crescer, a arquitetura atual permite adicionar:

- API/backend;
- CMS;
- painel administrativo;
- carregamento de cursos através de API;
- SEO avançado;
- analytics;
- testes automatizados;
- internacionalização;
- autenticação, caso futuramente exista uma área privada.

Essas funcionalidades devem ser adicionadas mantendo a separação entre apresentação, dados, serviços e validação.

---

# 42. Resumo rápido: onde alterar cada coisa

| Quero alterar... | Arquivo |
|---|---|
| Número WhatsApp | `.env` |
| Mensagem padrão WhatsApp | `src/config/site.ts` |
| Logo | `src/assets/logo.jpg` / `src/data/images.ts` |
| Hero | `src/assets/hero.jpg` / `Home.tsx` |
| Menu | `src/layouts/Header.tsx` |
| Rodapé | `src/layouts/Footer.tsx` |
| Missão/visão/valores | `src/data/siteContent.ts` |
| Serviços | `src/data/siteContent.ts` / `Services.tsx` |
| Cursos | `src/data/catalog.ts` |
| Áreas | `src/data/formations.ts` |
| Categorias | `src/data/formations.ts` |
| Pesquisa de cursos | `src/pages/Trainings.tsx` + `src/utils/catalog.ts` |
| Modal de curso | `src/components/CourseModal.tsx` |
| Card de curso | `src/components/CourseCard.tsx` |
| Botão WhatsApp | `src/components/WhatsAppButton.tsx` |
| Rotas | `src/routes/AppRoutes.tsx` |
| Cores/layout geral | `src/styles/global.css` |
| Validação de curso | `src/schemas/catalog.schema.ts` |
| Validação WhatsApp | `src/schemas/whatsapp.schema.ts` |
| Serviço WhatsApp | `src/services/whatsapp.service.ts` |

---

# 43. Princípio final

Quando tiver dúvida sobre onde alterar algo, pense nesta sequência:

```text
É conteúdo?
   → data/

É aparência?
   → styles/ ou components/

É uma página?
   → pages/

É reutilizável?
   → components/

É navegação?
   → routes/ ou layouts/Header.tsx

É integração?
   → services/

É validação?
   → schemas/

É uma função auxiliar?
   → utils/

É configuração?
   → config/ ou .env
```

Essa separação é a principal regra de manutenção deste projeto.
