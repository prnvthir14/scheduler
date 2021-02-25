//Appointment component

import React, { useEffect } from "react";
import "components/Appointment/styles_appointment.scss";
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Errors from "./Error";

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

  useEffect(()=>{
    if(props.interview && mode === 'EMPTY'){
      //debugger
      transition(SHOW);

    } 
    if (props.interview === null && mode === 'SHOW'){

      transition(EMPTY);

    }

  },[props.interview, transition, mode])



  function save (name, interviewer) {

    const interview = {

      student: name,
      interviewer

    };

    transition(SAVING);
    props.bookInterview(props.id, interview)
    .then(()=>{transition(SHOW)})
    .catch(error => 
      {console.log('ERROR INDEX JS 44', error)
      transition(ERROR_SAVE, true)});;    
        
  }

  function saveOnEdit (name, interviewer) {

    const interview = {

      student: name,
      interviewer

    };

    transition(SAVING);
    props.editInterview(props.id, interview)
    .then(()=>{transition(SHOW)})
    .catch(error => transition(ERROR_SAVE, true));;    
        
  }

  function deleteAppointment() {
    transition(DELETE);
    props.cancelInterview(props.id).then(() => {
      //debugger
      transition(EMPTY);
    })
    .catch(error => transition(ERROR_DELETE, true));;
  }


 
  return(
 
    <article className="appointment" data-testid="appointment">
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
        name={props.interview.student}
        interviewers={interviwers}
        onCancel={() => back(Show)}
        onSave={saveOnEdit}
      />
    )}
    {mode === ERROR_SAVE && (
      <Errors 
        message="There was an error saving your appointment"
        onClose={() => back(Show)}
      />
    )}
    {mode === ERROR_DELETE && (
      <Errors
        message="There was an error deleting your appointment"
        onClose={() => back(Show)}
      />
    )}


    </article> 
 )

 

 
}