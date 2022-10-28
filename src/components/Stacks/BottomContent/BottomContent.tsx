import React,{useContext, useState, useEffect} from "react";
import "./BottomContent.css";
import search from "../../../assets/search-icon.svg";
import plus from "../../../assets/plus-icon.svg";
// import { stackData } from "../../../data/data";
import StackCard from "../../StackCard/StackCard";
import node from "../../../assets/node.svg";
import ModalStack from "../../ModalStack/ModalStack";
import { StackContext } from "../../../Context/AdminStackContext";
import axios from "axios";


const BottomContent = () => {
  const {openModal, setOpenModal, stackData, setStackData} = useContext(StackContext);
  const token = localStorage.getItem('token')
  //get all stacks.
  let stackDataArray: any = [];
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/stack/get-stacks`,
    {headers: {"Authorization": `Bearer ${token}`}}).then((response)=>{
      setStackData([...response.data])
    }).catch((error) =>{
      console.log(error);
    })
    
  },[])

  // console.log(stackData);
  return (
    <>
      <div className="bottomdash">
        {stackData.length > 0 ? (
          stackData.map(({image, stackDescription,stackName}, key) => (
            <StackCard title={stackName} img={image} />
          ))
        ) : (
          <div className="cardEmpty">
            <div className="cardImage-oops">
              <img className="card-img" src={search} alt="" />
              <span className="oops">Ooops...</span>
            </div>
            <p className="card-text">
              You have not created any stack yet click on{" "}
              <span>create stack</span> <br />
              to get started
            </p>
            {/* <button className="card-button" onClick={() => {setOpenModal(true)}}> */}
            <button className="card-button" onClick={() => {setOpenModal(!openModal)}}>
              <span>
                <img src={plus} alt="plus" />
              </span>
              Create Stack
            </button>
          </div>
        )}
      {openModal && <ModalStack closeModal={setOpenModal}/>}
      </div>
    </>
  );
};

export default BottomContent;
