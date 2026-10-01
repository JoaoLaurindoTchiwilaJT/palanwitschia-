# Palanwitschia — React + TypeScript

Site institucional da Palanwitschia – Consultoria e Formação.

## Stack

- React
- TypeScript
- Vite
- React Router DOM
- Zod
- Lucide React
- ESLint + TypeScript ESLint

## Objetivo

O projeto é exclusivamente institucional/informativo. Não possui checkout, pagamentos, login ou ecommerce.

Os principais CTAs de contacto direcionam para o WhatsApp.

## Estrutura

```text
src/
├── assets/
├── components/
├── config/
├── data/
├── layouts/
├── pages/
├── routes/
├── schemas/
├── services/
├── styles/
├── utils/
└── main.tsx
```

## Rotas

- `/`
- `/quem-somos`
- `/servicos`
- `/formacoes`
- `/contactos`
- `*` → página 404

## WhatsApp

Crie `.env` a partir de `.env.example`:

```env
VITE_WHATSAPP_NUMBER=244XXXXXXXXX
```

Use apenas o número com indicativo do país, de preferência sem espaços, `+`, parênteses ou hífens.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

## Build

```bash
npm run build
```

O build executa primeiro a verificação TypeScript com `tsc -b` e depois o build do Vite.

## Lint

```bash
npm run lint
```

## Arquitetura

- Componentes reutilizáveis em `components`.
- Páginas isoladas em `pages`.
- Layout global em `layouts`.
- Rotas centralizadas em `routes`.
- Dados institucionais e catálogo separados da apresentação.
- Validação do catálogo e filtros com Zod.
- Serviço centralizado para construção dos links do WhatsApp.
- Configurações de ambiente centralizadas em `config/site.ts`.
- Tipagem explícita para componentes, catálogo, filtros e dados institucionais.
