/* eslint-disable no-unused-vars */
import React from "react";

import "components/Button.scss";

import classNames from 'classnames';

//button component
export default function Button(props) {
   // let buttonClass = "button";
 
   // if (props.confirm) {
   //   buttonClass += " button--confirm";
   // }
 
   // if (props.danger) {
   //   buttonClass += " button--danger";
   // }
 
   // return (
   //   <button
   //     className={buttonClass}
   //     onClick={props.onClick}
   //     disabled={props.disabled}
   //   >
   //     {props.children}
   //   </button>
   // );

   // refactoring using classNames
   //can pass strings for classes that will apply in all states (button )
   // and objects where the key:className and value: condition that needs to be true for class to apply 
   // eslint-disable-next-line no-unreachable
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

