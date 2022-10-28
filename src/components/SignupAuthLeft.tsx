import axios from 'axios';
import React, { useState, FC, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import validator from 'validator';
import { AuthenticationInput, Form } from '.';
import AuthenticationButton from './AuthenticationButton';
// import SelectField from "../components/SelectField";
// import { RoleOptionData } from "../data/RoleOptionData";

type IAuthenticationLeftProps = {
}

const AuthenticationLeft: FC = (props: IAuthenticationLeftProps) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            // console.log("port", process.env.REACT_APP_BASE_URL);
            await axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`, formData);
            swal("Success", "Login successful", "success");
        } catch {
            swal("Error", "Something went wrong", "error");
        }
    };

    return (
        <div className='left'>
            <NavLink to={""} style={{textDecoration: "none", fontWeight: "bold", color: "green"}}>Go back to login</NavLink>
            <p style={{fontSize:"2rem", fontWeight: "bold"}}>Sign Up</p>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <AuthenticationInput
                    label="First Name"
                    type="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    name="name"
                    placeholder="Enter first name"
                    />
                    {formData.email.length === 0 ? <p style={{ color: 'red' }}></p> :
                    formData.email.length > 0 && validator.isEmail(formData.email) ? <p style={{ color: 'green' }}>Valid Email</p> : <p style={{ color: 'red' }}>Please enter a valid email address</p>
                    }
                <AuthenticationInput
                    label="Last Name"
                    type="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                    name="name"
                    placeholder="Enter last name"
                />
                <AuthenticationInput
                    label="Email"
                    type="Email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    name="email"
                    placeholder="Enter email address"
                />
                <AuthenticationInput
                    label="Password"
                    type="Password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    name="password"
                    placeholder="Enter password"
                />
                <AuthenticationInput
                    label="Confirm Password"
                    type="Password"
                    value={formData.password}
                    onChange={(e) => handleChange(e)}
                    name="password"
                    placeholder="Enter password"
                />
                    {
                    formData.password.length > 2 ?
                        <p style={{ color: 'green' }}>Password is ok</p> :
                        formData.password.length === 0 ? <p style={{ color: 'red' }}></p> :
                        <p style={{ color: 'orange' }}>Must be greater than 2 characters</p>
                    }
                    <AuthenticationButton text="Sign Up" />
            </Form>

            {/* <SelectField 
          optionData={RoleOptionData}
        /> */}

        </div>
    );
};

export default AuthenticationLeft;
