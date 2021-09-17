import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div id="contactame" className="section-footer">
        <div className="info-contacto">
          <h2>Contáctame</h2>
          <p>
            <span>Ubicación:</span> San Miguel de Tucumán, Argentina
          </p>
          <p>
            <span>Numero de contacto:</span> +549 3816599099
          </p>
          <p>
            <span>Email:</span> marioconti91@gmail.com
          </p>
        </div>
        <div className="contenedor-svgs">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/mario-augusto-conti/"
          >
            {" "}
            <img
              className="svgFooter"
              src="../svgLinks/linkedin.png"
              alt="link linkedin"
            />
          </a>

          <a target="_blank" href="https://www.github.com/marioconti">
            <img
              className="svgFooter"
              src="../svgLinks/github.png"
              alt="link githuba"
            />
          </a>

          <a target="_blank" href="https://www.facebook.com/mario.conti.520/">
            {" "}
            <img
              className="svgFooter bg-withe-svg"
              src="../svgLinks/facebook.png"
              alt="link facebook"
            />
          </a>

          <a
            target="_blank"
            href="https://www.instagram.com/mario.conti/?hl=es"
          >
            {" "}
            <img
              className="svgFooter instagram bg-withe-svg"
              src="../svgLinks/instagram.png"
              alt="link instagram"
            />
          </a>
        </div>
      </div>
    </>
  );
};
