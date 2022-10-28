
// http://localhost:4000/users/scores/weekly/630a5eacfbcf2824c57f9578
import React, { FC, useEffect, useState } from "react";
import FormCardBody from "../FormCardBody";
import {AiOutlineCalendar} from 'react-icons/ai'
import {
  Heading,
  Table,
  Td,
  Tr,
  Thead,
  Th,
  Tbody,
  CardDashboard,
} from "../../styling/css";
import axios from "axios";
import FormCard from "../FormCardBody";
type WeeksPerformanceProps = {
};
type PerformanceProps ={
  index: number
  el: any
  // user: string
}

const PerformanceReport = (props: WeeksPerformanceProps) => {
  const [displayPerformance, setDisplayPerformance] = useState<any>([]);
  // let admin = localStorage.getItem('admin');
  let token = localStorage.getItem('token');
  let userId = localStorage.getItem('id');
  if(token !== null){
    token = token;
  }
  useEffect(() => {
    (async () => {
      // const scoresEndpoint = await axios.get(),
      const result = await axios.get(`${process.env.REACT_APP_BASEURL}/users/scores/weekly/${userId}`,
      {headers: {"Authorization": `Bearer ${token}`}}
      )
      setDisplayPerformance([...result.data.data]);
      console.log(result.data.data);
    })();
  }, []);
  return (
    <>
      <div style={{ margin: '0 3rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <Heading> Scorecard </Heading>
        </div>
        <FormCard>
          <Table>
            <Thead>
                <Tr>
                  <Th>Weeks</Th>
                  <Th>Algorithms</Th>
                  <Th>Weekly Tasks</Th>
                  <Th>Assessment Test</Th>
                  <Th>Agile Test</Th>
                  <Th>Cummulative Score</Th>
                </Tr>
              </Thead>
              <Tbody>
              {displayPerformance.map((el: any, index:number) => {
                return (
                <Tr>
                  <Td>Week {index +=1}</Td>
                  <Td>{el.algorithm}</Td>
                  <Td>{el.weeklyTask }</Td>
                  <Td>{el.assessment }</Td>
                  <Td>{el.agileTest }</Td>
                  <Td>{el.cummulative }</Td>
                </Tr>
              )})}
              </Tbody>
          </Table>
        </FormCard>
      </div>
    </>
  );
};
export default PerformanceReport;

// 
// import React, {useState, useEffect} from "react";
// import { useParams } from "react-router-dom";
// import { Grades } from "../../typings";
// import { getUserScores } from "../../utils/api";
// import '../../components/component.css'
// import "../../components/Dev-management/dev.management.css";
// import '../User_management/User-management.css'
// // import { presentAlert } from "../../utils/adminApi";
// import { UserDashboardLayout } from "../../layout/UserDashboard/UserDashboard";
// export function UserScorecard(){
//     const userId = useParams().id;
//     const [loadingState, setLoadingState ] = useState(true)
//     const [userScores, setUserscores ] = useState([] as Grades[])
//     useEffect(()=> {
//         getUserScores(userId as string).then((res: any) => {
//             //alert(JSON.stringify(res.data.grades) + " result")
//             setUserscores(res.data.grades);
//             setLoadingState(false);
//         })
//     }, [])
//     function prefixOrdinals(numString: string): string{
//         const last2Digits = numString.substr(numString.length - 2);
//         if((last2Digits !== "11") && (last2Digits !== "12") && (last2Digits !== "13")){
//             switch(numString[numString.length - 1]){
//                 case "1":
//                     return `${numString}st`;
//                 case "2":
//                     return `${numString}nd`;
//                 case "3":
//                     return `${numString}rd`;
//                 default:
//                     return `${numString}th`;
//             }    
//         }
//         return `${numString}th`;
//     }
//     return (
//         <UserDashboardLayout>
//             <div className="outer-box">
//                 <div className="">
//                     <h1 className="scorecard-header-text">Scorecard</h1>
//                 </div>
//                 <div className="scorecard-body">
//                     <div className="">
//                         <table className="scorecard-table table-container">
//                             <thead className="table-header">
//                                 <tr>
//                                     <td>Week</td>
//                                     <td>Algorithm</td>
//                                     <td>Weekly Test</td>
//                                     <td>Assessment Test</td>
//                                     <td>Agile Test</td>
//                                     <td>Cummulative</td>
//                                 </tr>
//                             </thead>
//                             {(!loadingState) && (
//                                 <tbody>
//                                     {
//                                         userScores.map((score) => { return (
//                                             <tr className="table-row">
//                                                 <td>{prefixOrdinals((score.week + 1).toString()) } Week</td>
//                                                 <td>{score.algorithm}</td>
//                                                 <td>{score.weekly_task}</td>
//                                                 <td>{score.assessment}</td>
//                                                 <td>{score.agile}</td>
//                                                 <td>{score.cummulative}</td>
//                                             </tr>
//                                         )})
//                                     }
//                                 </tbody>
//                             )}
//                             {loadingState && (
//                                 <div className="scorecard-loading" >
//                                     <h4>Loading your scores in a minute...</h4>
//                                 </div>
//                             )}
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </UserDashboardLayout>
//     )
// }