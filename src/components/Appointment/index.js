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
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW"; 
const CREATE = "CREATE"; 
const SAVING = "SAVING"; 
const CONFIRM = "CONFIRM";
const DELETE = "DELETE";
const EDIT = "EDIT";
const ERROR_SAVE = 'ERROR_SAVE';
const ERROR_DELETE = 'ERROR_DELETE';
 
 
 
export default function Appointment(props){
  const interviwers = props.interviewers;

  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  function save (name, interviewer) {

    const interview = {

      student: name,
      interviewer

    };

    if (!(name)) {

      alert('Hey, Name needs to be entered.')
  

    } else if(!(interviewer)) {
  
      alert('Hey, Select an interviewer Please!')
    
    } else {
      
      transition(SAVING);
      props.bookInterview(props.id, interview)
      .then(()=>{transition(SHOW)})
      .catch(error => transition(ERROR_SAVE, true));;    
    
    }
  }

  function deleteAppointment() {
    transition(DELETE, true);
    props.cancelInterview(props.id).then(() => {
      transition(EMPTY);
    })
    .catch(error => transition(ERROR_DELETE, true));;
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
        onEdit={() => transition(EDIT)}
      />
    )}
    {mode === EDIT && (
      <Form
        value={props.interview.student}
        interviewers={interviwers}
        onCancel={() => back(Show)}
        onSave={save}
      />
    )}
    {mode === ERROR_SAVE && (
      <Error
        message="There was an error saving your appointment"
        onClose={() => back(Show)}
      />
    )}
    {mode === ERROR_DELETE && (
      <Error
        message="There was an error deleting your appointment"
        onClose={() => back(Show)}
      />
    )}
    {mode === ERROR_SAVE && (
      <Error
        message="There was an error saving your appointment"
        onClose={back}
      />
    )}
    {mode === ERROR_DELETE && (
      <Error
        message="There was an error deleting your appointment"
        onClose={back}
      />
    )}

    </article> 
 )

 

 
}
