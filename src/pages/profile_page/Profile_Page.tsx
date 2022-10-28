import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Profile from '../../components/profile-img/Profile'
import SearchBar from '../../components/searchBar/SearchBar'
import Dashboard_layout from '../../layout/dashboard/Dashboard_layout'
import LogoLayout from '../../layout/logoLayout/LogoLayout'
import Logo from '../../assets/logo.png'
import cherechi from '../../assets/cherechi.jpg'
import SideBar from '../../components/sideBar/SideBar'
import Profile_Content from './Profile_Content'


const Profile_Page = () => {
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
                value={""}
                // onChange={}
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
        bottomrightContent={<div className="right--content"><Profile_Content /></div>}
      />
    </>
  );
};

export default Profile_Page