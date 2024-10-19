import React from "react";

function InputLabel({ label, placeHolder, name, register, value = "" }) {
  return (
    <div className="input-label">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        placeholder={placeHolder}
        id={name}
        {...register(name, {
          onChange: (e) => e.target.value,
          value: value,
        })}
      />
    </div>
  );
}

export default InputLabel;
