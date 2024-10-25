import React from "react";
import Loader from "./Loader";

function Button({
  text,
  type = "submit",
  isPending,
  onButton,
  nameOfClass = "",
}) {
  return (
    <button type={type} className={`button ${nameOfClass}`} onClick={onButton}>
      {isPending ? <Loader /> : text}
    </button>
  );
}

export default Button;
