import React, { Children } from "react";
import cherechi from "../../assets/cherechi.jpg";
import Profile from "../profile-img/Profile";
import { ModalData } from "../../data/ModalData";
import "./WeeklyPerformanceModal.css";

type ModalProps = {
  title?: string;
  topModal?: any;
  topModalLeft?: any;
  topModalRight?: any;
  bottomModal?: any;
  bottomModalLeft?: any;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
  onClose?: () => void;
};

const WeeklyPerformanceModal = ({
  title,
  topModal,
  topModalLeft,
  topModalRight,
  bottomModal,
  bottomModalLeft,
  top,
  left,
  right,
  bottom,
  opacity,
  onClose,
}: ModalProps) => {
  const _nullClick = (event: any) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="weekly_modal_overlay"
        onClick={onClose}
        style={{
          display: "block",
          position: "fixed",
          zIndex: "1",
          left: "0",
          top: "0",
          width: "100%",
          height: "100%",
          overflow: "auto",
          backgroundColor: `rgba(0, 0, 0, ${opacity ? opacity : 0.5})`,
        }}
      />
      <div
        className="weekly_modal_box"
        onClick={_nullClick}
        style={{
          borderRadius: "5px",
          backgroundColor: "#fefefe",
          fontSize: "15px",
          width: "619px",
          height: "698px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          zIndex: "10",
          position: "fixed",
          top: top ? top : "80px",
          left: left ? left : "596px",
          //   right: "-600px",
        }}
      >
        <div
          style={{
            top: "132px",
            border: "1px solid #DADADA",
            display: "flex",
            flexDirection: "row",
            justifyContent: "evenly",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <div>
            <Profile pic={cherechi} imageHeight={"60"} imageWidth={"60"} />
          </div>
          {/*right */}
          <div style={{
            width: '117px',
            height: '13px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '14px',
            
            color: '#03435F',
          }}>
            <p>Cherechi</p>
            <p>Stack associate</p>
          </div>
        </div>

        <div style={{}}>
          <ul className="weekly_modal--list">
            {ModalData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="weekly_modal--row"
                  onClick={() => {
                    window.location.href = item.path;
                  }}
                  style={{ display: "flex" }}
                >
                  <span style={{ flex: "0.3" }} id="icon">
                    {item.icon}
                  </span>
                  <span style={{ flex: "0.3" }} id="title">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default WeeklyPerformanceModal;




// import axios from 'axios';
// import React, { FC, MouseEvent, useState, ChangeEvent, FormEvent } from 'react';
// import swal from 'sweetalert';
// import FormInput2  from "./FormInput2";
// import Card from "./Card";
// import Form from "./Form";
// import FormButton from "./FormBody";
// import { Heading, Paragraph } from "../../styling/css";
// import { BsXLg } from "react-icons/bs";
// type AddPerformanceScoreProps = {
//   id?: string;
//   firstName?: string;
//   lastName?: string;
//   offModal?: () => void;
// };
// const BASEURL = process.env.REACT_APP_BASEURL;
// const AddPerformanceScoreModal: (props: AddPerformanceScoreProps) => JSX.Element = (props: AddPerformanceScoreProps) => {
//   const { id, firstName, lastName, offModal} = props;
//     const [performanceData, setPerformanceData] = useState({
//         algorithm: "",
//         weeklyTask: "",
//         assessment: "",
//         agileTest: "",
//     });
//       // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//       //   setPerformanceData({
//       //     ...performanceData,
//       //     [e.target.name]: e.target.value,
//       //   });
//       // };
//       let token = localStorage.getItem('token');
//       if(token !== null){
//         token = token;
//       }
//       const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         try {
//           const result = await axios.put(`${BASEURL}/admin/add_score/${id}`, performanceData, 
//           {headers: {"Authorization": `Bearer ${token}`}}
//           );
//           console.log("From result: ",result.data)
//           swal("Success", "You have successfully added weekly score");
//         //   offModal();
//           window.location.reload();
//         } catch(err){
//           console.error(err);
//           swal("Error", "Something went wrong", "error");
//         }
//       }
//   return (
//     <div style={{ position: 'absolute', zIndex: '5', width: '60rem', left: '15%' }}>
//         <Card>
//         <div style={{position: 'relative'}}>
//           <Paragraph>Add Scores for <b>{firstName}</b> <b>{lastName}</b></Paragraph>
//           <button style={{ position: 'absolute', right: '2rem', top: '2rem', border: 'unset', backgroundColor: "transparent", color: "gray"}} onClick={offModal} ><BsXLg/></button>
//         </div>
//         <div style={{ padding: "2rem 2.5rem" }}>
//           <Form
//             onSubmit={(e) => handleSubmit(e)}
//           >
//             <FormInput2
//               label="First Name"
//               placeholder="First Name"
//               type="text"
//               presetValue={firstName}
//               name="firstName"
//               disabled
//             />
//             <FormInput2
//               label="Last Name"
//               type="text"
//               presetValue={lastName}
//               name="lastName"
//               disabled
//             />
//             <FormInput2
//               label="Algorithms"
//               type="Number"
//               placeholder='Score'
//               // presetValue={performanceData.algorithm}
//               name="algorithm"
//               setSharedState={(i: string) => {
//                 setPerformanceData({
//                   ...performanceData,
//                   algorithm: i
//                 })
//               }}
//             />
//             <FormInput2
//               label="Weekly Tasks"
//               type="Number"
//               placeholder='Score'
//               // presetValue={performanceData.weeklyTask}
//               name="weeklyTask"
//               setSharedState={(i: string) => {
//                 setPerformanceData({
//                   ...performanceData,
//                   weeklyTask: i
//                 })
//               }}
//             />
//             <FormInput2
//               label="Assessment Test"
//               type="Number"
//               placeholder='Score'
//               // presetValue={performanceData.assessment}
//               name="assessment"
//               setSharedState={(i: string) => {
//                 setPerformanceData({
//                   ...performanceData,
//                   assessment: i
//                 })
//               }}
//             />
//             <FormInput2
//               label="Agile Test"
//               type="Number"
//               placeholder='Score'
//               // presetValue={performanceData.agileTest}
//               name="agileTest"
//               setSharedState={(i: string) => {
//                 setPerformanceData({
//                   ...performanceData,
//                   agileTest: i
//                 })
//               }}
//             />
//             <FormButton text="Done" />
//           </Form>
//         </div>
//         </Card>
//     </div>
//   )
// }
// export default AddPerformanceScoreModal;
