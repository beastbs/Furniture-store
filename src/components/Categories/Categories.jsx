import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseCategories } from "../../redux/reducers/productsSlice";

import "./Categories.scss";

const Categories = () => {
  const [isActive, setIsActive] = useState("all");

  const { categories } = useSelector((state) => state.categories);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const onChooseCategories = (category) => {
    setIsActive(category);

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
          className={`categories__item ${isActive === key && "active"}`}
          onClick={() => onChooseCategories(key)}
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
