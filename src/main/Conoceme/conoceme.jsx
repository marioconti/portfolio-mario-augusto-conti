import React from "react";
import "./conoceme.css";
import "./conoceme-queries.css";

export const Conoceme = () => {
  return (
    <>
      <div id="conoceme" className="section-conoceme">
        <div className="section-descripcion">
          <div className="encabezado">
            <img
              className="image-Mario-Conti"
              src="../../images/foto-mario-conti.jpeg"
              alt="Imagen Mario Conti"
            />
            <div className="titulo-seccion">
              <p>Todo comienza con una idea...</p>
            </div>
          </div>
          <div className="descripcion-conoceme">
            <div className="texto-descripcion">
              <p>
                Hola! Soy Mario, estudiante de
                <span className="bold"> Desarrollo Web Frontend.</span>{" "}
                Actualmente me encuentro realizando prácticas en
                <span className="bold"> React</span>. <br /> Aspiro a ser parte
                de grandes proyectos que generen{" "}
                <span className="bold"> experiencias inolvidables</span> <br />
                Si buscas alguien{" "}
                <span className="bold">organizado, detallista</span>, con
                <span className="bold"> actitud</span> y muchas ganas de{" "}
                <span className="bold">crecer en equipo</span> no dudes en
                contactarme!
              </p>
            </div>
            <a id="conoceme" className="link-contactame" href="../#contacto">
              Contáctame
            </a>
          </div>
        </div>
        <div className="section-imagen">
          <img
            className="img-dev"
            src="../../images/developer-working.png"
            alt="imagen developer"
          />
        </div>
      </div>
    </>
  );
};

// {
// //   /*
// }
// <div className="imagen-personal"></div>
// <div className="info">
//   <p className="texto-presentacion">
//     Soy Mario, estudiante de
//     <span className="bold"> Desarrollo Web Frontend.</span>
//     <br />
//     Actualmente me encuentro realizando prácticas en
//     <span className="bold"> React</span>. <br />
//     Aspiro a ser parte de grandes proyectos que generen{" "}
//     <span className="bold"> experiencias inolvidables</span>.
//   </p>

<a id="contactame" className="link-contactame" href="#">
  Contáctame
</a>;
// </div>
