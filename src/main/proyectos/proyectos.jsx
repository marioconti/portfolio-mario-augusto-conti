import React from "react";
import "./proyectos.css";
import { arrayProyectos } from "./arrayproyectos";

export const Proyectos = () => {
  return (
    <>
      <div className="section-proyectos">
        <ListaProyectos />
      </div>
    </>
  );
};

const ListaProyectos = () => {
  const listaDeCards = arrayProyectos.map((proyecto) => {
    return (
      <CardProyecto
        imagenDesktop={proyecto.imagenDesktop}
        imagenMobile={proyecto.imagenMobile}
        name={proyecto.name}
        descripcion={proyecto.descripcion}
      />
    );
  });
  return listaDeCards;
};

const CardProyecto = (props) => {
  return (
    <>
      <div className="contenedor-card">
        <div className="contenedor-imagenes">
          <img
            className="imagen-desktop"
            src={props.imagenDesktop}
            alt="imagen-proyecto-desktop"
          />
          <img
            className="imagen-mobile"
            src={props.imagenMobile}
            alt="imagen-proyecto-mobile"
          />
          <div className="nombre-proyecto">
            <p>{props.name}</p>
          </div>
        </div>
        <div className="contenedor-info">
          <div className="descripcion">
            <p>{props.descripcion}</p>
          </div>
          <a className="link-proyecto" href="">
            VISITA ESTE PROYECTO
          </a>
        </div>
      </div>
    </>
  );
};
