/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "components/Application.scss";

//import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

// import "src/components/Appointment";
import Appointment from "components/Appointment";


import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

import useVisualMode from "hooks/useVisualMode"
// import {useApplicationData, spotsRemaining} from "hooks/useApplicationData"

import useApplicationData from "hooks/useApplicationData"


const axios = require('axios').default;

export default function Application(props) {
  const {
    state,
    setState,
    bookInterview,
    cancelInterview
  } = useApplicationData();



//export default function Application(props) {
  
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: {} 
  // });

  const setDay = day => setState({ ...state, day });

  // function getData() {
  //   return Promise.all([
  //     Promise.resolve(axios.get("/api/days")),
  //     Promise.resolve(axios.get("/api/appointments")),
  //     Promise.resolve(axios.get("/api/interviewers"))
  //   ]).then(all => {
  //     return setState(prev => ({
  //       ...prev,
  //       days: all[0].data,
  //       appointments: all[1].data,
  //       interviewers: all[2].data
  //     }));
  //   });
  // }

  // useEffect(() => {
  //   getData();
  // }, []);
  
  
  //newAppointment
  //
  
  // function bookInterview (id, newInterview) {

  //   const appointmentsCopy = { ...state.appointments };
  //   const newAppointment = { ...appointmentsCopy[id], interview: newInterview };
  //   appointmentsCopy[id] = newAppointment;
  //   setState({ ...state, appointments: appointmentsCopy });
  //   //console.log('STATE line 62',state.appointments)
  //   // return axios.put(`/api/appointments/${id}`, { newAppointment }).then(getData).catch((err)=>{console.log('error LINE 63:', err)});
  //   return axios.put(`/api/appointments/${id}`, newAppointment)
  //   .then(()=> {

  //     const appointment = {...state.appointments[id], interview: newInterview };      
  //     const appointments = { ...state.appointments, [id]: appointment };
  //     setState({ ...state, appointments: appointments });
      

  //   })
  //   .catch((err)=>{console.log('error LINE 63:', err)});

  // }

  // function cancelInterview(id, interview) {
  //   interview = null;
  //   const apptURLId = `/api/appointments/${id}`;
  
  //   return axios.delete(apptURLId, { interview }).then(() => {
  //     const appointment = {
  //       ...state.appointments[id],
  //       interview: { ...interview },
  //     };
  
  //     const appointments = { ...state.appointments, [id]: appointment };
  
  //     setState({ ...state, appointments: appointments });
  //   });
  // }



  const dailyAppointments = getAppointmentsForDay(state,state.day);
  const dailyInterviewers = getInterviewersForDay(state,state.day);

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
    cancelInterview = {cancelInterview}
    

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


