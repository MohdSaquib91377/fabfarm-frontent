import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import '@testing-library/jest-dom';

test('render Contact', () => {
    render(<BrowserRouter><Contact /></BrowserRouter>);
    const nameInput = screen.getByPlaceholderText(/full name/i)
    const emailInput = screen.getByPlaceholderText(/email/i)
    const messageInput = screen.getByPlaceholderText(/message/i)
    const sendButton = screen.getByRole('button')
    expect(nameInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(messageInput).toBeInTheDocument()
    expect(sendButton).toBeInTheDocument()
    expect(sendButton).not.toBeDisabled()
})