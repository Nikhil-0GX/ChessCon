import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  width: 100%;
`;

const LoadingDot = styled(motion.span)`
  width: 12px;
  height: 12px;
  margin: 0 4px;
  border-radius: 50%;
  background-color: var(--brand-primary);
  display: inline-block;
`;

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const loadingDotVariants = {
  start: {
    y: "0%"
  },
  end: {
    y: "100%"
  }
};

const loadingDotTransition = {
  duration: 0.5,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut"
};

const LoadingState = () => {
  return (
    <LoadingContainer
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
      <LoadingDot
        variants={loadingDotVariants}
        transition={loadingDotTransition}
      />
    </LoadingContainer>
  );
};

export default LoadingState;