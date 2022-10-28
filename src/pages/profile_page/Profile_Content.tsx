import React, { ChangeEvent, FormEvent, useState } from "react";
import { Form } from "../../components";
import FormCard from "../../components/FormCardBody";
import ProfileCard from "../../components/ProfileCardBody";
import FormInput from "../../components/FormInput";
import "./Profile_Content.css";
import { Heading, HorizontalLine, Paragraph } from "../../styling/css";
import CircularImage from "../../components/circular_image/CircularImage";
import CrackedImg from "../../assets/img_crack.jpg";
import FormButton from "../../components/FormButton";
import axios from "axios";
import swal from "sweetalert";
import validator from "validator";


const Profile_Content = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    stack: "",
    squad: "",
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
    } catch (error) {
      swal("Error", "unable to update profile", "error");
    }
  };

  return (
    <>
      <Heading>Profile</Heading>
      <ProfileCard style={{ color: "red" }}>
        <div>
          <Paragraph>ONLY YOU CAN EDIT YOUR PROFILE.</Paragraph>
          <HorizontalLine style={{ marginBottom: "2rem" }} />
          <CircularImage
            top_circle={<img src={CrackedImg} alt="crackedimg" />}
            bottom_circle={""}
            text={"Cherechi Orika"}
          />
          {/* <form action="" onSubmit={}>
            <input type="text" onChange={} />

            
          </form> */}
        </div>
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="First Name"
            type="text"
            value={formData.firstName}
            name="firstName"
            placeholder="Enter first Name"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />

          {formData.firstName.length === 0 ? (
            <span
              style={{
                color: "red",
              }}
            >
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>First Name is required</p>
            </span>
          ) : formData.firstName.length > 0 && formData.firstName.length < 3 ? (
            <span
              style={{
                color: "red",
              }}
            >
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>First Name must be at least 3 characters</p>
            </span>
          ) : (
            <span
              style={{
                color: "green",
              }}
            >
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>First Name is valid</p>
            </span>
          )}

          <FormInput
            label="Last Name"
            type="text"
            value={formData.lastName}
            name="lastName"
            placeholder="Enter last Name"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />

          {formData.lastName.length === 0 ? (
            <span style={{
              color: "red",
            }}>
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>Last Name is required</p>
            </span>
          ): formData.lastName.length > 0 && formData.lastName.length < 3 ? (
            <span style={{
              color: "red",
            }}>
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>Last Name must be at least 3 characters</p>
            </span>
          ): (
            <span style={{
              color: "green",
            }}>
              <p style={{
                fontFamily: "serif",
                animationTimingFunction: "ease-in"
                
              }}>Last Name is valid</p>
            </span>
          )}

          <FormInput
            label="Email"
            type="email"
            value={formData.email}
            name="email"
            placeholder="myemail@gmail.com"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
          />

          {formData.email.length === 0 ? (
            <span style={{ color: "red" }}></span>
          ) : formData.email.length > 0 && validator.isEmail(formData.email) ? (
            <span style={{ color: "green" }}>Valid Email</span>
          ) : (
            <span style={{ color: "red" }}>Please enter a valid email</span>
          )}

          <FormInput
            label="Stack"
            type="text"
            value={formData.stack}
            name="stack"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            placeholder="Stack"
          />
          <FormInput
            label="Squad"
            type="text"
            value={formData.squad}
            name="squad"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            placeholder="Squad"
          />
        </Form>
        <FormButton text={"save"} />
      </ProfileCard>
    </>
  );
};

export default Profile_Content;
