

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
export function getInterview(state, interview) {
  if (!interview) return null;
  const interviewObj = {
    student: interview.student
  };

  interviewObj.interviewer = state.interviewers[interview.interviewer];
  return interviewObj;
}