/* eslint-disable no-restricted-globals */
import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import "./getUsers.css";
import ActionModal from "./ActionModal";
import { useNavigate } from "react-router-dom";
import { Table, Tr, Th, Td, Tbody, Thead } from "../../styling/css"
// import {devManagement, activateDevAccount, deactivateDevAccount, deleteDevAccount,updateDevAccount} from "../../utils/api";
import Swal from "sweetalert2";

// interface IUser {
//   firstname: String;
//   lastname: String;
//   email: String;
//   stack: String;
//   squad: Number;
//   isActive: Boolean;
//   profilePicture: String;
//   phoneNumber: String;
//   password?: String;
//   token: String;
//   role: String;
//   createdAt?: String;
//   updatedAt?: String;
// }
// type userProps = {};

// const GetUsers: FC = (props: userProps) => {
//   const [users, setUsers] = useState([]);
//   const [buffer, setBuffer] = useState(false)
//   const [formModal, setFormModal] = useState(false)

//  

//  const handleModals = (e: any)=> {
//   setBuffer(!buffer)
//   formModal ? setFormModal(!formModal) : ''
//  } 
  

//   return (
//     <div onClick={handleModals} >
//       <h1>Edit User</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Full Name</th>
//             <th>Email</th>
//             <th>Stack</th>
//             <th>Squad</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length &&
//             users.map((user: IUser, index: number) => (
//             <ActionModal index={index} user={user} key={index} bool={buffer} token={token} data-email={user.email}/> 
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };





interface UserType {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  stack?: string;
  squad?: string;
}
const GetUsers = () => {
  let [data, setData] = useState([]);
  const history = useNavigate()
  const token: string | null = localStorage.getItem("token");

  useEffect(() => {
    const res = axios.get(`${process.env.REACT_APP_BASE_URL}/admin/getusers`, {
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
  
      
  //   if (res.message && res.message.match(/activated successfully/gi)) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: "Successful",
  //         text: `${res.message}`,
  //         confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  //         confirmButtonAriaLabel: "Thumbs up, great!",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "error",
  //         title: "Failed",
  //         text: `${res.message}`,
  //         showDenyButton: true,
  //         denyButtonText: "Try again",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   }
  // };
  // const deactivateUser = async (id: string) => {
  //   const res = await deactivateDevAccount(id);
  //   if (res.message && res.message.match(/successfully deactivated/gi)) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: "Successful",
  //         text: `${res.message}`,
  //         confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  //         confirmButtonAriaLabel: "Thumbs up, great!",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "error",
  //         title: "Failed",
  //         text: `${res.message}`,
  //         showDenyButton: true,
  //         denyButtonText: "Try again",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   }
  // };
  // const deleteUser = async (id: string) => {
  //   const res = await deleteDevAccount(id);
  //   if (res.message && res.message.match(/has been removed/gi)) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: "Successful",
  //         text: `${res.message}`,
  //         confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  //         confirmButtonAriaLabel: "Thumbs up, great!",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "error",
  //         title: "Failed",
  //         text: `${res.error}`,
  //         showDenyButton: true,
  //         denyButtonText: "Try again",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   }
  // };
  // const updateUserAcct = async (
  //   id: string,
  //   firstname: string,
  //   lastname: string,
  //   phone: string,
  //   squad: string,
  //   stack: string
  // ) => {
  //   const res = await updateDevAccount(
  //     id,
  //     firstname,
  //     lastname,
  //     phone,
  //     squad,
  //     stack
  //   );
  //   console.log(res)
  //   if (res.message && res.message.match(/Updated successfully/gi)) {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "success",
  //         title: "Successful",
  //         text: `${res.message}`,
  //         confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
  //         confirmButtonAriaLabel: "Thumbs up, great!",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   } else {
  //     setTimeout(() => {
  //       Swal.fire({
  //         position: "top",
  //         icon: "error",
  //         title: "Failed",
  //         text: `Something went wrong.`,
  //         showDenyButton: true,
  //         denyButtonText: "Try again",
  //         confirmButtonColor: "#93d413",
  //       });
  //     }, 100);
  //   }
  // };
  return (
    <div className="outer-box">
      <div className="box-container">
        {/* <div className="link-container">
          <button onClick={() => history(-1)} className="link-box">
            
            <p>Go back</p>
          </button>
        </div> */}
        {/* <div className="devs-box">
          <h4>Decadevs</h4>
        </div> */}
        <div>
          <Table className="table-container">
            <Thead >
              <Tr>
                <Th>Full Name</Th>
                <Th>Email</Th>
                <Th>Stack</Th>
                <Th>Squad</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user: UserType) => (
                <ActionModal
                  key={user.id}
                  users={user}
                  token={token as string}
                />
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};


export default GetUsers
