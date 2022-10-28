import React, { MouseEventHandler } from "react";
import "./SideBar.css";
import Logout from "../logout/Logout";
import  {SideBarData} from "../../data/SideBarData";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--list">
        
        {SideBarData.map((item, index) => {
          return (
            <li
              key={index}
              className={`row first_child ${index}`}
              id={window.location.pathname == item.path ? "active" : ""}
              onClick={() => {
                window.location.href = item.path;
              }}
              style={{ display: "flex"}}
            >
              <span style={{ display: 'inline-block', fontSize: '1.4rem', marginRight: '0.5rem' }} id="icon">
                {item.icon}
              </span>
              <span style={{ display: 'inline-block' }} id="title">
                {item.title}
              </span>
            </li>
          );
        })}

      </div>
      <div
          style={{
            marginTop: "22rem",
            backgroundColor: "rgba(20, 168, 0, 0.05)",
            marginBottom: "1.5rem",
            // padding: "1rem 0px 1rem 0.2rem"
          }}
        >
          <Logout />
        </div>
    </div>
  );
};

export default SideBar;
