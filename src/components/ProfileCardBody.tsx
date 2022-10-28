import React from "react";
import styled from "styled-components";
import { ProfileContentBody } from "../styling/css";
type FormCardProps = {
  children: any;
  className?: string;
  style?: any;
};
const ProfileCardBody = (props: FormCardProps) => {
  return <ProfileContentBody>{props.children}</ProfileContentBody>;
};
export default ProfileCardBody;