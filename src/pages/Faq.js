// src/pages/FAQ.js
import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
`;

const FAQTitle = styled.h2`
  color: var(--brand-primary, #3fa7ff);
  margin-bottom: 2rem;
  text-align: center;
`;

const FAQItem = styled.div`
  background: var(--bg-secondary, #181c24);
  border-radius: 10px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: var(--brand-primary, #3fa7ff);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1.2rem;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const FAQAnswer = styled.div`
  color: var(--text-secondary, #b0b8c1);
  padding: 1rem 1.2rem 1.2rem 1.2rem;
  border-top: 1px solid #222;
  animation: fadeIn 0.3s;
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

const faqs = [
  {
    question: "How do I join a tournament?",
    answer: "Go to the Tournaments page, select a tournament, and click 'View Tournament' to register or learn more."
  },
  {
    question: "How can I improve my chess skills?",
    answer: "Check out the Learning Tracks and Chess Puzzles sections for lessons, tactics, and practice."
  },
  {
    question: "Is ChessCon free to use?",
    answer: "Yes, ChessCon is free for all users. Some advanced features may require registration."
  },
  {
    question: "How do I contact support?",
    answer: "Use the Contact Us page to send us a message. We'll get back to you as soon as possible."
  },
  // Add more FAQs as needed
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions</FAQTitle>
      {faqs.map((item, idx) => (
        <FAQItem key={idx}>
          <FAQQuestion onClick={() => setOpenIdx(openIdx === idx ? null : idx)}>
            {item.question}
            {openIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
          </FAQQuestion>
          {openIdx === idx && <FAQAnswer>{item.answer}</FAQAnswer>}
        </FAQItem>
      ))}
    </FAQContainer>
  );
}