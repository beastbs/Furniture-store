import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { addProductInCart } from "../../redux/actions";

import "./ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);
  const { currentProducts } = useSelector((state) => state.productsReducer);
  const { orders } = useSelector((state) => state.productsReducer);

  const onAddInCart = (id) => {
    let isInCart = false;
    orders.forEach((order) => {
      if (order.id === id) {
        isInCart = true;
      }
    });

    if (!isInCart) {
      const order = products.find((product) => product.id === id);
      dispatch(addProductInCart(order));
    }
  };

  const content = currentProducts.map(({ id, ...other }) => (
    <ProductItem onAddInCart={() => onAddInCart(id)} key={id} {...other} />
  ));
  return <main className="product-list">{content}</main>;
};

export default ProductList;
