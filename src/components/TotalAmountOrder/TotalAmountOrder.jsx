import { useSelector } from "react-redux";

import "./TotalAmountOrder.scss";

const TotalAmountOrder = ({ classes }) => {
  const { orders } = useSelector((state) => state.products);
  const totalAmount = orders.reduce((acc, order) => (acc += order.price), 0);

  return (
    <b className={classes}>
      Общая сумма: {new Intl.NumberFormat().format(totalAmount)}$
    </b>
  );
};

export default TotalAmountOrder;
