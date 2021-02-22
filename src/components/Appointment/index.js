//Appointment component

import React from "react";
import "components/Appointment/styles_appointment.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";

const EMPTY = "EMPTY";
const SHOW = "SHOW"; 
const CREATE = "CREATE"; 
const SAVING = "SAVING"; 
const CONFIRM = "CONFIRM";
const DELETE = "DELETE";
 
 
 
export default function Appointment(props){
  const interviwers = props.interviewers;

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save (name, interviewer) {

    const interview = {

      student: name,
      interviewer

    };

    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(()=>{transition(SHOW)});    

  }

  function deleteAppointment() {
    transition(DELETE);
    props.cancelInterview(props.id).then(() => {
      transition(EMPTY);
    });
  }


 
  return(
 
    <article className="appointment">
     <Header time={props.time} />
     {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
     {mode === CREATE && (
       <Form
         interviewers={interviwers}
         onCancel={() => back(Empty)}
         onSave={save}
       />
     )}
     {mode === CONFIRM && (
       <Confirm
         message="Are you sure you want to delete?"
         onCancel={() => back(Show)}
         onConfirm={deleteAppointment}
       />
     )}
 
     {mode === SAVING && <Status message="Saving" />}
     {mode === DELETE && <Status message="Deleting" />}
     {mode === SHOW && (
       <Show
         student={props.interview.student}
         interviewer={props.interview.interviewer}
         onDelete={() => transition(CONFIRM)}
         onEdit= {console.log('hello')}
       />
     )}


      </article>

 
 )
}
