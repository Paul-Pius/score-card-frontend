import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Form } from "../components";
import Buttons from "../components/buttons/Buttons";
import InputFields from "../components/inputs/InputFields";
import { Heading, Paragraph, HorizontalLine } from "../styling/css";
// import env from "../env"

type UpdatePasswordProps = {};
const UpdatePasswordPage: FC = (props: UpdatePasswordProps) => {
  const [formData, setFormData] = useState({
    newPassword: "",
    passwordConfirm: "",
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
    try {
      e.preventDefault();
      const token: string | undefined = localStorage.token;
      axios.post(`${process.env.REACT_APP_BaseUrl}/user/updatePassword`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
        swal("Please wait for the server to validate your input");
    } catch {
      swal("Error", "Something went wrong", "error");
    }
  };
  return (
    <>
      <Heading>Change Password</Heading>
      <>
        <div>
          <Paragraph>
            YOUR NEW PASSWORD MUST BE DIFFERENT FROM YOUR USED PREVIOUS PASSWORD
          </Paragraph>
          <HorizontalLine />
        </div>
        <div style={{ padding: "2rem 2.5rem" }}>
          <Form onSubmit={handleSubmit}>
            <InputFields
              label="New Password"
              type="text"
              value={formData.newPassword}
              name="newPassword"
              onChange={(e) => handleChange(e)}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
            />

            <InputFields
              label="Confirm Password"
              type="text"
              value={formData.passwordConfirm}
              name="passwordConfirm"
              onChange={(e) => handleChange(e)}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
            />
            <Buttons buttonText="Save" />
          </Form>
        </div>
      </>
    </>
  );
};
export default UpdatePasswordPage;
