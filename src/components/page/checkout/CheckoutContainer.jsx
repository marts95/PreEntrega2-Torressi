import { Checkout } from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./checkout.css";
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const CheckoutContainer = () => {
  const { carrito, obtenerTotalCompra, vaciarCarrito } =
    useContext(CartContext);
  const [idOrden, setIdOrden] = useState(null);
  let total = obtenerTotalCompra();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      repetirEmail: "",
      telefono: "",
    },

    onSubmit: (datos) => {
      let orden = {
        buyer: datos,
        items: carrito,
        total: total,
      };

      let ordenesColeccion = collection(dataBase, "ordenes");

      addDoc(ordenesColeccion, orden).then((respuesta) =>
        setIdOrden(respuesta.id)
      );

      carrito.forEach((producto) => {
        updateDoc(doc(dataBase, "productos", producto.id), {
          stock: producto.stock - producto.quantity,
        });
      });

      vaciarCarrito();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este dato es obligatorio")
        .min(3, "El nombre debe tener como mínimo 3 caracteres"),
      apellido: Yup.string()
        .required("Este dato es obligatorio")
        .min(3, "El apellido debe tener como mínimo 3 caracteres"),
      email: Yup.string()
        .required("Este dato es obligatorio")
        .email("El email no es válido"),
      repetirEmail: Yup.string()
        .required("Este dato es obligatorio")
        .oneOf([Yup.ref("email")], "Los email no coinciden"),
      telefono: Yup.string()
        .min(10, "El formato de telefono es cod. de área + numero sin 15")
        .required("Este dato es obligatorio"),
    }),
  });
  return (
    <div className="checkout">
      {idOrden ? (
        <div className="compra-finalizada">
          <img
            style={{ height: "200px", width: "auto" }}
            src="https://res.cloudinary.com/dp8auiwtw/image/upload/v1689362159/Panader%C3%ADa%20S%C3%A1nchez/excited-fat_xodeby.gif"
          ></img>
          <h1>¡Su compra se realizó con éxito!</h1>
          <h2>Su número de orden es: {idOrden}</h2>
          <Link to="/productos">
            <Button
              style={{
                backgroundColor: "#c17767",
                color: "#ffffff",
                borderRadius: "8px",
                borderColor: "transparent",
                cursor: "grab",
                transition: "background-color 0.5s, color 0.5s",
              }}
            >
              Volver al catálogo
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="resumen">
            <h1>Resumen de carrito</h1>
            <h2>Productos:</h2>
            {carrito.map((producto) => {
              return (
                <div key={producto.id} className="tarjeta-resumen">
                  <img
                    style={{
                      height: "70px",
                      width: "70px",
                      borderRadius: "5px",
                    }}
                    src={producto.img}
                  ></img>
                  <h3>
                    {producto.title} - x{producto.quantity}
                  </h3>
                  <h3>$ {producto.price}</h3>
                </div>
              );
            })}
            <h2>El total del carrito es: $ {total}</h2>
          </div>
          <Checkout
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            errors={errors}
          />
        </>
      )}
    </div>
  );
};
