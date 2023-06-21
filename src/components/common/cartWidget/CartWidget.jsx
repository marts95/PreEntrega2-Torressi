import { Badge } from "@mui/material";
import { BsCart4 } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div>
      <Badge color="secondary" badgeContent={0} max={9} showZero>
        <BsCart4 style={{ color: "#ffffff" }} size="35px" />
      </Badge>
    </div>
  );
}
