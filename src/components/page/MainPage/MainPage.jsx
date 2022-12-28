import { Link } from "react-router-dom";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page__products">
        <div className="main-page__wrapper">
          <Link to="products">Показать все товары</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
