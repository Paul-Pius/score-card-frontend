import React, { ChangeEvent, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import SearchBar from "../../components/searchBar/SearchBar";
import Dashboard_layout from "../../layout/dashboard/Dashboard_layout";
import LogoLayout from "../../layout/logoLayout/LogoLayout";
import Profile from "../../components/profile-img/Profile";
import Logo from "../../assets/logo.png";
import cherechi from "../../assets/cherechi.jpg";
import SideBar from "../../components/sideBar/SideBar";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
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
                type={"text"}
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
        bottomrightContent={<div className="right--content">Dashboard</div>}
      />
    </>
  );
};

export default Dashboard;
