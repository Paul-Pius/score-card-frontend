import React from "react";
import "./StackCard.css";
import node from "../../assets/node.svg";

interface Istackcard {
  img?: string,
  title?: string
}

const StackCard = ({img, title}: Istackcard) => {
  return (
    <>
      <div className="each-stack">
        <div className="img-stack">
          <img src={`data:image/jpg;base64, ${img}`} height="70" width="70" style ={{borderRadius: "50%"}}alt={title} />
        </div>
        <p>{title}</p>
      </div>
    </>
    
  );
};

export default StackCard;
