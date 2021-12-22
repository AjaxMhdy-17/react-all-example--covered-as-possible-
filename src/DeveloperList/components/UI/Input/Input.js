import React from "react";

import classes from "./input.module.css";

const Input = ({ type, placeholder , ...rest }) => {
  return ( 
    <input 
        type={type} 
        className={classes.input_field} 
        placeholder={placeholder}
        {...rest}
    />
  )
};

export default Input;
