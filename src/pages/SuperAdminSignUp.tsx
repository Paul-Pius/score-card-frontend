import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { Form } from "../components";
import FormCard from "../components/FormCardBody"
import FormInput from "../components/FormInput";
import FormButtom from "../components/FormButton";
import { Heading, Paragraph, FormCardBody, HorizontalLine } from "../styling/css";
import axios from "axios";
import swal from "sweetalert";
import validator from "validator"

type SuperAdminSignUpProps = {};

const SuperAdminSignUp: FC = (props: SuperAdminSignUpProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoia2FyZWVtaWJyYWhpbTMwQGdtYWlsLmNvbSIsImlhdCI6MTY2MTc2NDM5N30.ZebZpnct2VjDvf1MY3TkeqLeLQJ6HHrjLeteou0_GzI")
    const token: string | null = localStorage.getItem("token");
    try {
      e.preventDefault();
      // formData.name = `${formData.firstName} ${formData.lastName}`
      axios.post(`${process.env.REACT_APP_BASE_URL}/superadmin/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      swal("Success", "You have successfully signed in", "success");
    } catch {
      swal("Error", "Something went wrong", "error");
    }
  };
  return (
    <>
      <FormCard>
        <Heading id="super_admin_signup">SuperAdmin Signup</Heading>
          <div>
            <Paragraph>Fill in all required details.</Paragraph>
            <HorizontalLine />
          </div>
          <div style={{ padding: "2rem 2.5rem" }}>
            <Form onSubmit={handleSubmit}>
              <FormInput
                label="First Name"
                placeholder="First Name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
              />

              {formData.firstName.length === 0 ? (
                <span style={{ color: "red" }}>Field cannot be empty</span>
              ) : formData.firstName.length > 0 &&
                formData.firstName.length < 3 ? (
                <span style={{ color: "red" }}>
                  First name must be greater than three characters
                </span>
              ) : (
                <span style={{ color: "green" }}></span>
              )}
              {/* Super Admin Sign up Validation */}

              <FormInput
                label="Last Name"
                placeholder="Last Name"
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={(e) => handleChange(e)}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleBlur(e)
                }
              />
              <FormInput
                label="Email"
                placeholder="Email"
                type="email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleBlur(e)
                }
              />

              {formData.email.length === 0 ? (
                <span style={{ color: "red" }}></span>
            ) :
              formData.email.length > 0 &&
                validator.isEmail(formData.email) ? (
                <span style={{ color: "green" }}>Valid Email</span>
              ) :
                (
                <span style={{ color: "red" }}>Please enter a valid email</span>
              )}

              <FormInput
                label="Password"
                placeholder="Password"
                type="password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleBlur(e)
                }
              />

              {formData.password.length > 7 ? (
                <span style={{ color: "green" }}></span>
              ) : formData.password.length === 0 ? (
                <span style={{ color: "red" }}></span>
              ) : (
                <span style={{ color: "red" }}>
                  Must be at least 8 characters
                </span>
              )}

              <FormInput
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleBlur(e)
                }
              />
              {formData.confirmPassword === formData.password ? (
                <span style={{ color: "green" }}></span>
              ) : (
                <span style={{ color: "red" }}>Password Must Match</span>
              )}

              <FormButtom text="Create Super Admin" />
            </Form>
          </div>
      </FormCard>
    </>
  );
};
export default SuperAdminSignUp;