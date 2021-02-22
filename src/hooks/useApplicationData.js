import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  // reloads data from the database, and then setState
  function getData() {
    return Promise.all([
      Promise.resolve(axios.get("/api/days")),
      Promise.resolve(axios.get("/api/appointments")),
      Promise.resolve(axios.get("/api/interviewers"))
    ]).then(all => {
      return setState(prev => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data
      }));
    });
  }
  
  useEffect(() => {
    getData();
  }, []);
  
  function bookInterview (id, newInterview) {

    const appointmentsCopy = { ...state.appointments };
    const newAppointment = { ...appointmentsCopy[id], interview: newInterview };
    appointmentsCopy[id] = newAppointment;
    setState({ ...state, appointments: appointmentsCopy });
    //console.log('STATE line 62',state.appointments)
    // return axios.put(`/api/appointments/${id}`, { newAppointment }).then(getData).catch((err)=>{console.log('error LINE 63:', err)});
    return axios.put(`/api/appointments/${id}`, newAppointment)
    .then(()=> {

      const appointment = {...state.appointments[id], interview: newInterview };      
      const appointments = { ...state.appointments, [id]: appointment };
      setState({ ...state, appointments: appointments });
      

    })
    .catch((err)=>{console.log('error LINE 63:', err)});

  }
  
  function cancelInterview(id, interview) {
    interview = null;
    const apptURLId = `/api/appointments/${id}`;
  
    return axios.delete(apptURLId, { interview }).then(() => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview },
      };
  
      const appointments = { ...state.appointments, [id]: appointment };
  
      setState({ ...state, appointments: appointments });
    });
  }
  
  return { state, setState, getData, bookInterview, cancelInterview };
}
 





