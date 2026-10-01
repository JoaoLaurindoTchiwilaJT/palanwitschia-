import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Services } from "../pages/Services";
import { Trainings } from "../pages/Trainings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "quem-somos", element: <About /> },
      { path: "servicos", element: <Services /> },
      { path: "formacoes", element: <Trainings /> },
      { path: "contactos", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
