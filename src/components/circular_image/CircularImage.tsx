import React from "react";

interface CircularImageProps {
  top_circle: any;
  bottom_circle: string;
  text: string;
}

const CircularImage = ({
  top_circle,
  bottom_circle,
  text,
}: CircularImageProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: "rgba(0, 0, 0, 0.04)",
          border: "1px solid rgba(20, 168, 0, 0.3)",
          margin : "0 auto",
        }}
      >
        <div
          className="top_circle"
          style={{
            backgroundImage: `url(${top_circle})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {top_circle ? top_circle : null}
        </div>
      </div>
      <div style={{
            marginTop: "1.5rem",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "1rem"
        }}>
          {bottom_circle ? bottom_circle : null}
          {text ? text : null}
        </div>
    </>
  );
};

export default CircularImage;
