import React from "react";
import "./FormLabel.css";

function FormLabel({
  value,
  setValue,
  span,
  placeholder,
  classError,
  errorMessage,
  type,
}) {
  return (
    <label className="label">
      <span className="label__input-name">{span}</span>
      <input
        type={type}
        className={`label__input ${classError}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="label__error-message">{errorMessage}</span>
    </label>
  );
}

export default FormLabel;
