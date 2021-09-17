import React from "react";
import "./conoceme.css";

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
          <div className="descripcion">
            <div className="texto-descripcion">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores exercitationem ut quidem, sapiente illum possimus.
              </p>
            </div>
            <a id="contactame" className="link-contactame" href="#">
              Contáctame
            </a>
          </div>
        </div>
        <div className="section-imagen"></div>
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
