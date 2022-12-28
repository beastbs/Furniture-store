import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";

import { fetchProducts } from "../../redux/reducers/productsSlice";
import { fetchCategories } from "../../redux/reducers/categoriesSlice";

import { Link } from "react-router-dom";

import CartMenu from "../CartMenu/CartMenu";
import { FaShoppingCart } from "react-icons/fa";

import "./Header.scss";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchProducts(request));
    dispatch(fetchCategories());
  }, [request, dispatch]);

  const classCart = ["header__shop-cart-btn"];
  if (openCart) {
    classCart.push("active");
  }

  const onOpenOrCloseCart = () => {
    setOpenCart((prev) => !prev);
  };

  return (
    <header className="header">
      <div>
        <Link to="/">
          <span className="header__logo">House staff</span>
        </Link>
        <ul className="header__nav">
          <Link to="/about">
            <span>О нас</span>
          </Link>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          size={25}
          className={classCart.join(" ")}
          onClick={() => onOpenOrCloseCart()}
        />
        {openCart && <CartMenu onOpenOrCloseCart={onOpenOrCloseCart} />}
      </div>
      <div className="header__presentation"></div>
    </header>
  );
};

export default Header;
