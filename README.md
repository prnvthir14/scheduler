# Interview Scheduler

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## User Guide
Create a new appointment by clicking on the + icon.
!["Create a new appointment by clicking on the + icon."](https://github.com/prnvthir14/scheduler/blob/master/docs/1%20-%20add_new_appointment.png?raw=true)

Enter a name and select an intervierwer.
!["Enter a name and select an intervierwer."](https://github.com/prnvthir14/scheduler/blob/master/docs/2%20-%20appmt_temp_enter_name_and_select_interviewer.png)

Form will not let you book an appointment without selecting an interviwer.
!["Form will not let you book an appointment without selecting an interviwer."](https://github.com/prnvthir14/scheduler/blob/master/docs/3%20-%20error_need_intervierwe.png)

Form will not let you book an appointment without entering a name.
!["Form will not let you book an appointment without entering a name."](https://github.com/prnvthir14/scheduler/blob/master/docs/4%20-%20error_no_name_appoitment.png?raw=true)

Displays saving Icon during async operation to save new appointemnt to api.
!["Displays saving Icon during async operation to save new appointemnt to api."](https://github.com/prnvthir14/scheduler/blob/master/docs/5%20-%20saving_icon.png?raw=true)

Displays new appintment on successful creation and decrements the number of available slots for the given day.
!["Displays new appintment on successful creation."](https://github.com/prnvthir14/scheduler/blob/master/docs/7-successful_appointment%20+%20spots_decrement.png?raw=true)

Edit the appointment if needed by clikcing the edit icon on the appointment container.
!["Edit the appointment if needed by clikcing the edit icon on the appointment container."](https://github.com/prnvthir14/scheduler/blob/master/docs/8-edit_to_mary.png?raw=true)

App now displays the edited appoitnment.
!["App now displays the edited appoitnment."](https://github.com/prnvthir14/scheduler/blob/master/docs/8-edit_to_mary.png?raw=true)

Delete the appointment if needed by clikcing the delete icon on the appointment container. User Will be asked to confirm this action.
!["Delete the appointment if needed by clikcing the delete icon on the appointment container. User Will be asked to confirm this action."](https://github.com/prnvthir14/scheduler/blob/master/docs/10-delete_confirm.png?raw=true)

Displays deleting icon before showing empty slot and incrementing the number of appointments available for the day.
!["Displays deleting icon before showing empty slot."](https://github.com/prnvthir14/scheduler/blob/master/docs/12-deleting_icon.png?raw=true)