import "./FormFormik.css";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = () => {
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
      telefono: Yup.number()
        .required("Este dato es obligatorio")
        .min(10, "El formato de telefono es cod. de área + numero sin 15"),
    }),
  });

  return (
    <div style={{ padding: "10rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="outlined"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <span>{errors.nombre}</span>
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};
