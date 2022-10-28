import React,{useState, useContext} from "react";
import EmptyOrPopulatedStack from "../EmptyOrPopulatedStack/EmptyOrPopulatedStack";
import BottomContent from "./BottomContent/BottomContent";
import TopContent from "./TopContent/TopContent";
import "./Stacks.css";
import plus from "../../assets/plus-icon.svg";
import StackCard from "../StackCard/StackCard";
import AdminStackContext from "../../../src/Context/AdminStackContext";
import {StackContext}  from "../../../src/Context/AdminStackContext";

const Stacks = () => {
  const {openModal, setOpenModal} = useContext(StackContext)
  return (
    <>
    <AdminStackContext>
      <EmptyOrPopulatedStack
        topContent={
          <TopContent
            topdashLeft={
              <h1 className="topdash-left-dashboard">Dashboard</h1>
            }
            // topdashRight={
            //   <div className="topdash-right-button">
            //     <button className="top-button" onClick={() => {setOpenModal(t)}}>
            //       <span>
            //         <img src={plus} alt="plus" />
            //       </span>
            //       Create Stack
            //     </button>
            //     {/* <Buttons buttonText='Create' buttonSize='btn--small' /> */}
            //   </div>
            // }
            showRightContent
          />
        }
        bottomContent={<BottomContent />}
      />
      </AdminStackContext>
    </>
  );
};

export default Stacks;
