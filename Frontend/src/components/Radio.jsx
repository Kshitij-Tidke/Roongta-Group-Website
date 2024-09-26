import React from "react";

const Radio = ({ id, name, value, label, checked, onChange }) => {
  return (
    <div className="radio-group">
      <input
        id={id}
        className="radio-custom"
        name={name}
        type="radio"
        value={value}
        checked={checked} // Control the checked state
        onChange={onChange} // Trigger the change event
      />
      <label htmlFor={id} className={`radio-custom-label ml-1`}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
