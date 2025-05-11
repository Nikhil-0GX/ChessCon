import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: var(--brand-primary);
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  color: var(--text-accent);
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const CardLink = styled(Link)`
  color: var(--brand-primary);
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--brand-highlight);
  }
`;

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const AnimatedCard = ({ icon, title, description, link, delay = 0 }) => {
  return (
    <Card
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink to={link}>Learn More →</CardLink>
    </Card>
  );
};

export default AnimatedCard;