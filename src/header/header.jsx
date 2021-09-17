import React from "react";
// import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="section-header">
        <a href="#" className="logo">
          Mario Conti
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
          <a href="../#contactame" className="link-section">
            {" "}
            Contactáme
          </a>
        </div>
      </div>
    </>
  );
};
