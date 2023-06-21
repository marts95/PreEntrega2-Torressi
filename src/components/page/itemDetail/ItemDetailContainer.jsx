import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail.jsx";
import "./itemDetail.css";
import { productos } from "../../../productsMock.js";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let productoFind = productos.find((producto) => producto.id === Number(id));

    const getProducto = new Promise((resolve) => {
      resolve(productoFind);
    });

    getProducto
      .then((res) => setProductoSeleccionado(res))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(productoSeleccionado);

  return <ItemDetail productoSeleccionado={productoSeleccionado} />;
};
