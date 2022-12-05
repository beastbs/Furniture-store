import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import { MainPage, Page404, OwnProductItem } from "../page";
import Footer from "../Footer/Footer";

import "./App.scss";
import ProductList from "../ProductList/ProductList";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="products" element={<ProductList />} />
            <Route path="products/:title" element={<OwnProductItem />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
