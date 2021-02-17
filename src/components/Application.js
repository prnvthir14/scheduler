/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "components/Application.scss";

//import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

// import "src/components/Appointment";
import Appointment from "src/components/Appointment";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "3pm",
    interview: {
      student: "Lydia Miller",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 4,
    time: "4pm",
    interview: {
      student: "Lydia",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  }
];

//DayList 
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

const appointment =appointments.map((eachAppointment)=> {
  return(
    <Appointment key = {eachAppointment.id}{...eachAppointment} />    
  )
 })
 


export default function Application(props) {
  
  const [day, setDay] = useState("Monday")
  
  const chooseDay = () => {

    setDay(props.day);

  }


  return (
    <main className="layout">
      <section className="sidebar">
      <img
      className="sidebar--centered"
      src="images/logo.png"
      alt="Interview Scheduler"
    />
    <hr className="sidebar__separator sidebar--centered" />
    <nav className="sidebar__menu" >
    <DayList
    days={days}
    day={day}
    setDay={day => console.log(day)}
    />  
    </nav>
    <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
    />
      </section>
      <section className="schedule">
            
      <Appointment key="last" time="5pm" /> 
      </section>
    </main>
  );
}


