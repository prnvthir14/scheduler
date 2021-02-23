import React from "react";
 
import {
 render,
 cleanup,
 waitForElement,
 getByText,
 prettyDOM,
 getAllByTestId,
 getByAltText,
 getByPlaceholderText,
 queryByText
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
 
import { fireEvent } from "@testing-library/react";
import Application from "components/Application";
 
afterEach(cleanup);

describe("Form", () => {
 getByAltText;
 it("defaults to Monday and changes the schedule when a new day is selected", () => {
   const { getByText } = render(<Application />);
 
   return waitForElement(() => getByText("Monday"));
 });
 it("defaults to Monday and changes the schedule when a new day is selected", () => {
   const { getByText } = render(<Application />);
 
   return waitForElement(() => getByText("Monday")).then(() => {
     fireEvent.click(getByText("Tuesday"));
     expect(getByText("Leopold Silvers")).toBeInTheDocument();
   });
 });
 it("changes the schedule when a new day is selected", async () => {
   const { getByText } = render(<Application />);
 
   await waitForElement(() => getByText("Monday"));
 
   fireEvent.click(getByText("Tuesday"));
 
   expect(getByText("Leopold Silvers")).toBeInTheDocument();
 });
 it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
   
  const { container,debug } = render(<Application />);

   await waitForElement(() => getByText(container, "Archie Cohen"));
   //console.log(prettyDOM(container));
   const appointments = getAllByTestId(container, "appointment");
   //console.log(prettyDOM(appointments));
   const appointment = appointments[0];
   //console.log(prettyDOM(appointment));

  //  console.log('THIS IS DEBUG11111111111111',debug())
 
   fireEvent.click(getByAltText(appointment, "Add"));
 
   fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
     target: { value: "Lydia Miller-Jones" },
   });
   fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
 
   fireEvent.click(getByText(appointment, "Save"));

  //  console.log('THIS IS DEBUG',debug())
  
  expect(getByText(appointment,"Saving")).toBeInTheDocument(); 
  await waitForElement(() => queryByText(appointment, "Lydia Miller-Jones"));
  //debug()

  const day = getAllByTestId(container, "day").find(day =>
    queryByText(day, "Monday")
  );
  
  //console.log(prettyDOM(day));
  expect(getByText(day,"no spots remaining")).toBeInTheDocument(); 


 });
});
