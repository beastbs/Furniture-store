import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "../Rating/Rating";
import "./ProductItem.scss";

const ProductItem = ({ id, title, imgUrl, price, onAddInCart, rating }) => {
  const { orders } = useSelector((state) => state.products);
  const itemInCart = orders.some((order) => order.id === id);

  const classes = ["product-item__add-to-cart"];
  if (itemInCart) {
    classes.push("added");
  }

  return (
    <div className="product-item">
      <Link to={`/${title}`}>
        <img
          className="product-item__img"
          src={"./img/" + imgUrl}
          alt={title}
        />
      </Link>
      <h2 className="product-item__title">{title}</h2>
      <Rating rating={rating} />
      <b className="product-item__price">{`${
        price ? price + `$` : `Цену уточняйте у продавца`
      }`}</b>
      <div onClick={onAddInCart} className={classes.join(" ")}>
        {itemInCart ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  );
};

export default ProductItem;
