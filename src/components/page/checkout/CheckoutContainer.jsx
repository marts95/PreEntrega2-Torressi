import { Checkout } from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./checkout.css";
import { dataBase } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

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
      telefono: Yup.string()
        .min(10, "El formato de telefono es cod. de área + numero sin 15")
        .required("Este dato es obligatorio"),
    }),
  });
  return (
    <div>
      {idOrden ? (
        <div>
          <h1>¡Su compra se realizó con éxito!</h1>
          <h2>Su número de orden es: {idOrden}</h2>
        </div>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
