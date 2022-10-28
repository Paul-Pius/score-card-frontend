
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import "./getAdmin.css";
import ActionModal from "./adminActionModel";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface UserType {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  stack?: string;
  squad?: string;
}
export const UserTable = () => {
  let [data, setData] = useState([]);
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoia2FyZWVtaWJyYWhpbTMwQGdtYWlsLmNvbSIsImlhdCI6MTY2MTc2NDM5N30.ZebZpnct2VjDvf1MY3TkeqLeLQJ6HHrjLeteou0_GzI")
  const history = useNavigate()
  const token: string | null = localStorage.getItem("token");
  useEffect(() => {
    const res = axios.get(`${process.env.REACT_APP_BASE_URL}/admin/all-admin`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    res
      .then(({ data }) => {
        setData(data);
        // console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);
 
  return (
    <div className="outer-box">
      <div className="box-container">
        {/* <div className="link-container">
          <button onClick={() => history(-1)} className="link-box">
            
            <p>Go back</p>
          </button>
        </div> */}
        <div>
          <table className="styled-table">
            <thead className="table-header">
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Stack</th>
                <th>Squad</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user: UserType) => (
                <ActionModal
                  key={user.id}
                  users={user}
                  token={token as string}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Table, Tr, Th, Td, Tbody } from "../../styling/css";
// import swal from 'sweetalert'
// import "./table.css"

// // interface IAdmin {
// //   firstname: String;
// //   lastname: String;
// //   email: String;
// //   stack: String;
// //   role: String;
// //   squad: Number;
// //   // action: string;
// // }

// type ViewAllAdminsProps = {};
// export const UserTable = (props: ViewAllAdminsProps) => {
//   const [admin, setAdmin] = useState([])
//   const spanEl = React.useRef<HTMLSpanElement>(null)
// const handleClick: any = (
//   event: React.ChangeEvent<HTMLInputElement>
// ) => {
//   event.preventDefault()
  
//   actionModel ? setActionModel(false): setActionModel(true)
//   console.log(event.target.dataset.index)
// };

// const [actionModel, setActionModel] = useState(false)
// localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoia2FyZWVtaWJyYWhpbTMwQGdtYWlsLmNvbSIsImlhdCI6MTY2MTc2NDM5N30.ZebZpnct2VjDvf1MY3TkeqLeLQJ6HHrjLeteou0_GzI")
//     useEffect(() => {
//      try {
//        const token: string | null = localStorage.getItem("token");
//        const res = axios.get(`${process.env.REACT_APP_BASE_URL}/admin/all-admin`,
//          {
//            headers: {
//              Authorization: `Bearer ${token}`,
//            },
//          }
//        );
//          res.then((data) => {
//              console.log(data);
//              setAdmin(data.data)
//          }).catch((err)=>console.error(err))
//        swal("Loading");
//      } catch {
//        swal("Error", "Something went wrong", "error");
//      }  
//     },[])
//   return (
//     <>
//       <Table>
//         <Tr style={{border:"0px"}}>
//           <Th>Full Name</Th>
//           <Th>Email</Th>
//           <Th>Stack</Th>
//           <Th>Assign Role</Th>
//           <Th>Squad</Th>
//           <Th>Action</Th>
//         </Tr>
//         {admin.map((admin: any, index:number) => (
//           <Tbody ><Tr >
//             <Td>{`${admin.firstname}  ${admin.lastname}`}</Td>
//             <Td>{admin.email}</Td>
//             <Td>{admin.stack}</Td>
//             <Td>{admin.role}</Td>
//             <Td>{admin.role}</Td>
//             <Td className="action">
//             <span ref={spanEl} id= {`id${index}`} onClick={handleClick} data-index={index} >...</span>
//               {
//               actionModel &&
//               <ul className={`action${index}`}>
//                 <li>Edit</li>
//                 <li>Activate</li>
//                 <li>Deactivate</li>
//                 <li>Delete</li>
//               </ul>
              
//               }</Td>
//           </Tr>
//           </Tbody>
//         ))}
//       </Table>
//     </>
//   );
// };


// function e(e: any, spanEl: React.MutableRefObject<null>): React.MouseEventHandler<HTMLSpanElement> | undefined {
//   throw new Error("Function not implemented.");
// }

