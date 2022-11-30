import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { fetchProducts } from "../../redux/actions";
import { fetchCategories } from "../../redux/actions";

import ProductCart from "../ProductCart/ProductCart";
import { FaShoppingCart } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchProducts(request));
    dispatch(fetchCategories(request));
  }, [request, dispatch]);

  const classCart = ["header__shop-cart-btn"];
  if (openCart) {
    classCart.push("active");
  }

  return (
    <header className="header">
      <div>
        <span className="header__logo">House staff</span>
        <ul className="header__nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          size={25}
          className={classCart.join(" ")}
          onClick={() => setOpenCart((prev) => !prev)}
        />
        {openCart && <ProductCart />}
      </div>
      <div className="header__presentation"></div>
    </header>
  );
};

export default Header;
