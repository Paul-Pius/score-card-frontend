import React, { MouseEventHandler } from "react";
import "./Button.css";

type ButtonProps = {
  children?: React.ReactNode,
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined,
  buttonStyle?: string,
  buttonSize?: string,
  buttonType?: string,
  buttonText?: string,
};

const STYLES: any = [
  "btn-grad--solid",
]

const SIZES: any = [
  "btn--medium",
  "btn--small",
]

const Buttons = ({
  children,
  handleClick,
  buttonStyle,
  buttonSize,
  buttonType,
  buttonText,
}: ButtonProps) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return(
    <>
      <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${buttonType}`} onClick={handleClick}>{children}</button>
    </>
  );
};

export default Buttons;
