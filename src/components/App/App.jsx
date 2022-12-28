import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import { MainPage, Page404, OwnProductItem } from "../page";
import Footer from "../Footer/Footer";

import "./App.scss";
import ProductList from "../ProductList/ProductList";
import About from "../page/About/About";
import CartBlock from "../page/CartBlock/CartBlock";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Routes>
            {/* <Route path="/" element={<MainPage />} /> */}
            <Route path="/" element={<ProductList />} />
            <Route path="/:title" element={<OwnProductItem />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<CartBlock />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
