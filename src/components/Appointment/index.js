//Appointment component

import React from "react";
import "components/Appointment/styles_appointment.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";

const EMPTY = "EMPTY";
const SHOW = "SHOW"; 
const CREATE = "CREATE"; 
 
 
export default function Appointment(props){
  const interviwers = props.interviewers;

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save (name, interviewer) {

    const interview = {

      student: name,
      interviewer

    };

    props.bookInterview(props.id, interview);
    transition(SHOW);

  }
 
  return(
 
    <article className="appointment">
      <Header time = {props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
      {mode === SHOW && (<Show student={props.interview.student} interviewer={props.interview.interviewer}/>)}
      {mode === CREATE && (<Form interviewers = {interviwers} onCancel={() => {back(EMPTY)}} onSave={save} />)}    


      </article>

 
 )
}
