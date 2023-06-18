import { useEffect, useState } from "react";
import ProductDetailPresentacional from "./ProductDetailPresentacional";
import "./productDetail.css";
import { productos } from "../../../productsMock";

export default function ProductDetailContainer() {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  let id = 2;

  useEffect(() => {
    let productoFind = productos.find((producto) => producto.id === id);

    const getProducto = new Promise((resolve) => {
      resolve(productoFind);
    });

    getProducto.then((res) => setProductoSeleccionado(res));
  }, [id]);
  console.log(productoSeleccionado)

  return <ProductDetailPresentacional productoSeleccionado={productoSeleccionado}/>;
}
