import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import "./ModalStack.css";
import FormInput from "../FormInput";
import FormButton2 from "../FormButton2";
import swal from "sweetalert"
import { type } from "os";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  closeModal?: any;
};

const ModalStack = ({
  title,
  topModal,
  topModalLeft,
  topModalRight,
  bottom,
  bottomModal,
  bottomModalLeft,
  top,
  left,
  right,
  opacity,
  onClose,
  closeModal,
}: ModalProps) => {
  const [input, setInput] = useState("");
  const [stackName, setStackName] = useState("");
  const [stackDescription, setStackDescription] = useState("");
  const [payload, setPayload] = useState({
    stackName: "",
    stackDescription: "",
    stackImg: null,
  });
  const [imageFile, setImageFile] = useState<any>(null);
  const img = useRef(null);
  // const navigate = useNavigate();

  const handleChange = (event: any) => {
    setInput(event.target.value.trim());
  };

  const _nullClick = (event: any) => {
    event.stopPropagation();
  };

  //stackName handler
  const nameHandler: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPayload((prev: any) => {
      return { ...prev, stackName: e.target.value };
    });
  };
  //stackDescription handler
  const stackHandler: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setPayload((prev: any) => {
      return { ...prev, stackDescription: e.target.value };
    });
  };

  //image upload handler
  const imageUploadHandler: (e: ChangeEvent<HTMLInputElement>) => void = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
      if (file !== undefined) {
        setPayload((prev: any) => {
          return { ...prev, stackImg: file };
        });
      }
    }
  };

  //form submit handler
 const token = localStorage.getItem("token");
 const formSubmitHandler: (e: FormEvent<HTMLFormElement>) => void = (
   e: FormEvent<HTMLFormElement>
 ) => {
   e.preventDefault();
   const formData = new FormData();
   console.log(payload);
   if (payload.stackName !== undefined && payload.stackImg !== undefined) {
     axios
       .post(`${process.env.REACT_APP_BASE_URL}/stack/create`, {...payload}, {
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "multipart/form-data",
         },
       })
       .then((response) => {
         setTimeout(() => {
           // navigate('/stack');
           console.log(response);
           window.location.reload();
         }, 500);
       })
       .catch((error) => {
         console.log(error);
       });
   }
 };

return (
    <>
      <div
        className="modal_overlay"
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
      <form onSubmit={formSubmitHandler}>
        <div
          className="modal_box"
          onClick={_nullClick}
          style={{
            backgroundColor: "#fefefe",
            fontSize: "15px",
            width: "650px",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            zIndex: "10",
            position: "fixed",
            top: top ? top : "17rem", //toggele this
            left: left ? left : "32rem",
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
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#03435F",
                fontWeight: "600",
                fontSize: "24px",
                marginBottom: "0.4rem",
              }}
            >
              <div>Create a Stack</div>
              <div>
                <button
                  onClick={() => {
                    closeModal(false);
                  }}
                  style={{
                    background: "#ffffff",
                    color: "#000000",
                    border: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                  }}
                >
                  <CgClose />
                </button>
              </div>
            </div>

            {/*right */}
          </div>
          <div
            style={{
              padding: "0.75rem",
            }}
          >
            {/* <form onSubmit={handleChange}> */}
            <FormInput
             type="text"
              label="Stack Name"
              placeholder="Enter stack name"
              onChange={nameHandler}
              value={payload.stackName}
            />
            <FormInput
              type="text"
              label="Stack Description"
              placeholder="Enter description"
              onChange={stackHandler}
              value={payload.stackDescription}
            />
            <FormInput
              // accept=".jpeg .svg .png"
              label="ImageUrl"
              placeholder="Upload Image"
              onChange={imageUploadHandler}
              // value={input}
              ref={img}
              type="file"
            />

            <FormButton2
              text="Done"
              type={"submit"}
              handleClick={() => {
                setTimeout(()=>{
                  closeModal(false);

                },1000)
              }}
            />
            {/* </form> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default ModalStack;
