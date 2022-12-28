import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  deleteProductFromCart,
} from "../../redux/reducers/productsSlice";
import Button from "../Button/Button";

import CartItem from "../CartItem/CartItem";
import TotalAmountOrder from "../TotalAmountOrder/TotalAmountOrder";
import TotalQuantityOrder from "../TotalQuantityOrder/TotalQuantityOrder";

import "./CartMenu.scss";

const CartManu = ({ onOpenOrCloseCart }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.products);

  const onClearCart = () => {
    dispatch(clearCart([]));
  };

  const onDeleteFromCart = (id) => {
    dispatch(deleteProductFromCart(id));
  };

  const showOrders = () => {
    const cartOrders = orders.map(({ id, ...other }) => (
      <CartItem
        onDeleteFromCart={() => onDeleteFromCart(id)}
        key={id}
        {...other}
      />
    ));

    return (
      <div>
        {cartOrders}
        <hr style={{ border: "0.5px solid #ccc", backgroundColor: "#ccc" }} />
        <div className="product-cart__total">
          <TotalAmountOrder classes={"total-amount"} />
          <TotalQuantityOrder />
        </div>
        <div className="product-cart-btns__wrapper">
          <Link to="cart">
            <Button type="primary" size="medium" onClick={onOpenOrCloseCart}>
              Перейти в корзину
            </Button>
          </Link>
          <Button type="danger" size="medium" onClick={() => onClearCart()}>
            Очистить корзину
          </Button>
        </div>
      </div>
    );
  };

  const showNothing = "Карзина пустая!";

  return (
    <div className="product-cart">
      {orders.length > 0 ? (
        showOrders()
      ) : (
        <h3 className="product-cart__empty">{showNothing}</h3>
      )}
    </div>
  );
};

export default CartManu;
