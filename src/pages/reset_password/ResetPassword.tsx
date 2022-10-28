import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ResetPassword.css";
import axios from "axios";
import Logo from "../../assets/logo.png";
import LogoLayout from "../../layout/logoLayout/LogoLayout";
import LoginText from "../../components/LoginText/LoginText";
import InputFields from "../../components/inputs/InputFields";
import Buttons from "../../components/buttons/Buttons";
import swal from "sweetalert";
import SelectField from "../../components/SelectField";
import { RoleOptionData } from "../../data/RoleOptionData";

const ResetPassword = () => {
  const params: any = useParams();

  const [resp, setResp] = useState("");
  const [oldPassword, setOldPass] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePass = (event: any) => {
    setOldPass(event.target.value.trim());
    console.log(event.target.value.trim());
  };

  const handlePassword = (event: any) => {
    setNewPassword(event.target.value.trim());
    console.log(event.target.value.trim());
  };

  const passwordReset = () => {
    axios
      .post("http://localhost:3000/user/reset-password", {
        password: oldPassword,
      }, {
})
      .then((res) => {
        swal("Success", "Password reset link sent to your email", "success");
      })
      .catch((err) => {
        swal("Oops!", "Something went wrong!", "error");
      });
  };

  const handleSubmit = async(event: any) => {
    event.preventDefault();
    if (newPassword === "") {
      swal("Oops!", "Password field is empty!", "error");
    }
    
    if (oldPassword === "") {
      swal("Oops!", "Password field is empty!", "error");
    }

    if (oldPassword !== newPassword) {
      swal("Oops!", "Passwords do not match!", "error");
    }

    if (newPassword !== "" && oldPassword !== "") {
      passwordReset();
    }
     {
      /* API call */
    }
  };

  return (
    <div className="fgt--container">
      <div>
        <LogoLayout
          leftLogo={<img className="logo--img" src={Logo} />}
          rightLogo={"Scorecard"}
        />
      </div>

      <LoginText children={"Go back to Login"} />

      <h2 className="fgt--h2">Reset Password?</h2>

      <p className="fgt--p">Please choose your new password</p>

      <form action="" method="post">
        <InputFields
          type="password"
          placeholder="Enter password"
          value={oldPassword}
          label="Password"
          onChange={handlePass}
        />

        <InputFields
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          label="New Password"
          onChange={handlePassword}
        />

        {/* <SelectField 
          optionData={RoleOptionData}
        /> */}

        <Buttons handleClick={handleSubmit} buttonType="buttonType">
          Change Password
        </Buttons>
      </form>
    </div>
  );
};

export default ResetPassword;
