import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { fetchProducts } from "../../redux/actions";

import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchProducts(request));
  }, [request, dispatch]);

  return (
    <header className="header">
      <div>
        <span className="header__logo">House staff</span>
        <ul className="header__nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className="header__presentation"></div>
    </header>
  );
};

export default Header;
