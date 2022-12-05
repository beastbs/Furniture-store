import { useSelector } from "react-redux";
import TotalQuantityOrder from "../TotalQuantityOrder/TotalQuantityOrder";

import "./TotalAmountOrder.scss";

const TotalAmountOrder = () => {
  const { orders } = useSelector((state) => state.products);
  const totalAmount = orders.reduce((acc, order) => (acc += order.price), 0);

  return (
    <div className="total-amount">
      <p>Общая сумма: {new Intl.NumberFormat().format(totalAmount)}$</p>
      <TotalQuantityOrder orders={orders} />
    </div>
  );
};

export default TotalAmountOrder;
