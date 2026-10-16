
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function cerrarMenu() {
    setMenuAbierto(false);
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container position-relative">
          <Link
            to="/"
            className="navbar-brand header-logo fw-bold"
            onClick={cerrarMenu}
          >
            Electro House
          </Link>

          <div
            id="headerMenu"
            className={`navbar-collapse collapse ${
              menuAbierto ? "show" : ""
            }`}
          >
            <ul className="navbar-nav mx-auto gap-lg-3">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link header-link"
                  onClick={cerrarMenu}
                >
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/productos"
                  className="nav-link header-link"
                  onClick={cerrarMenu}
                >
                  Productos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contacto"
                  className="nav-link header-link"
                  onClick={cerrarMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0">
            <Link
              to="/carrito"
              className="header-carrito position-relative"
              aria-label="Carrito de compras: 0 productos"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>

              <span className="badge rounded-pill carrito-cantidad">
                0
              </span>
            </Link>

            <button
              className="navbar-toggler header-toggler d-lg-none"
              type="button"
              onClick={() => setMenuAbierto(!menuAbierto)}
              aria-expanded={menuAbierto}
              aria-controls="headerMenu"
              aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            >
            {menuAbierto ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
          <span className="navbar-toggler-icon"></span>
          )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
