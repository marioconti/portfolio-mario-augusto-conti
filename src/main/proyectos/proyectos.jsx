import React from "react";
import "./proyectos.css";
import { arrayProyectosIzquierda } from "./arrayproyectos";
import { arrayProyectosDerecha } from "./arrayproyectos";

export const Proyectos = () => {
  return (
    <>
      <div className="section-proyectos">
        <ListaProyectosIzquierda />
        <ListaProyectosDerecha />
      </div>
    </>
  );
};

const ListaProyectosIzquierda = () => {
  const listaDeCardsIzquierda = arrayProyectosIzquierda.map((proyecto) => {
    return (
      <>
        <CardProyectoIzquierdo
          imagenDesktop={proyecto.imagenDesktop}
          imagenMobile={proyecto.imagenMobile}
          name={proyecto.name}
          descripcion={proyecto.descripcion}
          link={proyecto.link}
        />
      </>
    );
  });
  return listaDeCardsIzquierda;
};

const CardProyectoIzquierdo = (props) => {
  return (
    <>
      <div className="contenedor-card">
        <div className="contenedor-imagenes bg-yellow">
          <div className="nombre-proyecto">
            <p>{props.name}</p>
          </div>
          <img
            className="imagen-desktop"
            src={props.imagenDesktop}
            alt="imagen-proyecto-desktop"
          />
          <img
            className="imagen-mobile-izq"
            src={props.imagenMobile}
            alt="imagen-proyecto-mobile"
          />
        </div>
        <div className="contenedor-info">
          <div className="descripcion">
            <p>{props.descripcion}</p>
          </div>
          <a className="link-proyecto" href={props.link}>
            VISITA ESTE PROYECTO
          </a>
        </div>
      </div>
    </>
  );
};

const ListaProyectosDerecha = () => {
  const listaDeCardsDerecha = arrayProyectosDerecha.map((proyecto) => {
    return (
      <>
        <CardProyectoDerecho
          imagenDesktop={proyecto.imagenDesktop}
          imagenMobile={proyecto.imagenMobile}
          name={proyecto.name}
          descripcion={proyecto.descripcion}
          link={proyecto.link}
        />
      </>
    );
  });
  return listaDeCardsDerecha;
};

const CardProyectoDerecho = (props) => {
  return (
    <>
      <div className="contenedor-card">
        <div className="contenedor-info bg-withe">
          <div className="descripcion">
            <p>{props.descripcion}</p>
          </div>
          <a className="link-proyecto" href={props.link}>
            VISITA ESTE PROYECTO
          </a>
        </div>
        <div className="contenedor-imagenes bg-yellow">
          <div className="nombre-proyecto">
            <p>{props.name}</p>
          </div>
          <img
            className="imagen-desktop"
            src={props.imagenDesktop}
            alt="imagen-proyecto-desktop"
          />
          <img
            className="imagen-mobile-der"
            src={props.imagenMobile}
            alt="imagen-proyecto-mobile"
          />
        </div>
      </div>
    </>
  );
};
