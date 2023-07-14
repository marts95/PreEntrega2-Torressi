import { CartContainer } from "../components/page/cart/CartContainer";
import { CheckoutContainer } from "../components/page/checkout/CheckoutContainer";
import { ContactoContainer } from "../components/page/contacto/ContactoContainer";
import { Inicio } from "../components/page/inicio/Inicio";
import { ItemDetailContainer } from "../components/page/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/page/itemListContainer/ItemListContainer";

export const menuRoutes = [
  {
    id: "inicio",
    path: "/",
    Element: Inicio,
  },
  {
    id: "productos",
    path: "/productos",
    Element: ItemListContainer,
  },
  {
    id: "contacto",
    path: "/contacto",
    Element: ContactoContainer,
  },
  {
    id: "detalle",
    path: "/item/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "categorias",
    path: "/category/:tipo",
    Element: ItemListContainer,
  },
  {
    id: "carrito",
    path: "/carrito",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
