// src/components/ContactPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaUser, FaCommentDots, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import AnimatedCard from './AnimatedCard';

const PageContainer = styled(motion.div)`
  padding: 2rem;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--brand-primary);
  font-family: var(--font-secondary);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1rem;
  }
`;

const ContactFormCard = styled(AnimatedCard)`
  padding: 2.5rem; /* More padding for the form */
  border-left: 5px solid var(--brand-secondary);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-accent);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: var(--brand-secondary);
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: var(--font-primary);

  &:focus {
    outline: none;
    border-color: var(--brand-primary);
    box-shadow: 0 0 0 3px rgba(var(--brand-primary-rgb, 0, 123, 255), 0.25); /* Requires --brand-primary-rgb for box-shadow */
  }
`;

const Textarea = styled.textarea`
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-tertiary);
  color: var(--text-primary);
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: var(--font-primary);

  &:focus {
    outline: none;
    border-color: var(--brand-primary);
    box-shadow: 0 0 0 3px rgba(var(--brand-primary-rgb, 0, 123, 255), 0.25);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
  align-self: flex-start; /* Align button to the start of the flex container */

  &:hover {
    background-color: var(--brand-highlight);
    color: var(--bg-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  &:disabled {
    background-color: var(--text-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const FormStatusMessage = styled(motion.div)`
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &.success {
    background-color: rgba(var(--brand-secondary-rgb, 40, 167, 69), 0.2); /* Requires --brand-secondary-rgb */
    color: var(--brand-secondary); /* Or a specific success text color */
    border: 1px solid var(--brand-secondary);
  }

  &.error {
    background-color: rgba(var(--brand-highlight-rgb, 220, 53, 69), 0.2); /* Requires --brand-highlight-rgb */
    color: var(--brand-highlight); /* Or a specific error text color */
    border: 1px solid var(--brand-highlight);
  }

  svg {
    font-size: 1.3rem;
  }
`;

// You'll need to define these RGB variables in your index.css for the transparent backgrounds
// For example, in light theme:
// --brand-secondary-rgb: 40, 167, 69; /* Green for success */
// --brand-highlight-rgb: 220, 53, 69; /* Red for error */
// And similar for dark theme, perhaps using different accent colors

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' }); // type: 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch("https://formspree.io/f/xanobkqj", { // <<<<---- REPLACE THIS
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData) // Formspree can handle JSON
      });

      if (response.ok) {
        setFormStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const data = await response.json();
        if (data.errors) {
          setFormStatus({ type: 'error', message: data.errors.map(err => err.message).join(', ') || 'An error occurred. Please try again.' });
        } else {
          setFormStatus({ type: 'error', message: 'An error occurred. Please try again.' });
        }
      }
    } catch (error) {
      setFormStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Contact Us - ChessCon</title>
        <meta name="description" content="Get in touch with the ChessCon team. Send us your suggestions, questions, or feedback." />
      </Helmet>
      <PageTitle><FaEnvelope /> Contact Us</PageTitle>

      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.05rem' }}>
        Have a question, suggestion, or just want to say hello? Fill out the form below, and we'll get back to you as soon as possible.
        Your feedback helps us make ChessCon better!
      </p>

      <ContactFormCard customStaggerIndex={0}>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name"><FaUser /> Your Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email"><FaEnvelope /> Your Email</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject"><FaCommentDots /> Subject</Label>
            <Input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message"><FaPaperPlane /> Your Message</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </FormGroup>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
          </SubmitButton>
        </Form>
        {formStatus.message && (
          <FormStatusMessage
            className={formStatus.type}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {formStatus.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
            {formStatus.message}
          </FormStatusMessage>
        )}
      </ContactFormCard>
      <div style={{textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
          Submissions are processed by Formspree and sent to the Service.
      </div>
    </PageContainer>
  );
};

export default ContactPage;