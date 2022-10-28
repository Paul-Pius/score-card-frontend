import React from "react";
import styled from "styled-components";
import { FormCardBody } from "../styling/css";
type FormCardProps = {
  children: any;

  className?: string;
  style?: any;

};
const FormCard = (props: FormCardProps) => {
  return <FormCardBody>{props.children}</FormCardBody>;
};

export default FormCard;
