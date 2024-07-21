import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("Hii this is Shweta!");
  };

  return <button onClick={handleClick}>Click me</button>;
};

export default Button;
