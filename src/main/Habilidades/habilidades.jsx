import React from "react";
import "./habilidades.css";
import { listaHabilidades } from "./arrayHabilidades";

export const Tecnologias = () => {
  return (
    <>
      <div className="section-habilidades">
        <ListadoHabilidades />
      </div>
    </>
  );
};

const ListadoHabilidades = () => {
  const listadoDeHabilidades = listaHabilidades.map((svg) => {
    return (
      <>
        <CardHabilidad
          nameHabilidad={svg.nameHabilidad}
          imagenHabilidad={svg.imagenHabilidad}
        />
      </>
    );
  });
  return listadoDeHabilidades;
};

const CardHabilidad = (props) => {
  return (
    <>
      <div className="contenedor-svg">
        <img className="imagen-habilidad" src={props.imagenHabilidad} alt={props.nameHabildad} />
      </div>
      <div className="texto-descriptivo">
        <p>{props.nameHabilidad}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi optio
          commodi porro alias aliquid perferend is.
        </p>
      </div>
    </>
  );
};  
