import React from "react";

function Button({ text, onOpen }) {
  return (
    <button className="button" onClick={onOpen}>
      {text}
    </button>
  );
}

export default Button;
