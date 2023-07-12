import "./contacto.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Contacto } from "./Contacto";

export const ContactoContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje:"",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      console.log(datos);
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
    <Contacto
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};
