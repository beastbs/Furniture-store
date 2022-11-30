import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./App.scss";
import ProductList from "../ProductList/ProductList";
import Categories from "../Categories/Categories";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <Header />
        <Categories />
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
