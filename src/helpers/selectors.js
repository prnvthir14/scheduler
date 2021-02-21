export function getInterview(state, interview) {
  
  
  if (!interview) return null;
  const interviewObj = {
    student: interview.student
  };

  interviewObj.interviewer = state.interviewers[interview.interviewer];
  return interviewObj;
}

// Helper function to get appointmnet for day
export function getAppointmentsForDay(state, day) {
  
  const rightDays = state.days.map(day => day.name);
  //console.log('RIGHT DAYSSSS:', rightDays)
  if (!day || !rightDays.includes(day))
  {
    
    return [];

  } else {

    return state.days
    .filter(appointment => appointment.name === day)[0]
    .appointments.map(apptId => state.appointments[apptId]);


  }
}


// Gets an interview 
// Helper function to get appointmnet for day
// export function getInterviewersForDay(state, day) {

//   //function neeeds to return interviews for given days

//   //GET DAYS WITH APTS
//   //  const daysWithInterviews = state.days.map(day => day.name);

//   if (!'interview') {

//     return null;

//   } else if ((state.days.filter(appointment => appointment.name === day).length === 0) || !day) {
    
//     return [];
  
//   } else {

//     // first this interview: { student: "Archie Cohen", interviewer: 2 }

//     // then add this   state.interviewers[student[interviewer]]: {
//     /*"1": {  }
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//     */

//     return state.days.filter(appointment => appointment.name === day)[0]
//     .appointments.map( apptId => state.appointments[apptId]
      
      
//     )
//   }  
// };

export function getInterviewersForDay(state, dayname) {
  const result = [];
  const dayObj = state.days.find((d) => d.name === dayname);
  if (!dayObj) {
    return result;
  }
  
  for (let id of dayObj.interviewers) {
    if (state.interviewers[id]) {
      result.push(state.interviewers[id]);
    }
  }
  //console.log(result);
  return result;
 }
 