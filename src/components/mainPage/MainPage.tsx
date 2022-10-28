import React from 'react';
import Navbar from '../navbar/Navbar';
import SideBar from '../sideBar/SideBar';
import './MainPage.css';

const MainPage = () => {
  return (
    <>
        <div className="main--page--container">
            {/* Heading Section */}
            <section>
              <div>
                <Navbar />
              </div>
            </section>

            {/* Sidebar Section */}
            <section>
              <div className='sidebar--layout'>
                <div className="side--left">
                  <SideBar />
                </div>
                <div className="side--right">

                </div>
              </div>
            </section>
        </div>
    </>
  )
}

export default MainPage