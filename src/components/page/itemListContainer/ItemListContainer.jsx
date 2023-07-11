import { productos } from "../../../productsMock";
import "./ItemList.css";
import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";
import { useParams } from "react-router-dom";
import { SyncLoader} from "react-spinners";


export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();

  useEffect(() => {
    let filtro = productos.filter((producto) => producto.category === tipo);

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(tipo ? filtro : productos);
      }, 500);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => {
        console.log("catch:", error);
      });
  }, [tipo]);

  // if (items.length === 0) {
  //   return <h1>Cargando...</h1>;
  // }

  return (
    <div>
      {items.length > 0 ? (
        <ItemListPresentacional items={items} />
      ) : (
        <SyncLoader style={{paddingBlock: "21rem", display: "flex", justifyContent: "center"}} size="40px" color="#c17767" />
      )}
    </div>
  );
};
