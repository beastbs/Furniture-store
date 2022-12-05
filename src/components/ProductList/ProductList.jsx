import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import { addProductInCart } from "../../redux/reducers/productsSlice";

import "./ProductList.scss";
import Categories from "../Categories/Categories";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, currentProducts, orders } = useSelector(
    (state) => state.products
  );

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
  return (
    <div>
      <Categories />
      <main className="product-list">{content}</main>
    </div>
  );
};

export default ProductList;
