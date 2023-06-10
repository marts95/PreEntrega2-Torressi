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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={elemento.img}
          alt={elemento.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" variant="contained">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};
