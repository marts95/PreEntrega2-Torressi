import { Footer } from "./components/layout/Footer.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { ItemListContainer } from "./components/page/itemListContainer/ItemListContainer.jsx";
import { ProductDetailContainer } from "./components/page/productDetail/ProductDetailContainer.jsx";
import { Comments } from "./components/page/Comments";
import { Posts } from "./components/page/Posts";
import { Users } from "./components/page/Users";

function App() {
  return (
    <>
      <Navbar>
        <ItemListContainer />
        <ProductDetailContainer />
        <Users />
        <Comments />
        <Posts />
      </Navbar>
      <Footer />
    </>
  );
}

export default App;
