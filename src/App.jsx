import { Layout } from "./components/layout/Layout.jsx";
import { NotFound } from "./components/page/404NotFound/NotFound.jsx";
import { CartContainer } from "./components/page/cart/CartContainer.jsx";
import { ItemListContainer } from "./components/page/itemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/page/itemDetail/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:tipo" element={<ItemListContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
