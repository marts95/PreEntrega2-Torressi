//import { productos } from "../../../productsMock";
import "./ItemListContainer.css"
import { useState, useEffect } from "react";

export const ItemListContainer = () => {
  
const [contador, setContador] = useState(0)

console.log("El componente se actualiza")

useEffect( () => {
  console.log("Se hace la petición a la API")
}, [])

return (
  <>
  <h1>Acá van los productos</h1>
  <button onClick={()=> setContador(contador + 1)}>Sumar</button>
  </>
)
};
