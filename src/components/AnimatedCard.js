// src/components/AnimatedCard.js
import React from 'react';
import styled, { css } from 'styled-components'; // Import css
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext'; // Assuming you have ThemeContext

const CardWrapper = styled(motion.div)`
  background-color: var(--bg-secondary);
  border-radius: 12px; /* Or your preferred radius */
  padding: 1.5rem;
  box-shadow: var(--card-shadow);
  transition: background-color 0.3s ease, box-shadow 0.2s ease, transform 0.2s ease;
  /* border: 1px solid var(--border-color); // Standard border */
  overflow: hidden;

  &:hover {
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  /* Conditional Glassmorphism for dark theme */
  ${({ activeTheme }) => // Pass activeTheme as a prop
    activeTheme === 'dark' &&
    css`
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid var(--border-color); /* Use the translucent border for dark theme */
      background-color: var(--bg-secondary); /* Ensure this is your translucent RGBA */
    `}
`;

const cardVariants = {
  // ... (keep your existing variants)
};

const AnimatedCard = ({ children, className, customStaggerIndex, ...props }) => {
  const { theme } = useTheme(); // Get current theme

  return (
    <CardWrapper
      className={className}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={customStaggerIndex}
      activeTheme={theme} // Pass theme to styled-component
      {...props}
    >
      {children}
    </CardWrapper>
  );
};

export default AnimatedCard;