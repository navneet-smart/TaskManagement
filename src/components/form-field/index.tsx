import React from "react";
interface ItemProps {
  label: string;
  name: string;
  value: string;
  is_error: boolean;
  error_message: string;
  type: "text" | "password" | "number";
  onChange?: any;
  onBlur?: any;
}
const Field: React.FC<ItemProps> = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error_message,
  is_error,
  type
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {is_error && <div className="error">{error_message}</div>}
    </div>
  );
};

export default Field;
