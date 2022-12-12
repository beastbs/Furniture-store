import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filteredProducts } from "../../redux/reducers/productsSlice";

import useInput from "../../hooks/useInput";
import { FaSearch } from "react-icons/fa";
import "./SearchPanel.scss";

const SearchPanel = () => {
  const { value, onChange } = useInput("");
  const focusRef = useRef(null);

  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  const handleFiltered = (e) => {
    onChange(e);

    const filtered = products.filter((product) => {
      return product.title.toLowerCase().includes(e.target.value.toLowerCase());
    });

    dispatch(filteredProducts(filtered));
  };

  return (
    <form className="search">
      <input
        // {...value}
        // {...onChange}
        value={value}
        onChange={handleFiltered}
        className="search__input"
        type="text"
        placeholder="Поиск"
        ref={focusRef}
        // autoFocus
      />
      <FaSearch size={20} className="search__icon" />
    </form>
  );
};

export default SearchPanel;
