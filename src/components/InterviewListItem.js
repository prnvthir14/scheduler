/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";

import "components/InterviewListItem.scss";

import classnames from 'classnames';

export default function InterviewerListItem(props) {
   //
   console.log('intervierweListItem:',props);

   //props contain:
   // id:number - the id of the interviewer
   // name:string - the name of the interviewer
   // avatar:url - a url to an image of the interviewer
   // selected:boolean - to determine if an interview is selected or not -- APPLIES SCSS IF SELECTED
   // setInterviewer:function - sets the interviewer upon selection

   const interviewerClass = classnames(
      "interviewers__item",
      {"interviewers__item--selected":props.selected}
   )
   
   return (        

      <li 
      className={interviewerClass} 
      onClick={props.setInterviewer}
      key = {props.id}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
      
   );   


}




   




   ///// inside previous component function decl:
   // const dayClass = classnames(
   //    "day-list__item",
   //    {"day-list__item--selected":props.selected, 
   //    "day-list__item--full":!(props.spots)})


   // const formatSpots = function (props) {

   //    if (props.spots > 1) {
   
   //    return `${props.spots} spots remaining`;
   
   //    } else if (props.spots === 1) {
   
   //    return `${props.spots} spot remaining`;
   
   //    } else {
   
   //    return `no spots remaining`
   
   //    } 
         
   // }   


   // return (
   //    <li
   //    className = {dayClass}          
   //    onClick = {() => props.setDay(props.name)}       
   //    >
   //       <h2 className="text--regular">{props.name}</h2>
   //       <h3 className="text--light">{formatSpots(props)}</h3>
     
   //    </li>
   // );    





