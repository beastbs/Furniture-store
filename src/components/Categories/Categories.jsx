import { useSelector, useDispatch } from "react-redux";
import { chooseCategories } from "../../redux/actions";

import "./Categories.scss";

const Categories = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  const { products } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const onChooseCategories = (category) => {
    if (category === "all") {
      dispatch(chooseCategories(products));
      return;
    }

    const newCategoriesList = products.filter(
      (item) => category === item.category
    );
    dispatch(chooseCategories(newCategoriesList));
  };

  return (
    <div className="categories">
      {categories.map(({ key, name }) => (
        <div
          key={key}
          className="categories__item"
          onClick={() => onChooseCategories(key)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
