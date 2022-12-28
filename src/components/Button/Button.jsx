import classNames from "classnames";

import "./Button.scss";

const Button = (props) => {

  const btnClass = classNames({
    btn: true,
    "btn--primary": props.type === "primary",
    "btn--success": props.type === "success",
    "btn--warning": props.type === "warning",
    "btn--danger": props.type === "danger",
    "btn--small": props.size === "small",
    "btn--medium": props.size === "medium",
  });
  return (
    <button className={btnClass} tabIndex={1} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
