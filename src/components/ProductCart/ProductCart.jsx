import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromCart } from "../../redux/actions";

import ProductCartOrder from "../ProductCartOrder/ProductCartOrder";
import TotalAmountOrder from "../TotalAmountOrder/TotalAmountOrder";

import "./ProductCart.scss";

const ProductCart = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.productsReducer);

  const onDeleteFromCart = (id) => {
    const newCartList = orders.filter((order) => order.id !== id);
    dispatch(deleteProductFromCart(newCartList));
  };

  const showOrders = () => {
    const cartOrders = orders.map(({ id, ...other }) => (
      <ProductCartOrder
        onDeleteFromCart={() => onDeleteFromCart(id)}
        key={id}
        {...other}
      />
    ));

    return (
      <div>
        {cartOrders}
        <hr style={{ border: "0.5px solid #ccc", backgroundColor: "#ccc" }} />
        <TotalAmountOrder />
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

export default ProductCart;
