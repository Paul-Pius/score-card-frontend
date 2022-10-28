import React from "react";
import styled from "styled-components";
import { AdminCard } from "../styling/css";

type FormCardProps = {
  children: any;
};
const AdminFormCard = (props: FormCardProps) => {
  return <AdminCard>{props.children}</AdminCard>;
};
export default AdminFormCard;