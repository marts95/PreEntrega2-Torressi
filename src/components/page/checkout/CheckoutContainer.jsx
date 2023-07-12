import { Checkout } from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./checkout.css";

export const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
    },
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      console.log(datos);
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
      telefono: Yup.number("Este campo solo admite números")
        .min(10, "El formato de telefono es cod. de área + numero sin 15")
        .required("Este dato es obligatorio"),
    }),
  });
  return (
    <Checkout
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      errors={errors}
    />
  );
};
