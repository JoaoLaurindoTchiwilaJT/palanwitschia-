import { courseCatalog } from "../data/catalog";
import { courseCatalogSchema, type Course, type CourseFilter } from "../schemas/catalog.schema";

const validatedCatalog = courseCatalogSchema.parse(
  courseCatalog.map(([title, hours, areaIndex, categoryIndex]) => ({
    title,
    hours,
    areaIndex,
    categoryIndex,
  })),
);

export const courses: Course[] = validatedCatalog;

export function filterCourses({
  query = "",
  area = -1,
  category = -1,
}: Pick<CourseFilter, "query" | "area" | "category">): Course[] {
  const normalized = query.trim().toLocaleLowerCase("pt-PT");

  return courses.filter((course) => {
    const matchesQuery =
      !normalized || course.title.toLocaleLowerCase("pt-PT").includes(normalized);
    const matchesArea = area < 0 || course.areaIndex === area;
    const matchesCategory = category < 0 || course.categoryIndex === category;

    return matchesQuery && matchesArea && matchesCategory;
  });
}
