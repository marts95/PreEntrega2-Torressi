import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail.jsx";
import "./itemDetail.css";
import { productos } from "../../../productsMock.js";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";

export const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const {agregarAlCarrito, obtenerCantidadPorId} = useContext(CartContext)

  const { id } = useParams();

  const cantidad = obtenerCantidadPorId(+id)


  useEffect(() => {
    let productoFind = productos.find((producto) => producto.id === Number(id));

    const getProducto = new Promise((resolve) => {
      resolve(productoFind);
    });

    getProducto
      .then((res) => setProductoSeleccionado(res))
      .catch((error) => console.log(error));
  }, [id]);

  return <ItemDetail productoSeleccionado={productoSeleccionado} agregarAlCarrito={agregarAlCarrito} cantidad={cantidad}/>;
};
