import { useEffect, useState } from "react";
import { sanchezInstance } from "../../../api/axiosInstance";
import { FetchingDeDatosPresentacional } from "./FetchingDeDatosPresentacional";

export const FetchingDeDatosContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosData = sanchezInstance.get();

    productosData.then((respuesta) => {
      setProductos(respuesta.data);
    });
  }, []);

  useEffect(() => {
    const getProducto = sanchezInstance.get("/10");

    getProducto.then((res) => console.log(res.data));
  }, []);

  const crearProducto = () => {
    let data = {
      title: "Palitos",
      price: 1500,
      stock: 5,
      description: "Bañados en chocolate de leche",
      category: "dulce",
      img: "https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142071/Panader%C3%ADa%20S%C3%A1nchez/palitoschocolate_gepktt.jpg",
    };
    sanchezInstance.post("", data);
  };

  return <FetchingDeDatosPresentacional productos={productos} crearProducto={crearProducto}/>;
};
