import { Outlet } from "react-router-dom";
import { Footer, Menu, Navbar } from "../../components";

export default function Layout() {
  return (
    <div className="main">
      <Navbar />
      <main className="container">
        <div className="menuContainer">
          <Menu />
        </div>
        <section className="contentContainer">
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
}
