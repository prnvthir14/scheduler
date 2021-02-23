/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
import React from "react";

import "components/DayListItem.scss";

import classnames from 'classnames';

export default function DayListItem(props) {

   const dayClass = classnames(
      "day-list__item",
      {"day-list__item--selected":props.selected, 
      "day-list__item--full":!(props.spots)})


   const formatSpots = function (props) {

      if (props > 1) {
   
      return `${props} spots remaining`;
   
      } else if (props === 1) {
   
      return `${props} spot remaining`;
   
      } else {
   
      return `no spots remaining`
   
      } 
         
   }   


   return (
      <li
      className = {dayClass}          
      data-testid="day"
      onClick = {() => props.setDay(props.name)}      
      >
         <h2 className="text--regular">{props.name}</h2>
         <h3 className="text--light">{formatSpots(props.spots)}</h3>
     
      </li>
   );    


}


