import { Clock, MessageCircle } from "lucide-react";
import { formationAreas } from "../data/formations";
import { type Course } from "../schemas/catalog.schema";
import { WhatsAppButton } from "./WhatsAppButton";

interface CourseCardProps {
  course: Course;
  onDetails: (course: Course) => void;
}

export function CourseCard({ course, onDetails }: CourseCardProps) {
  const message = `Olá, gostaria de obter informações sobre o curso ${course.title} da Palanwitschia.`;

  return (
    <article className="card course-card">
      <span className="course-badge">Formação</span>
      <h3>{course.title}</h3>
      <div className="course-meta">
        <span>
          <Clock size={15} /> {course.hours} horas
        </span>
        <span>{formationAreas[course.areaIndex]?.[0]}</span>
      </div>
      <button className="text-button" onClick={() => onDetails(course)}>
        Ver detalhes
      </button>
      <WhatsAppButton message={message} variant="outline" className="small">
         Pedir informações
      </WhatsAppButton>
    </article>
  );
}
