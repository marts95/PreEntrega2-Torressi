import { productos } from "../../../productsMock";
import "./ItemList.css";
import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 0);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => {
        console.log("catch:", error);
      });
  }, []);

  return <ItemListPresentacional items={items} />;
};
