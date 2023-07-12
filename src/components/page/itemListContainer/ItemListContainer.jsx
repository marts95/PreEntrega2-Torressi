import { dataBase } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./ItemList.css";
import { useEffect, useState } from "react";
import { ItemListPresentacional } from "./ItemListPresentacional";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { ItemCategory } from "./ItemCategory";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { tipo } = useParams();

  useEffect(() => {
    let itemsColeccion = collection(dataBase, "productos");
    let consulta;

    if (!tipo) {
      consulta = itemsColeccion;
    } else {
      consulta = query(itemsColeccion, where("category", "==", tipo));
    }
    getDocs(consulta)
      .then((respuesta) => {
        let producto = respuesta.docs.map((elemento) => {
          return {
            id: elemento.id,
            ...elemento.data(),
          };
        });
        setItems(producto);
      })
      .catch((error) => console.log(error));
  }, [tipo]);

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <ItemCategory/>
          <ItemListPresentacional items={items} />
        </div>
      ) : (
        <SyncLoader
          style={{
            paddingBlock: "21rem",
            display: "flex",
            justifyContent: "center",
          }}
          size="40px"
          color="#c17767"
        />
      )}
    </div>
  );
};
