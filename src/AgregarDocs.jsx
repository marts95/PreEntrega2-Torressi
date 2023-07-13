import { addDoc, collection } from "@firebase/firestore";
import { productos } from "./productsMock";
import { dataBase } from "./firebaseConfig";

export const AgregarDocs = () => {
  const rellenar = () => {
    let itemsCollections = collection(dataBase, "productos1");

    productos.forEach((elemento) => {
      addDoc(itemsCollections, elemento);
    });
  };

  return (
    <div>
      <button onClick={rellenar}>Rellenar mi coleccion de productos</button>
    </div>
  );
};
