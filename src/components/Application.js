/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "components/Application.scss";

//import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

// import "src/components/Appointment";
import Appointment from "components/Appointment";


import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import useVisualMode from "hooks/useVisualMode"


const axios = require('axios').default;



export default function Application(props) {
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {} 
  });

  const setDay = day => setState({ ...state, day });

  useEffect(()=> {
    Promise.all([
    
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    
    ]).then((all) => {
      console.log(all)
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));      

    })
  },[])

  const dailyAppointments = getAppointmentsForDay(state,state.day);
  const dailyInterviewers = getInterviewersForDay(state,state.day);
  
  function bookInterview (id, newInterview) {
    const appointmentsCopy = { ...state.appointments };
    const newAppointment = { ...appointmentsCopy[id], interview: newInterview };
    appointmentsCopy[id] = newAppointment;
    setState({ ...state, appointments: appointmentsCopy });
  }



  //map function 
  const appointments = dailyAppointments.map(appointment => {
  
    const interview = getInterview(state, appointment.interview);

    //
    const interviewer = function () {
      dailyInterviewers.forEach((interviewer) => {
        if (appointment.interview.interviewer === interviewer.id) {
          return interviewer;
        }
      });
    };
 

    return (
    <Appointment 
    key = {appointment.id}
    id = {appointment.id}
    time = {appointment.time}
    interview = {interview}
    interviewers = {dailyInterviewers}  
    interviewer = {interviewer}
    bookInterview = {bookInterview}

    />
    );

  });

 // const chooseDay = () => {

  //   setDay(props.day);

  // }


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
    setDay={setDay}
    />  
    </nav>
    <img
      className="sidebar__lhl sidebar--centered"
      src="images/lhl.png"
      alt="Lighthouse Labs"
    />
      </section>
      <section className="schedule">
      {appointments}      
      <Appointment key="last" time="5pm" /> 
      </section>
    </main>
  );
}


