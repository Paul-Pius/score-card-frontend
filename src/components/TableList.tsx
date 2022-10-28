import React, { MouseEvent, MouseEventHandler, useState} from 'react'
// import Weeklyperformance from './weeklyPerformance/weeklyperformance';
import WeeklyPerformanceModal from './weeklyPerformance/weeklyPerformanceModal';


type TableListProps = {}

export default function TableList(props:any) {


    const [modal, setModal] = useState(false);

    const editProfile: (e: MouseEvent<HTMLButtonElement>) => void = function(e: MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        console.log("Edit Profile")
        setModal(true);
    }
     

  return (
    <>
    {modal && <WeeklyPerformanceModal/>}
        <tr key={props.scores.id}>
             <td>{props.index + 1}</td>
             <td>{props.scores.dev.firstname}</td>
             <td>{props.scores.dev.lastname}</td>
             <td>{props.scores.algorithm}</td>
             <td>{props.scores.task}</td>
             <td>{props.scores.assesment}</td>
             <td>{props.scores.agile}</td> 
             <td>{props.scores.cummulative}</td> 
             <td><span onClick = { editProfile } > ... </span></td>
             {/* 
             <td>{scores.lastname}</td> */}
         </tr>
    </>
  ) 
}
