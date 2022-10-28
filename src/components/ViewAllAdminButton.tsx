import React, { MouseEventHandler } from "react";
import { ViewAllAdminButton } from "../styling/css";

type ButtonProps = {
  text: string;
  handleClick: MouseEventHandler<HTMLButtonElement>
};
const ViewAdminButton = (props: ButtonProps) => {
  const { text } = props;
  return <ViewAllAdminButton onClick={props.handleClick}>{text}</ViewAllAdminButton>;
};
export default ViewAdminButton;