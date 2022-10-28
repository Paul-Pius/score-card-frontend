import React, { useState, ChangeEvent } from "react";
import Logo from "../../assets/logo.png";
import cherechi from "../../assets/cherechi.png";
import Navbar from "../../components/navbar/Navbar";
import InputFields from "../../components/inputs/InputFields";
import Dashboard_layout from "../../layout/dashboard/Dashboard_layout";
import LogoLayout from "../../layout/logoLayout/LogoLayout";
import SearchBar from "../../components/searchBar/SearchBar";
import Profile from "../../components/profile-img/Profile";
import SideBar from "../../components/sideBar/SideBar";
import Weeklyperformance from "../../components/weeklyPerformance/weeklyperformance";

export const Admin_Dashboard = () => {
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
          // <div className="right--content">User Dashboard</div>
          <Weeklyperformance />
        }
      />
    </>
  );
};

export default Admin_Dashboard;
