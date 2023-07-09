import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (nuevoProducto) => {
    let existe = contenidoCarrito(nuevoProducto.id);
    if (existe) {
      let agregar = carrito.map((producto) => {
        if (producto.id === nuevoProducto.id) {
          return {
            ...producto,
            quantity: producto.quantity + nuevoProducto.quantity,
          };
        } else {
          return producto;
        }
      });
      setCarrito(agregar);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
  };

  const contenidoCarrito = (id) => {
    let existe = carrito.some((producto) => producto.id === id);
    return existe;
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const eliminarPorId = (id) => {
    let eliminar = carrito.filter((producto) => producto.id !== id);
    setCarrito(eliminar);
  };

  const obtenerCantidadPorId = (id) => {
    let producto = carrito.find((prod) => prod.id === id);
    return producto?.quantity
  };

  let data = {
    carrito,
    agregarAlCarrito,
    vaciarCarrito,
    eliminarPorId,
    obtenerCantidadPorId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
