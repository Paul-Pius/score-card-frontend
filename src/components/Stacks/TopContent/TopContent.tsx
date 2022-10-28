import React, { useContext } from 'react'
import './TopContent.css'
import {SideBarData} from '../../../data/data';
import plus from "../../../assets/plus-icon.svg";
import AdminStackContext, { StackContext } from "../../../Context/AdminStackContext";

interface ITop {
    topdashLeft?: React.ReactNode
    topdashRight?: React.ReactNode
    showRightContent?: Boolean
}

const TopContent = ({topdashLeft, topdashRight, showRightContent}:ITop) => {
  const {openModal, setOpenModal, stackData} = useContext(StackContext)

  return (
    <>
        <div className='topdash'>
            {/* <div className='topdash-left'>Dashboard</div> */}
            {topdashLeft ? topdashLeft : null}
            {stackData.length && showRightContent ? (<div className="topdash-right-button">
                <button className="top-button" onClick={() => {setOpenModal(true)}}>
                  <span>
                    <img src={plus} alt="plus" />
                  </span>
                  Create Stack
                </button>
                {/* <Buttons buttonText='Create' buttonSize='btn--small' /> */}
              </div>): null}
            {SideBarData.length && showRightContent ? topdashRight : null}
            {/* <div className='topdash-right'>Button</div> */}
        </div>
    </>
  )
}

export default TopContent