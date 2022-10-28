import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavText } from "../../styling/css";
import "./Navbar.css"


const Navbar = () => {

    return (
        <div className="container" style={{
            display: "flex",
            backgroundColor: "#FFFFFF",
            height: "5rem"
        }}>

            <div className="logo" style={{
                paddingTop: "0.8rem",
                paddingLeft: "6rem"
            }}>
                <img src={logo} />
            </div>
            <div className="NavText" style={{
                paddingTop: "1.2rem",
                paddingLeft: "0.2rem"
            }}>
                <NavText>
                    <div>Scorecard</div>
                </NavText>
            </div>
            <div>
                <ul className="ull">
                    <li><NavLink className="ancho" to={"/"}><span style={{color: "#14A800", fontWeight: "bold"}}>Home</span></NavLink></li>
                    <li><NavLink className="ancho" to={""}>About</NavLink></li>
                    <li><NavLink className="ancho" to={""}>Learnings</NavLink></li>
                    <li><NavLink className="ancho" to={""}>Contact</NavLink></li>
                    <li><button className="click1"><NavLink className="ancho" to={"/login"}>Login</NavLink></button></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;