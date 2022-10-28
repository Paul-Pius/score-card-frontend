import React, { ChangeEventHandler } from "react";
import "./InputFields.css";

type InputFieldsProps = {
  value?: string;
  placeholder?: string;
  name?: string;
  id?: string;
  label?: string;
  type?: string;
  inputStyle?: string;
  inputSize?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: Function;
  
};

const InputFields = ({
  value,
  placeholder,
  id,
  label,
  type,
  name,
  inputStyle,
  inputSize,
  onChange,
}: InputFieldsProps) => {

  return (
    <>
      <div className="form-group">
        {label && <label className={"form--label"} htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={`form--control ${inputStyle} ${inputSize}`}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputFields;
