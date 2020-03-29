import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "../Logo/Logo.module.css";

const logo = props => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="Burger-Builder" />
    </div>
  );
};

export default logo;
