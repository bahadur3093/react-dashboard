import React from "react";
import "./Button.scss";

const Button = (props) => {
  return (
    <button className={props.class}>
      <div className="icon mr-2">{props.icon}</div>
      {props.children}
    </button>
  );
};

export default Button;
