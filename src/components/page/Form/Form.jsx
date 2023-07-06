import { useState } from "react";

export const Form = () => {
  const [dataUsuario, setDataUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    
    if (!dataUsuario.email.includes("@")) {
      console.log("El email ingresado no es válido");
      return
    }

    if (dataUsuario.nombre.length < 3) {
      console.log("El nombre no puede contener menos de 3 caracteres");
      return
    }

    
    let data = {
      nombreUsuario: dataUsuario.nombre,
      apellidoUsuario: dataUsuario.apellido,
      emailUusario: dataUsuario.email,
    };
    console.log(data);
  };

  const handleChange = (evento) => {
    setDataUsuario({
      ...dataUsuario,
      [evento.target.name]: evento.target.value,
    });
  };

  return (
    <div>
      <h2> Este es el formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          name="nombre"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Ingrese su apellido"
          name="apellido"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        ></input>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
