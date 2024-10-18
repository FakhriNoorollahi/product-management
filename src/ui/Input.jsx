import React from "react";

function Input({ register, name, type, placeholder }) {
  return (
    <input
      {...register(name, { required: "Please enter your first name." })}
      type={type}
      placeholder={placeholder}
      className="input"
    />
  );
}

export default Input;
