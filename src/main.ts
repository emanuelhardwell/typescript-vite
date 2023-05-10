import {
  nombre,
  apellido,
  trabajando,
  vacacion,
  edad,
  cantidad,
} from "./bases/01-types";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1> Hello vite </h1>
    <p> ${nombre} ${apellido} </p>
    <p> Esta trabajando: ${trabajando} </p>
    <p> Esta de vacaciones: ${vacacion} </p>
    <p> Edad actual: ${edad} </p>
    <p> Cantidad a pagar: $${cantidad} </p>
  </div>
`;
