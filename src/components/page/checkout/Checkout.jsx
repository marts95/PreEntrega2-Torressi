import { Button, TextField } from "@mui/material";
import "./checkout.css"

export const Checkout = ({handleSubmit, handleChange, errors}) => {
  return (
    <div style={{ padding: "6rem" }}>
      <form className="formulario" onSubmit={handleSubmit}>
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
          label="Repetir email"
          variant="filled"
          name="repetirEmail"
          onChange={handleChange}
          error={errors.repetirEmail ? true : false}
          helperText={errors.repetirEmail}
        />
        <TextField
          label="Telefono"
          variant="filled"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
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
          Comprar
        </Button>
      </form>
    </div>
  );
};
