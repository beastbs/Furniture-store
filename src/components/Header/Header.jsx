import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";

import { fetchProducts } from "../../redux/actions";
import { fetchCategories } from "../../redux/actions";

import { Link } from "react-router-dom";

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
        <Link to="/">
          <span className="header__logo">House staff</span>
        </Link>
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
