import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";

export const ProductCard = ({ elemento }) => {
  return (
    <Card
      sx={{ maxWidth: 345, height: "550px" }}
      style={{ backgroundColor: "#3d3d3d", borderRadius: "15px",}}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent style={{height: "180px"}}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#c17767", fontWeight: "550" }}
          >
            {elemento.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            style={{ color: "#ffffff", height: "70px" }}
          >
            {elemento.description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: "#ffffff", fontSize: "20px", paddingTop: "1rem" }}
          >
            $ {elemento.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ paddingTop: "0.5rem" }}>
        <Button
          style={{ backgroundColor: "#c17767", fontWeight: "600"}}
          variant="contained"
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};
