import React from 'react';
import InterviewListItem from 'components/InterviewListItem';

import "components/InterviewList.scss";
import "components/InterviewListItem.scss";

import PropTypes from 'prop-types';

function InterviewerList(props){
  //props contain:
  // interviewers:array - an array of objects containing the information of each interviewer
  // interviewer:number - the id of an interviewer
  // setInterviewer:function - a function that accepts an interviewer id
  
  //check how he console logs props in vid
  //console.log('intervierList:',props)

  // ));

  const listedItem = props.interviewers.map(interviewer => {
    return (
      <InterviewListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />
    );
  });

  return (

    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{listedItem}</ul>
    </section>

  ); 

}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}; 

export default InterviewerList


/* template html from DayList.js

<DayListItem
key = {day.id}
name={day.name}
spots={day.spots}
selected={day.name === props.day}
setDay={props.setDay}
/>

return <ul>{listedItem}</ul>
*/