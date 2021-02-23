import React from "react";
 
import { render, cleanup } from "@testing-library/react";
import Appointment from "components/Appointment/index";
import Form from "components/Appointment/Form";
 
afterEach(cleanup);
 
describe("Form", () => {
 const interviewers = [
   {
     id: 1,
     name: "Sylvia Palmer",
     avatar: "https://i.imgur.com/LpaY82x.png",
   },
 ];
 
 it("renders without student name if not provided", () => {
   /* arrange */
   const { getByPlaceholderText } = render(
     <Form interviewers={interviewers} />
   );
   /* Assert */
   expect(getByPlaceholderText("Enter Student Name")).toHaveValue("");
 });
 
 it("renders with initial student name", () => {
   /* Arrange rendering the u.i with components and certain properties passed in */
   const { getByTestId } = render(
     <Form interviewers={interviewers} name="Lydia Miller-Jones" />
   );
   /* Assert */
   expect(getByTestId("student-name-input")).toHaveValue("Lydia Miller-Jones");
 });
});
