import { useSelector, useDispatch } from "react-redux";
import TotalAmountOrder from "../../TotalAmountOrder/TotalAmountOrder";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { deleteProductFromCart } from "../../../redux/reducers/productsSlice";

import "./CartBlock.scss";

const CartBlock = () => {
  const { orders } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onDeleteFromCart = (id) => {
    dispatch(deleteProductFromCart(id));
  };

  const ordersList = orders.map((order) => {
    return (
      <div className="cart-block__item" key={order.id}>
        <img
          className="cart-block__img"
          src={"./img/" + order.imgUrl}
          alt={order.title}
        />
        <h3 className="cart-block__title">{order.title}</h3>
        <b className="cart-block__price">{order.price + "$"}</b>
        <RiDeleteBack2Fill
          size={35}
          className="cart-block__icon-delete"
          onClick={() => onDeleteFromCart(order.id)}
        />
      </div>
    );
  });

  return (
    <div className="cart-block">
      <h2 className="cart-block__name">Корзина</h2>
      {orders.length ? (
        ordersList
      ) : (
        <h3 className="cart-block__empty">Корзина пустая</h3>
      )}
      <div className="cart-block__devider"></div>
      {orders.length ? (
        <TotalAmountOrder classes={"cart-block__total-amount"} />
      ) : null}
    </div>
  );
};

export default CartBlock;
