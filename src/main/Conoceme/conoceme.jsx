import React from "react";
import "./conoceme.css";

export const Conoceme = () => {
  return (
    <>
      <div className="section-conoceme">
        <div className="imagen-personal"></div>
        <div className="info">
          <p className="texto-presentacion">
            Soy Mario, estudiante de
            <span className="bold"> Desarrollo Frontend.</span>
            <br />
            Actualmente me encuentro realizando prácticas en
            <span className="bold"> React</span>. <br />
            Aspiro ser parte de grandes proyectos que brinden{" "}
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
