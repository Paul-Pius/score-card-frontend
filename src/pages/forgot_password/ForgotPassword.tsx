import React, { useState } from "react";
import "./ForgotPassword.css";
import Buttons from "../../components/buttons/Buttons";
import InputFields from "../../components/inputs/InputFields";
import axios from "axios";
import LoginText from "../../components/LoginText/LoginText";
import LogoLayout from "../../layout/logoLayout/LogoLayout";
import Logo from "../../assets/logo.png";
import swal from "sweetalert";

const ForgotPassword = () => {
  // const [resp, setResp] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event: any) => {
    setEmail(event.target.value.trim());
    // console.log(email);
  };

  const changePassword = () => {
    axios
      .post("http://localhost:3000/user/forgot-password", {
        email: email,
      })
      .then((res) => {
        swal("Success", "Password changed successfully", "success");
      })
      .catch((err) => {
        swal("Oops!", "Something went wrong!", "error");
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email === "") {
      swal("Oops!", "Email field is empty!", "error");
    }
    if (email !== "") {
      changePassword();
    }
    console.log(email);
  };

  return (
    <div className="fgt--container">
      <div>
        <LogoLayout
          leftLogo={<img className="logo--img" src={Logo} />}
          rightLogo={"Scorecard"}
        />
      </div>

      <LoginText>Go back to Login</LoginText>

      <h2 className="fgt--h2">Forgot Password?</h2>

      <p className="fgt--p">Send a link to your email to reset your password</p>

      <form action="">
        <InputFields
          value={email}
          placeholder="Enter email address"
          type="email"
          label="Email address"
          onChange={handleChange}
        />

        <Buttons handleClick={handleSubmit} buttonType="buttonType">
          Send Reset Link
        </Buttons>
      </form>
    </div>
  );
};

export default ForgotPassword;
