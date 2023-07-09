import { Form } from "../components/page/Form/Form"
import { CartContainer } from "../components/page/cart/CartContainer"
import { FormFormik } from "../components/page/formFormik/FormFormik";
import { ItemDetailContainer } from "../components/page/itemDetail/ItemDetailContainer"
import { ItemListContainer } from "../components/page/itemListContainer/ItemListContainer"


 export const menuRoutes = [
   {
     id: "inicio",
     path: "/",
     Element: ItemListContainer,
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
     id: "formulario",
     path: "/form",
     Element: Form,
   },
   {
     id: "formik",
     path: "/formik",
     Element: FormFormik,
   },
 ];