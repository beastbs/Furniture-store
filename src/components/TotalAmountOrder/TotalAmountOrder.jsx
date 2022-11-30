import { useCallback } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import "./TotalAmountOrder.scss";

const TotalAmountOrder = () => {
  const { orders } = useSelector((state) => state.productsReducer);
  const totalAmount = orders.reduce((acc, order) => (acc += order.price), 0);

  // const totalAmount = createSelector(
  //   (state) => state.productsReducer.orders,
  //   (orders) => orders.reduce((acc, order) => (acc += order.price), 0)
  // );

  // const res = useSelector(totalAmount);

  return (
    <div className="total-amount">
      <p>Общая сумма: {new Intl.NumberFormat().format(totalAmount)}$</p>
      <p>Всего: {orders.length} шт.</p>
      {console.log("Show order")}
    </div>
  );
};

export default TotalAmountOrder;
