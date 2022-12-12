import { useSelector, useDispatch } from "react-redux";
import { addProductInCart } from "../../redux/reducers/productsSlice";

import ProductItem from "../ProductItem/ProductItem";
import Categories from "../Categories/Categories";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./ProductList.scss";

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
    <div className="product-list">
      <div className="product-list__wrapper">
        <Categories />
        <SearchPanel />
      </div>
      <main className="product-list__content">
        {content.length ? (
          content
        ) : (
          <span style={{ fontSize: "24px", margin: "0 auto" }}>
            Товар не найден
          </span>
        )}
      </main>
    </div>
  );
};

export default ProductList;
