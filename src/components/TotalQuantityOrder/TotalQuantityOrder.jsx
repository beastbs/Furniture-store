import { useSelector } from "react-redux";
import "./TotalQuantityOrder.scss";

const TotalQuantityOrder = () => {
  const { orders } = useSelector((state) => state.products);
  return <b className="total-quantity">Всего: {orders.length} шт.</b>;
};

export default TotalQuantityOrder;
