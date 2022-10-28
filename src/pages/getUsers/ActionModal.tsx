import React, { FC, useState, useEffect, Fragment, ChangeEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";
import "./getUsers.css";
import { Table, Tr, Th, Td, Tbody } from "../../styling/css"
import { Form } from "./../../components";
import Buttons from "./../../components/buttons/Buttons";
import InputFields from "./../../components/inputs/InputFields";


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

// interface Iprops {
//   index: number;
//   user: IUser;
//   bool: boolean;
//   token: string | null;
//   // email: string
// }


// const ActionModal = (props: Iprops) => {
//   const { index, user, bool, token, } = props;
//   const [isActive, setIsActive] = useState(bool);
//   const [formModal, setFormModal] = useState(false)
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     stack: "",
//     squad: "",
//   });
//    const handleChange = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleBlur = (e: any) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const editUser = async (e: any) => {
//     setFormModal(false)
//     try {
//       await axios
//           .put(`${process.env.REACT_APP_BASE_URL}/user/auth/edit`, formData,{
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           })
//           .then(({data}) => {
//             console.log(data)
//             return swal(`${data.message}`);
//           })
//           .catch((err) => {
//             return swal(`$${err.response.data.message}`);
//           });
//       }
//      catch (error) {
      
//     }
//   }
//   

//   const handleEdit = (e: any) => {
//     e.preventDefault();
//     setIsActive(false);
//     setFormModal(true)
//   };

//   const closeModals = ()=> {
//     isActive ? setIsActive(!isActive) : ""
//     formModal ? setFormModal(!formModal) : ""
//   }

//   return (
//   <>
//   {formModal && <div className="formModal"><>
//       <h1>Edit User</h1>
//       <>
//         <div style={{ padding: "6rem 6.5rem" }}>
//           <Form onSubmit={editUser} >
//             <InputFields
//               label="First Name"
//               type="text"
//               value={`${formData.firstname}`}
//               name="firstname"
//               onChange={(e) => handleChange(e)}
//               onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
//             />

//             <InputFields
//               label="Last Name"
//               type="text"
//               value={`${formData.lastname}`}
//               name="lastname"
//               onChange={(e) => handleChange(e)}
//               onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
//             />

//             <InputFields
//               label="Email"
//               type="text"
//               value={`${user.email}`}
//               name="email"
//               onChange={(e) => handleChange(e)}
//               onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
//             />

//             <InputFields
//               label="Stack"
//               type="text"
//               value={`${formData.stack}`}
//               name="stack"
//               onChange={(e) => handleChange(e)}
//               onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
//             />

//             <InputFields
//               label="Squad"
//               type="text"
//               value={`${formData.squad}`}
//               name="squad"
//               onChange={(e) => handleChange(e)}
//               onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleBlur(e)}
//             />
//             <button className='btn'>Edit User</button>
//           </Form>
//         </div>
//       </>
//     </></div>}
//       <tr key={index} onClick={closeModals} className='modalContainer' >
//         <td>{`${user.firstname} ${user.lastname}`}</td>
//         <td>{user.email}</td>
//         <td>{user.stack}</td>
//         <td>{`${user.squad}`}</td>
//         <td
          
//           data-index={index}
//           onClick={(e) => {
//             e.preventDefault();
//             !isActive ? setIsActive(bool) : setIsActive(bool);
//           }}
//         >
//           {" "}
//           ...
//           {isActive && (
//             <div className="modalBox">
//               <div onClick={handleEdit} >
//                 Edit
//               </div>
//               <div
//                 onClick={handleAction}
//                 data-action="activate"
//                 data-email={user.email}
//               >
//                 Activate
               
//               </div>
//               <div
//                 onClick={handleAction}
//                 data-action="deactivate"
//                 data-email={user.email}
//               >
//                 Deactivate
               
//               </div>

//               <div
//                 onClick={handleAction}
//                 data-action="delete"
//                 data-email={user.email}
//               >
//                 Delete
//               </div>
//             </div>
//           )}
//         </td>
//       </tr>
//       </>
//   );
// };

interface Prop {
  users: {
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    stack?: string;
    squad?: string;
  };
  token: string
}
const defaultFormField = {
  firstname: "",
  lastname: "",
  phone: "",
  stack: "",
  squad: "",
};
export default function ActionModal({
  users, token
}: Prop) {
  const [isActive, setIsActive] = useState(false);
  const [updateCall, setUpdateCall] = useState(false);
  const [formData, setFormData] = useState(defaultFormField);
  const { firstname, lastname, phone, stack, squad } = formData;
  const [uid] = useState(users.id);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    if (isActive) setIsActive(false);
    else {
      setIsActive(true);
      setUpdateCall(false);
    }
  };
  const handleAction = async (e: any) => {
        try {
          //activate and deactivate
          let{ email, action} = e.target.dataset;
         console.log(action)
          if ( action === "activate" || action === "deactivate") {
            await axios
              .put(`${process.env.REACT_APP_BASE_URL}/user/auth/${action}`, {email},{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then(({data}) => {
                console.log(data)
                return swal(`${data.message}`);
              })
              .catch((err) => {
                return swal(`${action} user went wrong. ${err.response.data.message}`);
              });
          }
    
          if (action === 'delete'){
            const willDelete = await swal({
              title: "Are you sure?",
              text: "Are you sure that you want to delete this User?",
              icon: "warning",
              dangerMode: true,
            });
             
            if (willDelete) {
              await axios
              .delete(`${process.env.REACT_APP_BASE_URL}/user/auth/${action}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                data: {
                  email
                }
              })
              .then(({data}) => {
                return swal(`${data.message}`);
              })
              .catch((err) => {
                return swal(`${action} user went wrong. ${err.response.data.message}`);
              });
            }
            
          }
    
        } catch ({response}) {
            console.log(response)
        }
       
      };
  const handleEdit = (e: any) => {
    e.preventDefault();
    if (updateCall) setUpdateCall(false);
    else setUpdateCall(true);
  };
  
  const onSubmit = (e: any) => {
    e.preventDefault();
    // updateUserAcct(
    //   uid,
    //   formData.firstname,
    //   formData.lastname,
    //   formData.phone,
    //   formData.squad,
    //   formData.stack
    // );
  };
  const handleWindow = (e: any) => {
    if (isActive) setIsActive(false);
  };
  return (
    <>
      <tr onClick={handleWindow} className="table-row">
        <td>
          {users.firstname} {users.lastname}
        </td>
        <td>{users.email}</td>
        <td>{users.stack}</td>
        <td>{users.squad}</td>
        <td className="dropdown">
          <button className="dropdown-btn" onClick={handleClick}>
            ...
          </button>
          {isActive && (
            <div className="dropdown-content">
              <div className="dropdown-item">
                <button name={users.id} onClick={handleEdit}>
                  Edit
                </button>
              </div>
              <div className="dropdown-item">
                <button name={users.email} onClick={handleAction} data-email={users.email} data-action='activate'>
                  Activate
                </button>
              </div>
              <div className="dropdown-item">
              <button name={users.email} onClick={handleAction} data-email={users.email} data-action='deactivate'>
                  Deactivate
                </button>
              </div>
              <div className="dropdown-item">
              <button name={users.email} onClick={handleAction} data-email={users.email} data-action='delete'>
                  Delete
                </button>
              </div>
            </div>
          )}
          {updateCall && (
            <div className="from">
              <p className="top-text"></p>
              <form onSubmit={(e) => onSubmit(e)}>
                <label className="formInput" htmlFor="">
                  Firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder={users.firstname}
                  onChange={(e) => handleChange(e)}
                  value={firstname}
                />
                <label className="formInput" htmlFor="">
                  Lastname
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder={users.lastname}
                  onChange={(e) => handleChange(e)}
                  value={lastname}
                />
                <label className="newpassword" htmlFor="">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+234-812-3456-789"
                  onChange={(e) => handleChange(e)}
                  value={phone}
                />
                <label className="newpassword" htmlFor="">
                  Stack
                </label>
                <input
                  type="text"
                  name="stack"
                  placeholder={users.stack}
                  onChange={(e) => handleChange(e)}
                  value={stack}
                />
                <label className="newpassword" htmlFor="">
                  Squad
                </label>
                <input
                  type="text"
                  name="squad"
                  placeholder={users.squad}
                  onChange={(e) => handleChange(e)}
                  value={squad}
                />
                <button type="submit" className="btn">
                  Update
                </button>
              </form>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

// export default ActionModal;
