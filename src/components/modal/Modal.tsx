import React, { Children } from "react";
import cherechi from "../../assets/cherechi.jpg";
import Profile from "../profile-img/Profile";
import { ModalData } from "../../data/ModalData";
import "./Modal.css";

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
};

const Modal = ({
  title,
  topModal,
  topModalLeft,
  topModalRight,
  bottomModal,
  bottomModalLeft,
  top,
  left,
  right,
  bottom,
  opacity,
  onClose,
}: ModalProps) => {
  const _nullClick = (event: any) => {
    event.stopPropagation();
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
      <div
        className="modal_box"
        onClick={_nullClick}
        style={{
          borderRadius: "5px",
          backgroundColor: "#fefefe",
          fontSize: "15px",
          width: "381px",
          height: "326px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          zIndex: "10",
          position: "fixed",
          top: top ? top : "80px",
          left: left ? left : "1000px",
          //   right: "-600px",
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
          <div>
            <Profile pic={cherechi} imageHeight={"60"} imageWidth={"60"} />
          </div>
          {/*right */}
          <div style={{
            width: '117px',
            height: '13px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px',
            lineHeight: '14px',
            
            color: '#03435F',
          }}>
            <p>Cherechi</p>
            <p>Stack associate</p>
          </div>
        </div>

        <div style={{}}>
          <ul className="modal--list">
            {ModalData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="modal--row"
                  onClick={() => {
                    window.location.href = item.path;
                  }}
                  style={{ display: "flex" }}
                >
                  <span style={{ flex: "0.3" }} id="icon">
                    {item.icon}
                  </span>
                  <span style={{ flex: "0.3" }} id="title">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
