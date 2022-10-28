import React, { useState, ChangeEvent } from "react";
import Logo from "../../assets/logo.png";
import cherechi from "../../assets/cherechi.png";
import Navbar from "../../components/navbar/Navbar";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Dashboard_layout from "../../layout/dashboard/Dashboard_layout";
import LogoLayout from "../../layout/logoLayout/LogoLayout";
import SearchBar from "../../components/searchBar/SearchBar";
import Profile from "../../components/profile-img/Profile";
import SideBar from "../../components/sideBar/SideBar";
import { UserTable } from "../../components/viewAdminsTable/Table";
import { Link } from "react-router-dom";
import GetUsers from "../getUsers/getUsers";

export const ViewAllUserPage = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {

    setSearch(event.target.value)
  }
  return (
    <>
      <Dashboard_layout
        topContent={
          <Navbar
            navMiddleWidth={"55%"}
            navRightWidth={"15%"}
            navbarLeftContent={
              <LogoLayout
                leftLogo={<img className="logo--img" src={Logo} />}
                rightLogo={"Scorecard"}
              />
            }
            navbarMiddleContent={
              <SearchBar
                type="text"
                placeholder={"Search"}
                name={"Search"}
                value={search}
                onChange={handleSearch}
              />
            }
            navbarRightContent={
              <Profile
                pic={cherechi}
                text={"John Doe"}
                imageHeight={"50"}
                imageWidth={"50"}
              />
            }
          />
        }
        bottomleftContent={<SideBar />}
        bottomrightContent={
          <div style={{marginTop: "1rem", marginLeft: "5rem", marginRight: "15rem"}}>
                <Link to="/dashboard"><div className="Heading" ><AiOutlineArrowLeft /><span style={{marginLeft:"1rem"}}>Go back</span></div></Link>
                <div style={{ fontSize: '2rem'}}><p>All Decadevs</p></div>
          <GetUsers />
          </div>
  
        }
      />
    </>
  );
};

export default ViewAllUserPage;
