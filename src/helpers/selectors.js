

// Helper function to get appointmnet for day
export function getAppointmentsForDay(state, day) {
  const rightDays = state.days.map(day => day.name);
  if (!day || !rightDays.includes(day)) return [];

  return state.days
    .filter(appointment => appointment.name === day)[0]
    .appointments.map(apptId => state.appointments[apptId]);
}