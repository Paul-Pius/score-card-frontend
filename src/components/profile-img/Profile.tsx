import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./Profile.css";

type ProfileProps = {
  children?: React.ReactNode;
  pic?: any;
  text?: string;
  stackRole?: string;
  imageHeight?: string;
  imageWidth?: string;
  textFontSize?: string;
  textColor?: string;
  textFontFamily?: string;
  textFontWeight?: string;
  textBackgroundColor?: string;
  alignText?: string;
};

const Profile = ({
  pic,
  text,
  stackRole,
  imageHeight,
  imageWidth,
  textFontSize,
  textColor,
  textFontFamily,
  textFontWeight,
  textBackgroundColor,
  alignText,
}: ProfileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(new FormData());

  const toggleClick = () => {
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  const handleSubmit = (e: any) => {
    console.log(formData);
  }

  return (
    <>
      <div className="profile--container" onClick={toggleClick}>
        {pic && (
          <>
            <img
              className="profile--img"
              height={imageHeight}
              width={imageWidth}
              src={pic}
            />
            {/* <form className="profile--form" >
              <input 
                type='file'
                name="img"
                onChange={(e) => {
                  const fileList = e.target.files || [];
                  if (fileList.length > 0) {
                    const file = fileList[0];
                    // return setFormData(formData => formData.append("img", file));
                  }
                  // setFormData({ ...formData, img: e?.currentTarget?.files[0] ? e?.currentTarget?.files[0] :  null })
                }
              }
              />
              <button onClick={handleSubmit}>
                Upload
              </button>
            </form> */}

          </>
        )}
        <div className="profile--name">
          <span
            style={{
              fontSize: { textFontSize } ? textFontSize : "1.5rem",
              color: textColor ? textColor : "#000000",
              fontFamily: textFontFamily ? textFontFamily : "sans-serif",
              fontWeight: textFontWeight ? textFontWeight : "400",
              // backgroundColor: textBackgroundColor ? textBackgroundColor : '#F8F9FA',
              margin: "auto",
              display: "inline-block",
            }}
          >
            {text}
          </span>
        </div>
      </div>
      {isOpen && <Modal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Profile;
