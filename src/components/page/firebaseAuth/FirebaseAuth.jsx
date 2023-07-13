import { useNavigate } from "react-router-dom";
import {
  login,
  loginGoogle,
  registro,
} from "../../../firebaseConfig";

export const FirebaseAuth = () => {
  const navigate = useNavigate();
  let infoInput = {
    email: "mar.torressi.sanchez@gmail.com",
    contraseña: "123456789",
  }; //Esta informacion la saco de un formulario formik luego

  const handleSubmit = async () => {
    let respuesta = await login(infoInput);
    console.log(respuesta);
    navigate("/");
  };

  let infoResgistro = {
    email: "mar.torressi.sanchez@gmail.com",
    contraseña: "123456789",
  };

  const registroEmail = async () => {
    let respuesta = await registro(infoResgistro);
    console.log(respuesta);
  };

  const handleSubmitGoogle = async () => {
    let respuesta = await loginGoogle()
    console.log(respuesta);
  };
  return (
    <div>
      <h1>Estoy en el login</h1>
      <button onClick={handleSubmit}>Ingresar</button>
      <h4>¿Aun no tienes cuenta?</h4>
      <button onClick={registroEmail}>Registrarse</button>
      <h4>Ingresar con Google</h4>
      <button onClick={handleSubmitGoogle}>Google</button>
    </div>
  );
};
