import React, { useState, ChangeEvent } from "react";
import styled from "styled-components";
import { Label, Input } from "../styling/css";

type FormInputProps = {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  ref?: any;
  accept?: any;
  placeholder?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FormInput: (props: FormInputProps) => JSX.Element = (
  props: FormInputProps
) => {
  const { label, type, value, name, placeholder, onBlur, onChange, ref, accept} = props;
  // const [value, setValue] = useState<string>('')
  return (
    <div style={{ marginBottom: "0.4rem", width: "100%" }}>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        accept={accept}
        ref={ref}
        required
      />
    </div>
  );
};


export default FormInput;