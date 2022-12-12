import { Link, useNavigate } from "react-router-dom";

import "./Page404.scss";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div className="page404">
      <div className="page404__title">
        Ошибка <span>404</span>
      </div>
      <div className="page404__desc">Что-то пошло не так ;-(</div>
      <div className="page404__back">
        Что бы вернуться назад нажмите
        <span onClick={() => navigate(-1)}> здесь</span>
      </div>
      <div className="page404__main">
        Вернуться на главную страницу <Link to="/">здесь</Link>
      </div>
    </div>
  );
};

export default Page404;
