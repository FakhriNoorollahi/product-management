import React from "react";
import Loader from "./Loader";

function Button({ text, onOpen, type = "submit", isPending }) {
  return (
    <button type={type} className="button" onClick={onOpen}>
      {isPending ? <Loader /> : text}
    </button>
  );
}

export default Button;
