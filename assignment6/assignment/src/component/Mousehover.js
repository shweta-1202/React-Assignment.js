import React, { useState } from "react";
import './style.css'

const Mousehover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    console.log("Mouse entered!");
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse left!");
    setIsHovered(false);
  };

  const divStyle = {
    backgroundColor: isHovered ? "aqua" : "white",
    width: "200px",
    height: "200px",
    margin: "20px auto",
    textAlign: "center",
    lineHeight: "200px",
    border: "1px solid black",
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={divStyle}
    >
      Mousehover!
    </div>
  );
};

export default Mousehover;
