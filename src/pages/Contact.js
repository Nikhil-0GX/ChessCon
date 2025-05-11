// src/pages/Contact.js
import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  background: var(--bg-secondary, #181c24);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  padding: 2rem;
`;

const ContactTitle = styled.h2`
  color: var(--brand-primary, #3fa7ff);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Input = styled.input`
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid #222;
  background: #23293a;
  color: #fff;
`;

const Textarea = styled.textarea`
  padding: 0.9rem;
  border-radius: 6px;
  border: 1px solid #222;
  background: #23293a;
  color: #fff;
  min-height: 100px;
`;

const SubmitBtn = styled.button`
  background: var(--brand-primary, #3fa7ff);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #1e7fc7; }
`;

const SuccessMsg = styled.div`
  color: #3fa7ff;
  text-align: center;
  margin-top: 1rem;
`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    // Here you would send the form data to your backend or email service
  }

  return (
    <ContactContainer>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <SubmitBtn type="submit">Send Message</SubmitBtn>
      </ContactForm>
      {sent && <SuccessMsg>Thank you! We'll get back to you soon.</SuccessMsg>}
    </ContactContainer>
  );
}