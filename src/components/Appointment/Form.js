import React,{ useState } from "react";
import Button from  "components/Button";
import InterviewerList from  "components/InterviewerList";
 
 
export default function Form(props){
const [name, setName] = useState(props.name || "");
const [interviewer, setInterviewer] = useState(props.value || null)
// const [error, setError] = useState("");
//console.log('PROPS. form.js - ', props); 
 
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

const save = function () {

  props.onSave(name, interviewer);

}

//form component using passed props
 return(
  <main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
   <form autoComplete="off" onSubmit={event => event.preventDefault()} >
     <input
       className="appointment__create-input text--semi-bold"
       name="name" 
       type="text"
       placeholder="Enter Student Name"
       onChange ={event => setName(event.target.value)}
       required
     />
   </form>
   <InterviewerList interviewers={props.interviewers} value={interviewer}  setInterviewer= {setInterviewer} 
   />
    </section>
    <section className="appointment__card-right">
    <section className="appointment__actions">
     <Button danger onClick={cancel}>Cancel</Button>
     <Button onClick={save} confirm >Save</Button>
    </section>
    </section>
  </main>
 
 )
}
