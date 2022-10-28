import axios from 'axios';
import React, { useState, FC, FormEvent } from 'react';
import swal from 'sweetalert';
import validator from 'validator';
import { AuthenticationInput, Form } from '.';
import AuthenticationButton from './AuthenticationButton';
// import SelectField from "../components/SelectField";
// import { RoleOptionData } from "../data/RoleOptionData";

type IAuthenticationLeftProps = {
    isAdmin?: boolean
}

const AuthenticationLeft = ({isAdmin}: {isAdmin?: boolean}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // const [isAdminLogin, setIsAdminLogin] = React.useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            // console.log("port", process.env.REACT_APP_BASE_URL);
            const userLog = await axios.post(`${process.env.REACT_APP_BASE_URL}/${isAdmin? 'admin':'user'}/login`, formData);
            console.log(userLog.data);
            localStorage.setItem("token", `${userLog.data.token}`)
            localStorage.setItem("userDetails", `${userLog.data}`)
            
            swal("Success", "Login successful", "success");
            isAdmin? window.location.replace("/admindashboard") : window.location.replace("/userdashboard")
        } catch {
            swal("Error", "Something went wrong", "error");
        }
    };

    return (
        <div className='left'>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <AuthenticationInput
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    name="email"
                    placeholder="Enter email address"
                />
                    {formData.email.length === 0 ? <p style={{ color: 'red' }}></p> :
                    formData.email.length > 0 && validator.isEmail(formData.email) ? <p style={{ color: 'green' }}>Valid Email</p> : <p style={{ color: 'red' }}>Please enter a valid email address</p>
                    }
                <AuthenticationInput
                    label="Password"
                    type="password"
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
                    <AuthenticationButton text='Login' />
            </Form>

            {/* <SelectField 
          optionData={RoleOptionData}
        /> */}

        </div>
    );
};

export default AuthenticationLeft;
