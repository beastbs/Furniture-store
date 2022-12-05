import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./ProductItem.scss";

const ProductItem = ({ title, imgUrl, price, onAddInCart }) => {
  return (
    <div className="product-item">
      <Link to={`/products/${title}`}>
        <img
          className="product-item__img"
          src={"./img/" + imgUrl}
          alt={title}
        />
      </Link>
      <h2 className="product-item__title">{title}</h2>
      <Rating />
      <b className="product-item__price">{`${
        price ? price + `$` : `Цену уточняйте у продавца`
      }`}</b>
      <div onClick={onAddInCart} className="product-item__add-to-cart">
        +
      </div>
    </div>
  );
};

export default ProductItem;
