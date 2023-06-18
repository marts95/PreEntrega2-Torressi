import { useEffect, useState } from "react";
import { FetchingDeDatosPresentacional } from "./FetchingDeDatosPresentacional.jsx";

export const FetchingDeDatosContainer = () => {
  const [usuarios, setUsuarios] = useState([]);

  console.log(usuarios);

  useEffect(() => {
    const usuariosData = fetch("https://jsonplaceholder.typicode.com/users");

    usuariosData
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((info) => setUsuarios(info))
      .catch((error) => {
        console.log("este es el error:", error);
      });
  }, []);
  const crearUsuarios = () => {
    let info = {
      name: "Marianella",
      userName: "mt95",
      email: "mart95@gmail.com",
    };

    const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(info),
    });

    promise.then(res => res.json()).then((res) => console.log(res));
  };
  

  return (
    <FetchingDeDatosPresentacional
      usuarios={usuarios}
      crearUsuarios={crearUsuarios}
    />
  );
};
