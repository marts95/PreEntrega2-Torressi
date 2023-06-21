import { productos } from "../../../productsMock";
import "./ItemList.css";
import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {tipo} = useParams()

  useEffect(() => {

    let filtro = productos.filter(producto => producto.category === tipo)

    const tarea = new Promise((resolve) => {
      resolve(tipo ? filtro :productos);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => {
        console.log("catch:", error);
      });
  }, [tipo]);

  return <ItemListPresentacional items={items} />;
};
