import { Button, TextField } from "@mui/material";

export const Contacto = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className="contacto">
      <img
        src={
          "https://res.cloudinary.com/dp8auiwtw/image/upload/v1686142072/Panader%C3%ADa%20S%C3%A1nchez/tortas_rqv2aj.jpg"
        }
        style={{
          width: "100vh",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
        }}
      ></img>
      <form className="formulario" onSubmit={handleSubmit}>
        <h1 style={{textAlign: "center", paddingBottom: "2rem"}}>¡Si tienes alguna duda no dudes en contactarte con nosotros!</h1>
        <TextField
          label="Nombre"
          variant="filled"
          name="nombre"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Apellido"
          variant="filled"
          name="apellido"
          onChange={handleChange}
          error={errors.apellido ? true : false}
          helperText={errors.apellido}
        />
        <TextField
          label="Email"
          variant="filled"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Telefono"
          variant="filled"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <TextField
          label="Mensaje"
          variant="filled"
          name="mensaje"
          multiline
          onChange={handleChange}
          error={errors.mensaje ? true : false}
          helperText={errors.mensaje}
        />
        <Button
          style={{
            backgroundColor: "#c17767",
            color: "#ffffff",
            borderRadius: "8px",
            borderColor: "transparent",
            cursor: "grab",
            transition: "background-color 0.5s, color 0.5s",
          }}
          type="submit"
          variant="contained"
        >
          Enviar
        </Button>
      </form>
    </div>
  );
};
