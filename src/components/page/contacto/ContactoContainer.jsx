import "./contacto.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Contacto } from "./Contacto";
import { addDoc, collection } from "firebase/firestore";
import { dataBase } from "../../../firebaseConfig";
import { useState } from "react";

export const ContactoContainer = () => {
  const [idContacto, setIdContacto] = useState(null);
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje:"",
    },
    onSubmit: (datos) => {
      let contacto = {
        cliente: datos,
      };

      let contactoColeccion = collection(dataBase, "contacto");

      addDoc(contactoColeccion, contacto).then((respuesta) =>
        setIdContacto(respuesta.id)
      );
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este dato obligatorio")
        .min(3, "El nombre debe tener como mínimo 3 caracteres"),
      apellido: Yup.string()
        .required("Este dato es obligatorio")
        .min(3, "El apellido debe tener como mínimo 3 caracteres"),
      email: Yup.string()
        .required("Este dato es obligatorio")
        .email("El email no es válido"),
      telefono: Yup.number()
        .required("Este dato es obligatorio")
        .min(10, "El formato de telefono es cod. de área + numero sin 15"),
      mensaje: Yup.string()
        .required("Este dato es obligatorio")
        .min(50, "El mensaje debe tener como mínimo 50 caracteres")
        .max(500, "El mensaje debe tener como máximo 500 caracteres"),
    }),
  });

  return (
    <div>
      {idContacto ? (
        <div>
          <h1>¡Tu mensaje fue enviado!</h1>
          <h2>Nos contactaremos a la brevedad</h2>
        </div>
      ) : (
        <Contacto
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};
