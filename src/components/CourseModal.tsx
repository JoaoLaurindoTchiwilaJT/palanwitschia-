import { X } from "lucide-react";
import { formationAreas, formationCategories } from "../data/formations";
import { type Course } from "../schemas/catalog.schema";
import { WhatsAppButton } from "./WhatsAppButton";

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: CourseModalProps) {
  if (!course) return null;

  const message = `Olá, gostaria de obter informações sobre o curso ${course.title}.`;

  return (
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
      >
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <X />
        </button>
        <span className="eyebrow">Formação</span>
        <h2 id="course-modal-title">{course.title}</h2>
        <dl>
          <dt>Área</dt>
          <dd>{formationAreas[course.areaIndex]?.[0]}</dd>
          <dt>Categoria</dt>
          <dd>{formationCategories[course.categoryIndex]}</dd>
          <dt>Carga horária</dt>
          <dd>{course.hours} horas</dd>
        </dl>
        <WhatsAppButton message={message}>
          Tenho Interesse — WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
