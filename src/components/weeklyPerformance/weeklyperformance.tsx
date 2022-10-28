import React, { MouseEvent } from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineCalendar} from 'react-icons/ai'
import "./weeklyperformance.css"
import weeksData from '../../data/weeksData'
import {filterDevScoresByWeeks} from '../../utils/api'
import TableList from '../TableList'


type Devs ={
    sn?: number;
    id: string;
    firstname: string;
    lastname: string;
    week: [
        {
            week: number;
            algorithm: number;
            weeklyTask: number;
            assessment: number;
            agile: number;
            cummulative: number;
        }
    ]
        
    };


{/* <AiOutlineCalendar /> */}
export default function Weeklyperformance() {
    const [week, setWeek] = useState(0)
    const [list , setList] = useState([])
    // const URL = `${process.env.REACT_APP_BASE_URL}/scores/getscores?week=${activeWeek}`

    //  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoia2FyZWVtaWJyYWhpbTMwQGdtYWlsLmNvbSIsImlhdCI6MTY2MTc2NDM5N30.ZebZpnct2VjDvf1MY3TkeqLeLQJ6HHrjLeteou0_GzI")
    const filterScore = async () => {
        const response = await filterDevScoresByWeeks(week)
        console.log("Response",response)
        setList(response)
    };
    useEffect(() =>{
        filterScore();
    }, [week]);


  return (
    // [week, setWeek] = useState(1),
    <>
    <div className="weeklyPeformanceWrapper">
        <div className="weeklyPeformanceHeader">
            <div className='dashboard'>
                <h1>Dash board</h1>
            </div>
            <div className="weeks">
                <AiOutlineCalendar /> <p className='weeks-txt'> Weeks</p>
            </div>
        </div>
        <div className="weeklyPeformanceBody">
            <div className="weeklyPeformanceBodyContent">
                <h1> week</h1>
                <table className='weeklyPerformanceTable'>
                    <thead className='weeklyPerformanceTableHead'>
                        <tr>
                            <th>SN</th>
                            <th>Firstname</th>
                           <th>Lastname</th>
                           <th>Algorithm</th>
                           <th>Weekly Task</th>
                            <th>Assesment</th>
                            <th>Agile</th>
                            <th> Cummulative</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.length && list.map((scores , index) => (
                           <TableList  scores= {scores} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}
