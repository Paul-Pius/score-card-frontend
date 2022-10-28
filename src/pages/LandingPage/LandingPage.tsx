import React from "react";
import Navbar from "../../components/LandingPageComponents/Navbar";
import Union from "../../assets/Union.png";
import "../LandingPage/LP.css";
import { NavLink } from "react-router-dom";
import abeg from "../../assets/abeg.png";
import access_bank from "../../assets/access_bank.png";
import airtel from "../../assets/airtel.png";
import bolt from "../../assets/bolt.png";
import first_bank from "../../assets/first_bank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {
    return (
      <div className="mainContainer" style={{backgroundColor: "#FFFFFF"}}>

        {/** Navbar */}
        <div className="nav">
            <Navbar />
        </div>

        <div className="main-div">
            <div className="item">
                <p className="paragraph">
                    You can learn<br />
                    anything,<br />
                    anywhere.<br />
                </p>
                <p className="paragraph2">
                    Education is the process of facilitating learning, or the acquisition of<br />
                    knowledge, skills, values, beliefs and habits.
                </p>
                <button className="click2">Get Started</button>
            </div>
        </div>

        <div className="middle">
            <div className="students">
                <p className="trusted">Trusted by over 1,500 Students</p>
                <button className="getstarted">Get Started</button>
            </div>
        </div>

             {/** last image */}
            <div className="img3" style={{backgroundColor: "rgba(0, 0, 0, 0.03)"}}>
                <div className="why">
                    <p className="yscorecard">Why Scorecard?</p><br />
                    <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br />
                    <p className="lorem">feugiat eget ipsum, sed praesent</p><br />
                    <button className="getstarted2">Get Started</button>
                </div>
                <div className="unionI">
                    <img className="union" src={Union} alt="" />
                </div>
            </div>

            {/** second to the last div */}
            <div className="h1">
                <h1 className="header">Our Partners</h1>
                <div className="partners" style={{width: "100"}}>
                    <div className="partner" style={{width: "100"}}>
                        <img src={abeg} alt="" />
                    </div>
                    <div className="partner" style={{width: "100"}}>
                        <img src={access_bank} alt="" />
                    </div>
                    <div className="partner" style={{width: "100"}}>
                        <img src={bolt} alt="" />
                    </div>
                    <div className="partner" style={{width: "100"}}>
                        <img src={first_bank} alt="" />
                    </div>
                    <div className="partner" style={{width: "100"}}>
                        <img src={airtel} alt="" />
                    </div>
                </div>
            </div>

            <div className="scard">
                <h1 className="scard2">Score<span style={{backgroundColor: "#14A800"}}>card</span></h1>
                <div>
                    <div className="paragraph3">
                        <NavLink className="list" to={""}>Home</NavLink>
                        <NavLink className="list" to={""}>About</NavLink>
                        <NavLink className="list" to={""}>Learnings</NavLink>
                        <NavLink className="list" to={""}>Contact</NavLink>
                    </div>
                    <hr />
                    <div className="awesome">
                        <p className="text"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>2022 Scorecard. All rights reserved</p>
                        <div className="fonts">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                        </div>
                    </div>
            </div>
        </div>
      </div>
    )
}

export default HomePage;