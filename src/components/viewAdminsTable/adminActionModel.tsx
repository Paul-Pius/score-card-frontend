import React, { FC, useState, useEffect, Fragment, ChangeEvent } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";
import "./getAdmin.css";
import { Form } from "./../../components";
import Buttons from "./../../components/buttons/Buttons";
import InputFields from "./../../components/inputs/InputFields";

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
  stack: "",
  squad: "",
};
export default function ActionModal({
  users, token
}: Prop) {
  const [isActive, setIsActive] = useState(false);
  const [updateCall, setUpdateCall] = useState(false);
  const [formData, setFormData] = useState(defaultFormField);
  const { firstname, lastname, stack, squad } = formData;
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
              .put(`${process.env.REACT_APP_BASE_URL}/admin/${action}`, {email},{
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
              .delete(`${process.env.REACT_APP_BASE_URL}/admin/${action}`, {
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
  
const onSubmit = async(e: any) => {
    e.preventDefault();
    try {
            await axios
                .put(`${process.env.REACT_APP_BASE_URL}/admin/edit`, {...formData, email: e.target.dataset.email},{
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                })
                .then(({data}) => {
                  console.log(data)
                  setUpdateCall(false)
                  setIsActive(false)
                  
                  return swal(`${data.message}`);
                  
                })
                .catch((err) => {
                  return swal(`$${err.response.data.message}`);
                });
            }
           catch (error) {
            
          }
 
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
            <div className="modalBox">
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
            <div className="formModal">
              <p className="top-text"></p>
              <form onSubmit={(e) => onSubmit(e)} data-email={users.email}>
                <div>
                  <div>
                <label className="formInput" htmlFor="">
                  Firstname
                </label>
                </div>
                <div>
                <input
                  type="text"
                  name="firstname"
                  placeholder={users.firstname}
                  onChange={(e) => handleChange(e)}
                  value={firstname}
                />
                </div>
                </div>
                <div>
                  <div>
                <label className="formInput" htmlFor="">
                  Lastname
                </label>
                </div>
                <div>
                <input
                  type="text"
                  name="lastname"
                  placeholder={users.lastname}
                  onChange={(e) => handleChange(e)}
                  value={lastname}
                /></div>
                </div>
                <div>
                  <div>
                <label className="newpassword" htmlFor="">
                  Stack
                </label>
                </div><div>
                <input
                  type="text"
                  name="stack"
                  placeholder={users.stack}
                  onChange={(e) => handleChange(e)}
                  value={stack}
                />
                </div>
                </div>
                <div>
                  <div>
                <label className="newpassword" htmlFor="">
                  Squad
                </label>
               
                </div>
                <div>
                 
                <input
                  type="text"
                  name="squad"
                  placeholder={users.squad}
                  onChange={(e) => handleChange(e)}
                  value={squad}
                /> </div>
                </div>
                
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

