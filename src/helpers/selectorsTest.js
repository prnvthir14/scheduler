const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3],
      interviewers: [2]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5],
      interviewers: [2]
    }

  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

function getInterview (state, interview) {
  
  
  if (!interview) return null;

  const interviewObj = {
    student: interview.student
  };

  interviewObj.interviewer = state.interviewers[interview.interviewer];

  return interviewObj;
}

// Helper function to get appointmnet for day
function getAppointmentsForDay(state, day) {
  
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

//console.log(getAppointmentsForDay(state, "Tuesday"))

// [ { id: 4, time: '3pm', interview: null },
//   { id: 5,
//     time: '4pm',
//     interview: { student: 'Chad Takahashi', interviewer: 2 } } ]


// Gets an interview 
// Helper function to get appointmnet for day


function getInterviewersForDay (state, day) {

  //function neeeds to return interviews for given days

  //GET DAYS WITH APTS
  //  const daysWithInterviews = state.days.map(day => day.name);

  if (!'interview') {

    return null;

  } else if ((state.days.filter(appointment => appointment.name === day).length === 0) || !day) {
    
    return [];
  
  } else {

    // first this interview: { student: "Archie Cohen", interviewer: 2 }

    // then add this   state.interviewers[student[interviewer]]: {
    /*"1": {  }
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
    */

    return state.days.filter(appointment => appointment.name === day)[0]
    .appointments.map( apptId => state.appointments[apptId]
      
      
    )
  }  
};

