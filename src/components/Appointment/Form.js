import React,{ useState } from "react";
import Button from  "components/Button";
import InterviewerList from  "components/InterviewerList";
 
 
export default function Form(props){
const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.value || null)
// const [error, setError] = useState("");
 
 
//Helper function to clear all fields
const reset = () => {
 setName("")
 setInterviewer(null)
}
 
// cancel function when user click cancel button
function cancel () {
 // props.onCancel;
 reset();
 props.onCancel()
}
 
 
 
 return(
  <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
   <form autoComplete="off" onSubmit={event => event.preventDefault()}>
     <input
       className="appointment__create-input text--semi-bold"
       name="name"
       type="text"
       placeholder="Enter Student Name"
       onChange ={event => setName(event.target.value)}
     />
   </form>
   <InterviewerList interviewers={props.interviewers} value={interviewer}  setInterviewer= {setInterviewer}
   />
    </section>
    <section className="appointment__card-right">
    <section className="appointment__actions">
     <Button danger onClick={cancel}>Cancel</Button>
     <Button confirm onSubmit={event => event.preventDefault()} onClick = {event => props.onSave(name,interviewer)}>Save</Button>
    </section>
    </section>
  </main>
 
 )
}
