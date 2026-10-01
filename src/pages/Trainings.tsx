import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { CourseCard } from "../components/CourseCard";
import { CourseModal } from "../components/CourseModal";
import { PageHeader } from "../components/PageHeader";
import { formationAreas, formationCategories } from "../data/formations";
import type { Course } from "../schemas/catalog.schema";
import { filterCourses } from "../utils/catalog";

interface TrainingLocationState {
  area?: number; 
}

export function Trainings() {
  const location = useLocation();
  const state = location.state as TrainingLocationState | null;
  const initialArea = state?.area ?? -1;

  const [query, setQuery] = useState("");
  const [area, setArea] = useState(initialArea);
  const [category, setCategory] = useState(-1);
  const [limit, setLimit] = useState(24);
  const [selected, setSelected] = useState<Course | null>(null);

  const filtered = useMemo(
    () => filterCourses({ query, area, category }),
    [query, area, category],
  );

  const categories = useMemo(
    () =>
      [...new Set(filtered.map((course) => course.categoryIndex))].sort(
        (a, b) => a - b,
      ),
    [filtered],
  );

  const visible = filtered.slice(0, limit);

  const resetLimit = () => setLimit(24);

  return (
    <>
      <PageHeader
        title="Formações"
        description="Pesquise no catálogo por curso, área de formação ou categoria."
      />

      <section className="section">
        <div className="container">
          <div className="filters">
            <label>
              <span>Pesquisar curso</span>
              <div className="input-icon">
                <Search size={18} />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    resetLimit();
                  }}
                  placeholder="Pesquisar curso..."
                />
              </div>
            </label>

            <label>
              <span>Área de formação</span>
              <select
                value={area}
                onChange={(event) => {
                  setArea(Number(event.target.value));
                  setCategory(-1);
                  resetLimit();
                }}
              >
                <option value={-1}>Todas as áreas</option>
                {formationAreas.map(([name], index) => (
                  <option value={index} key={name}>
                    {name}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Categoria</span>
              <select
                value={category}
                onChange={(event) => {
                  setCategory(Number(event.target.value));
                  resetLimit();
                }}
              >
                <option value={-1}>Todas as categorias</option>
                {categories.map((index) => (
                  <option value={index} key={index}>
                    {formationCategories[index]}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="result-count">{filtered.length} formações encontradas</p>

          {visible.length ? (
            <div className="cards-3">
              {visible.map((course) => (
                <CourseCard
                  course={course}
                  onDetails={setSelected}
                  key={`${course.title}-${course.areaIndex}-${course.categoryIndex}`}
                />
              ))}
            </div>
          ) : (
            <p className="empty">Nenhuma formação encontrada. Tente outro termo.</p>
          )}

          {filtered.length > limit && (
            <div className="center">
              <button
                className="btn btn-outline"
                onClick={() => setLimit((value) => value + 24)}
              >
                Mostrar mais
              </button>
            </div>
          )}
        </div>
      </section>

      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </>
  );
}
