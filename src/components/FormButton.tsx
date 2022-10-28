import React from "react";
import { ButtonBody } from "../styling/css";
type ButtonProps = {
  text: string;
  onClick?:() => {};
  
};
const FormButton = (props: ButtonProps) => {
  const { text, onClick } = props;
  return <ButtonBody>{text}</ButtonBody>;
};

export default FormButton;

