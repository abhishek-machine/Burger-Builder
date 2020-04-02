import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "../Logo/Logo.module.css";

const logo = props => {
  console.log(props);
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="Burger-Builder" />
    </div>
  );
};

export default logo;
