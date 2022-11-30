import { FaTrash } from "react-icons/fa";

import "./ProductCartOrder.scss";

const ProductCartOrder = ({ title, price, imgUrl, onDeleteFromCart }) => {
  return (
    <div className="cart-order">
      <img className="cart-order__img" src={"./img/" + imgUrl} alt={title} />
      <h2 className="cart-order__title">{title}</h2>
      <b className="cart-order__price">{`${
        price ? price + `$` : `Цену уточняйте у продавца`
      }`}</b>
      <FaTrash className="cart-order__delete-icon" onClick={onDeleteFromCart} />
    </div>
  );
};

export default ProductCartOrder;
