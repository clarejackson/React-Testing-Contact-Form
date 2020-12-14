import React from "react";
import {render, screen, act} from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";

test("renders ContactForm without errors", () => {
  render(<ContactForm />);
})

test("user can fill out and submit the form", async() => {
  render(<ContactForm />);

  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  
  userEvent.type(firstNameInput, "Clare");
  userEvent.type(lastNameInput, "Jackson");
  userEvent.type(emailInput, "email@email.com");
  userEvent.type(messageInput, "This my message.");

  await act(async () =>{
    const button = screen.getByRole("button",{name:/submit/i})
     userEvent.click(button)
    });

  const firstName = screen.getByText(/Clare/i);
  expect(firstName).toBeInTheDocument();
})