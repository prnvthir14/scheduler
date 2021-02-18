/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "components/Application.scss";

//import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

// import "src/components/Appointment";
import Appointment from "components/Appointment";

const axios = require('axios').default;


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


const appointment = appointments.map((eachAppointment)=> {
  return(
    <Appointment key = {eachAppointment.id}{...eachAppointment} />    
  )
 })
 


export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {}
  });

  useEffect(() => {
    axios.get("/api/days").then(response => setDays(response.data));
  }, []);


  

  // const chooseDay = () => {

  //   setDay(props.day);

  // }
  const setDay = day => setState({ ...state, day });

  const setDays = (days) => {
    setState(prev => ({ ...prev, days }));
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
    days={state.days}
    day={state.day}
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
      {appointment}      
      <Appointment key="last" time="5pm" /> 
      </section>
    </main>
  );
}


