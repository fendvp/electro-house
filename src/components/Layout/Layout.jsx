import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <main className="container  py-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;