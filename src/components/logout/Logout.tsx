import React from "react";
import { FiLogOut } from "react-icons/fi";

const Logout = () => {
  return (
    <div
    onClick={()=>{
      localStorage.clear()
      window.location.replace("/")
    }}
      style={{
        cursor: "pointer",
        padding: "1rem 0 1rem 0.2rem",
        width: "100%",
        color: "#14A800",
        display: "flex",
      }}
    >
      <FiLogOut style={{
        marginRight: "1.3rem",
        width: "1.2rem",
        height: "1.2rem",
      }} />

      <span style={{ fontSize: "0.7rem", lineHeight: "0.8rem" }}>Logout</span>
    </div>
  );
};

export default Logout;
