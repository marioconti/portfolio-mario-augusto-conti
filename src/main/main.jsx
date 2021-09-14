import React from "react";
import "./main.css";
import { Conoceme } from "./Conoceme/conoceme";
import { Proyectos } from "./proyectos/proyectos";

export const Main = () => {
  return (
    <>
      <div className="container-sections">
        <Conoceme />
        <Proyectos />
      </div>
    </>
  );
};
