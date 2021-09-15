import React from "react";
import "./conoceme.css";

export const Conoceme = () => {
  return (
    <>
      <div className="section-conoceme  color-change-3x">
        <div className="imagen-personal"></div>
        <div className="info">
          <p className="texto-presentacion">
            Soy Mario, estudiante de
            <span className="bold"> Desarrollo Web Frontend.</span>
            <br />
            Actualmente me encuentro realizando prácticas en
            <span className="bold"> React</span>. <br />
            Aspiro a ser parte de grandes proyectos que generen{" "}
            <span className="bold"> experiencias inolvidables</span>.
          </p>

          <a className="link-contactame" href="#">
            Contáctame
          </a>
        </div>
      </div>
    </>
  );
};
