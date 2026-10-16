
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar el equipo");
        }

        return response.json();
      })
      .then((data) => setEquipo(data.slice(0, 3)))
      .catch((error) => console.error(error));
  }, []);

  return (
    <footer className="footer mt-5">
      <div className="container-fluid px-2 px-md-3 py-5 pb-2">
        <div className="row g-4">

          {/* Información de la tienda */}
          <div className="col-12 col-md-4 footer-seccion">
            <h5 className="footer-titulo">Electro House</h5>

            <p className="footer-texto">
              Tu tienda de Electrodomesticos.
              Tecnología y calidad para acompañarte
              en tu día a día.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-12 col-md-4 footer-seccion">
            <h5 className="footer-titulo">Tienda</h5>

            <ul className="list-unstyled footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/carrito">Carrito</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          {/* Equipo */}
          <div className="col-12 col-md-4 footer-seccion">
            <h5 className="footer-titulo">Equipo</h5>

            <ul className="list-unstyled footer-equipo">
              {equipo.map((miembro) => (
                <li
                  key={miembro.id}
                  className="d-flex align-items-center gap-3 mb-3 footer-miembro"
                >
                  <img
                    src={
                      miembro.id === 1
                        ? "/images/equipo/fem.webp"
                        : "/images/equipo/masc.webp"
                    }
                    alt={miembro.nombre}
                    className="footer-equipo-imagen"
                  />

                  <div>
                    <p className="mb-1 fw-semibold">
                      {miembro.nombre}
                    </p>
                    <small>{miembro.puesto}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright text-center mt-3 pt-2">
          <p className="mb-0">
            © {new Date().getFullYear()} Electro House.
            Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
