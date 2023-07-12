import { useContext, useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail.jsx";
import "./itemDetail.css";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext.jsx";
import { SyncLoader } from "react-spinners";
import Swal from "sweetalert2";
import { dataBase } from "../../../firebaseConfig.js";
import { collection, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState({});

  const { agregarAlCarrito, obtenerCantidadPorId } = useContext(CartContext);

  const { id } = useParams();

  const cantidad = obtenerCantidadPorId(+id);

  const onAdd = (cantidad) => {
    let info = {
      ...productoSeleccionado,
      quantity: cantidad,
    };
    agregarAlCarrito(info);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Producto agregado!",
      showConfirmButton: true,
      timer: 1000,
    });
  };

  useEffect(() => {
    let itemsColeccion = collection(dataBase, "productos");
    let refDoc = doc(itemsColeccion, id);
    getDoc(refDoc).then((respuesta) => {
      setProductoSeleccionado({ id: respuesta.id, ...respuesta.data() });
    });
  }, [id]);

  return (
    <div>
      {productoSeleccionado.price ? (
        <ItemDetail
          productoSeleccionado={productoSeleccionado}
          cantidad={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <SyncLoader
          style={{
            paddingBlock: "21rem",
            display: "flex",
            justifyContent: "center",
          }}
          size="40px"
          color="#c17767"
        />
      )}
    </div>
  );
};
