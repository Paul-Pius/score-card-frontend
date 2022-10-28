import React from 'react'
import LogoLayout from '../../layout/logoLayout/LogoLayout'
import Logo from '../../assets/logo.png';
import Cherechi from '../../assets/cherechi.jpg';
import './Navbar.css'
import SearchBar from '../searchBar/SearchBar'
import Profile from '../profile-img/Profile'


interface NavbarProps {
  navbarLeftContent?: React.ReactNode,
  navbarMiddleContent?: React.ReactNode,
  navbarRightContent?: React.ReactNode,
  navLeftWidth?: string,
  navMiddleWidth?: string,
  navRightWidth?: string,
  navMiddleBGColor?: string,
}

const Navbar = ({
  navbarLeftContent,
  navbarMiddleContent,
  navbarRightContent,
  navLeftWidth,
  navMiddleWidth,
  navRightWidth,
  navMiddleBGColor,
}: NavbarProps) => {
  return (
    
      <div className="nav--container">
        <div className="nav--left" style={{
          width: navLeftWidth ? navLeftWidth : 'auto',
          
        }}>
          {navbarLeftContent ? navbarLeftContent : null}
          
        </div>

        <div className='nav--middle' style={{
          width: navMiddleWidth ? navMiddleWidth : 'auto',
          backgroundColor: navMiddleBGColor ? navMiddleBGColor : '#F8F9FA',
        }}>
          {navbarMiddleContent ? navbarMiddleContent : null}

        </div>

        <div className="nav--right" style={{
          width: navRightWidth ? navRightWidth : 'auto',
        }}>
          {navbarRightContent ? navbarRightContent : null}

        </div>

      </div>
    
  )
}

export default Navbar