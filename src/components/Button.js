/* eslint-disable no-unused-vars */
import React from "react";

import "components/Button.scss";

import classNames from 'classnames';

//button component
export default function Button(props) {

   const classesforbutton = classNames("button",{
      " button--confirm":props.confirm, 
      "  button--danger":props.danger});      

   return (
      <button
      className = {classesforbutton}          
      onClick = {props.onClick} 
      disabled = {props.disabled}
      >
        {props.children}
      </button>
    );
   
}

