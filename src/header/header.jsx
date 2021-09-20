import React from "react";
import "./header.css";
import "./header-queries.css";

export const Header = () => {
  return (
    <>
      <div className="section-header">
        <a href="#" className="logo">
          <p>MC</p>
        </a>
        <div className="nav-sections">
          <a href="#" className="link-section">
            Inicio
          </a>
          <a href="../#conoceme" className="link-section">
            Conóceme
          </a>
          <a href="../#proyectos" className="link-section">
            Proyectos
          </a>
          <a href="../#habilidades" className="link-section">
            Habilidades
          </a>
          <a href="../#contacto" className="link-section">
            {" "}
            Contactáme
          </a>
        </div>

        <div className="navbar-mobile">
          <input type="checkbox" id="hamburguesa" />
          <label for="hamburguesa" className="menu-hamburguesa">
            <span className="linea-1"></span>
            <span className="linea-2"></span>
            <span className="linea-3"></span>
          </label>
          <div className="nav-menu-mobile">
            <div className="menu">
              <a className="link-section" href="#">
                Inicio
              </a>
              <a className="link-section" href="../#conoceme">
                Conóceme
              </a>
              <a className="link-section" href="../#proyectos">
                Proyectos
              </a>
              <a className="link-section" href="../#habilidades">
                Habilidades
              </a>
              <a className="link-section" href="../#contacto">
                Contactáme
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
