
import React, { FC, FormEvent } from 'react';
import styled from "styled-components"

interface FormProps {
    children: React.ReactNode
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
};

const Form: (props: FormProps) => JSX.Element = (props: FormProps) => {
    const { onSubmit } = props
    return (
        <form onSubmit={onSubmit}>
        {props.children}
        </form>
    )
};

export default Form;