import React from "react";
// import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <>
      <div className="section-header">
        {/* <Link to="/">Inicio</Link>
        <Link to="/"></Link>
        <Link to="/"></Link>
        <Link to="/"></Link> */}
        <a href="#" className="logo">
          Mario Conti
        </a>
        <div className="nav-sections">
          <a href="#" className="link-section">
            Inicio
          </a>
          <a href="#conoceme" className="link-section">
            Conóceme
          </a>
          <a href="#" className="link-section">
            Proyectos
          </a>
          <a href="#" className="link-section">
            Habilidades
          </a>
          <a href="#" className="link-section">
            {" "}
            Contactáme
          </a>
        </div>
      </div>
    </>
  );
};
