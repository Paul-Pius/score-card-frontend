import React, { MouseEventHandler } from 'react';
import { ButtonBody2 } from '../styling/css';

type ButtonProps2 = {
    text?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement> | undefined,
    type?: any
}

const FormButton2 = ({
    text,
    handleClick,
    type
}: ButtonProps2) => {
  return (
    <ButtonBody2 type={type} onClick={handleClick}>{text}</ButtonBody2>
  )
}

export default FormButton2