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
      </div>
    </>
  );
};
