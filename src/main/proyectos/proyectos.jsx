import React from "react";
import "./proyectos.css";
import "./proyectos-queries.css";

export const Proyectos = () => {
  return (
    <>
      <div id="proyectos" className="section-proyectos">
        <div className="titulo-seccion-proyecto">
          <p>PROYECTOS</p>
        </div>
        <CardProyecto
          name={"Podcast Channel"}
          imagenDesktop={"../../images/podcastchanel-desktop.png"}
          imagenMobile={
            "../../images/podcast-mobile_pixel_quite_black_portrait.png"
          }
          descripcion={
            "Este mi primer proyecto: se trata del proyecto final del primer sprint del curso de desarrollo web front-end de Acamica. Landing page de un podcast channel de programación desarrollado unicamente con HTML y CSS, con vistas desktop y mobile."
          }
          link={"https://09xs4.csb.app/"}
          fondo={"bg-purple"}
          fondoDescripcion={"bg-grey"}
          estilosImagenMobile={"imagen-mobile-der"}
        />
        <CardProyecto
          name={"Reserva de hoteles"}
          imagenDesktop={"../../images/reserva-hoteles_dell-xps15-front.png"}
          imagenMobile={
            "../../images/reservahotel_iphone12prographite_portrait.png"
          }
          descripcion={`Este es el proyecto de una página web para realizar reservas de hoteles por medio de distintos filtros. Es el segundo proyecto 
      de Acamica/Digital House de Desarrollo Web Frontend. Fue creado mediante el uso de: React, JS, CSS y HTML.`}
          link={"https://hvlnp.csb.app/"}
          fondo={"bg-yellow"}
          fondoDescripcion={"bg-withe"}
          estilosImagenMobile={"imagen-mobile-izq"}
        />
      </div>
    </>
  );
};

const CardProyecto = (props) => {
  return (
    <>
      <div className={`contenedor-card ${props.fondo}`}>
        <div className="contenedor-imagenes ">
          <p className="nombre-proyecto">{props.name}</p>

          <img
            className="imagen-desktop"
            src={props.imagenDesktop}
            alt="imagen-proyecto-desktop"
          />
          <img
            className={`${props.estilosImagenMobile}`}
            src={props.imagenMobile}
            alt="imagen-proyecto-mobile"
          />
        </div>
        <div className={`contenedor-info ${props.fondoDescripcion} `}>
          <div className="descripcion">
            <p>{props.descripcion}</p>
          </div>
          <a className="link-proyecto-izq" href={props.link} target="_blank">
            VISITA ESTE PROYECTO
          </a>
        </div>
      </div>
    </>
  );
};
