import { useEffect, useState } from "react";
import { ProductDetail } from "./ProductDetail.jsx";
import "./productDetail.css";
import { productos } from "../../../productsMock";

export const ProductDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  let id = 9;

  useEffect(() => {
    let productoFind = productos.find((producto) => producto.id === id);

    const getProducto = new Promise((resolve) => {
      resolve(productoFind);
    });

    getProducto
      .then((res) => setProductoSeleccionado(res))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(productoSeleccionado);

  return <ProductDetail productoSeleccionado={productoSeleccionado} />;
};
