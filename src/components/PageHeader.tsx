interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">Palanwitschia</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
