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
import { Link } from "react-router-dom";

export const ProductCard = ({ elemento }) => {
  return (
    <Card
      sx={{ maxWidth: 250, height: "450px" }}
      style={{ backgroundColor: "#3d3d3d", borderRadius: "15px" }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent style={{ height: "180px" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={{
              color: "#c17767",
              fontWeight: "550",
              display: "flex",
              justifyContent: "center",
              paddingBlock: "0.2rem"
            }}
          >
            {elemento.title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "#ffffff",
              height: "70px",
              display: "flex",
              textAlign: "center",
            }}
          >
            {elemento.description}
          </Typography>
          <Typography
            variant="body2"
            style={{
              color: "#ffffff",
              fontSize: "20px",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            $ {elemento.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        style={{
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to={`/item/${elemento.id}`}>
          <Button
            style={{ backgroundColor: "#c17767", fontWeight: "600" }}
            variant="contained"
          >
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
