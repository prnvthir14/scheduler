/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import "components/Application.scss";

//import DayListItem from "components/DayListItem";
import DayList from "components/DayList";

// import "src/components/Appointment";
import Appointment from "components/Appointment";

import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "helpers/selectors";

import useVisualMode from "hooks/useVisualMode";
// import {useApplicationData, spotsRemaining} from "hooks/useApplicationData"

import useApplicationData from "hooks/useApplicationData";

const axios = require("axios").default;

export default function Application(props) {
  const {
    state,
    setState,
    bookInterview,
    cancelInterview,
  } = useApplicationData();

  const setDay = (day) => setState({ ...state, day });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const dailyInterviewers = getInterviewersForDay(state, state.day);

  //map function
  const appointments = dailyAppointments.map((appointment) => {
    
    const interview = getInterview(state, appointment.interview);

    function interviewer() {
      dailyInterviewers.forEach((interviewer) => {
        if (appointment.interview.interviewer === interviewer.id) {
          return interviewer;
        }
      });
    }

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={dailyInterviewers}
        interviewer={interviewer}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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
        <nav className="sidebar__menu">
          <DayList days={state.days} day={state.day} setDay={setDay} />
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
