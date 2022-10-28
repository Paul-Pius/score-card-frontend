import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { Form } from "../components";
import  SelectField  from "../components/SelectField";
import AdminFormCard from "../components/AdminFormCard"
import FormInput from "../components/FormInput";
import FormButtom from "../components/FormButton";
import { AdminHeading, Paragraph, FormCardBody, HorizontalLine } from "../styling/css";
import axios from "axios";
import swal from "sweetalert";
import validator from "validator";
import ViewAdminButton from "../components/ViewAllAdminButton";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UserTable } from "../components/viewAdminsTable/Table";
import { Link } from "react-router-dom";


type CreateAdminProps = {};

const CreateAdmin: FC = (props: CreateAdminProps) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        stack: "",
        squad: ""
    });

    const [viewAllAdminToggle, setViewAllAdminToggle] = useState(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleOnchangeStack (e: ChangeEvent<HTMLSelectElement>)  {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeRole = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            console.log(formData)
            // delete formData.role;
            const admin = await axios.post(`${process.env.REACT_APP_BASE_URL}/admin/create`, formData);
            // const admin = await axios.post(`http://localhost:5000/admin/create`, formData);
            if(admin.data.status === 200)  swal("Success", "Admin has been successfully created", "success");
        } catch {
            swal("Error", "Admin already exist", "error");
        }
    };

    return (
        <>
        {viewAllAdminToggle && (<div style={{marginTop: "1rem", marginLeft: "5rem", marginRight: "15rem"}}>
                <Link to="/adminmanagement"><div onClick={()=>{
                    setViewAllAdminToggle(false)
                }} className="Heading" ><AiOutlineArrowLeft /><span style={{marginLeft:"1rem"}}>Go back</span></div></Link>
                <div style={{ fontSize: '2rem'}}><p>All Admins</p></div>
          <UserTable />
          </div>)
          
          }

{!viewAllAdminToggle &&(<div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: '100%',
            boxSizing: 'border-box',
            paddingTop: "2.5rem"
        }}>

            <div style={{
                display: "flex", 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                width: '60%'
            }}>
        
                <AdminHeading>Create Admin</AdminHeading>
                <ViewAdminButton handleClick={()=>{
                    alert("welcome")
                    setViewAllAdminToggle(true)
                    }
                } text="View All Admins" />
            </div>
            <AdminFormCard>
                <div>
                    <Paragraph>Fill in all required details.</Paragraph>
                    <HorizontalLine />
                </div>
                <div style={{
                    paddingRight: "2.5rem",
                    paddingLeft: "2.5rem",
                    boxSizing: "border-box"
                }}>
                    <Form onSubmit={handleSubmit}>
                        <FormInput
                            label="First Name"
                            placeholder="Enter First Name"
                            type="text"
                            value={formData.firstname}
                            name="firstname"
                            onChange={(e) => handleChange(e)}
                            onBlur={(e) => handleBlur(e)}
                            />

                        {formData.firstname.length === 0 ? (
                            <span style={{ color: "red" }}></span>
                        ) : formData.firstname.length > 0 &&
                        formData.firstname.length < 3 ? (
                            <span style={{ color: "red" }}>
                                First name must be greater than three characters
                            </span>
                        ) : (
                            <span style={{ color: "green" }}></span>
                            )}
                        {/* Super Admin Sign up Validation */}

                        <FormInput
                            label="Last Name"
                            placeholder="Enter Last Name"
                            type="text"
                            value={formData.lastname}
                            name="lastname"
                            onChange={(e) => handleChange(e)}
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleBlur(e)
                            }
                            />
                        <FormInput
                            label="Email"
                            placeholder="Enter Email"
                            type="email"
                            value={formData.email}
                            name="email"
                            onChange={(e) => handleChange(e)}
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleBlur(e)
                            }
                        />

                        {formData.email.length === 0 ? (
                            <span style={{ color: "red" }}></span>
                        ) : formData.email.length > 0 &&
                            validator.isEmail(formData.email) ? (
                                <span style={{ color: "green" }}>Valid Email</span>
                                ) : (
                            <span style={{ color: "red" }}>Please enter a valid email</span>
                            )}

                        <SelectField
                            label="Stack"
                            optionData={['Select', 'Android', 'Node', 'C#', 'JAVA']}
                            value={formData.stack}
                            handleChange={handleOnchangeStack}
                            name="stack"
                            />
                            
                        {/* <SelectField
                            label="Assing Role"
                            optionData={['Select', 'Satck lead', 'Stack associate', 'Program associate', 'Other']}
                            value={formData.role}
                            handleChange={handleOnchangeRole}
                            name="role"
                            
                            /> */}
                        <FormInput
                            label="Squad"
                            placeholder="Squad"
                            type="squad"
                            value={formData.squad}
                            name="squad"
                            onChange={(e) => handleChange(e)}
                            onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleBlur(e)
                            }
                            />
                        <FormButtom text="Create Admin" />
                    </Form>
                </div>
            </AdminFormCard>
        </div>)
}        
                            </>
    );

};

export default CreateAdmin;