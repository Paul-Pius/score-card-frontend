import React, { ChangeEvent, ChangeEventHandler } from "react"

type Options = {

}

type SelectFieldProps = {
    name?: string;
    id?: number;
    text?: string;
    value?: string;
    optionData?: any;
    label?: string;
    placeholder?: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectField = ({
    name,
    value,
    optionData,
    label,
    placeholder,
    handleChange,
}: SelectFieldProps) => {

    return (
        <div className="select-group" style={{ marginBottom: "20px" }}>
            {label && <label className={"form--label"} style={{ color: '#03435F' }}>{label}</label>}
            <select
                style={{ width: '98.5%', height: '3.2rem', border: '1px solid rgba(33, 51, 79, 0.15)' }}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            >
                {
                    optionData && optionData.map
                        (
                            (item: any, value: any) => (
                                <option>
                                    {item}
                                </option>
                            )
                        )
                }

            </select>
        </div>
    )
}

export default SelectField