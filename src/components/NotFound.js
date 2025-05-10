import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';
import { motion } from 'framer-motion';

const NotFoundContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px - 100px); /* Full viewport minus header and footer approx */
  text-align: center;
  padding: 2rem;
  color: var(--text-primary);
`;

const ErrorIcon = styled(FaExclamationTriangle)`
  font-size: 5rem;
  color: var(--brand-highlight);
  margin-bottom: 1.5rem;
`;

const ErrorTitle = styled.h1`
  font-size: 3rem;
  color: var(--text-accent);
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 500px;
`;

const HomeButton = styled(Link)`
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease;

  svg {
    margin-right: 0.75rem;
  }

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Page Not Found - ChessCon</title>
        <meta name="description" content="The page you are looking for on ChessCon could not be found." />
      </Helmet>
      <ErrorIcon />
      <ErrorTitle>404 - Page Not Found</ErrorTitle>
      <ErrorMessage>
        Oops! The page you're looking for doesn't exist or has been moved.
        Let's get you back on track.
      </ErrorMessage>
      <HomeButton to="/">
        <FaHome /> Go to Homepage
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFound;