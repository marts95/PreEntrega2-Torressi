import { Badge } from "@mui/material";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {

  const { obtenerTotalItems } = useContext(CartContext);

  let itemsTotal = obtenerTotalItems()
  return (
    <div>
      <Badge
        color="secondary"
        badgeContent={itemsTotal}
        max={9}
        showZero
      >
        <BsCart4 style={{ color: "#ffffff" }} size="35px" />
      </Badge>
    </div>
  );
}
