import { Outlet } from "react-router-dom";
import { FloatingWhatsApp } from "../components/WhatsAppButton";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
