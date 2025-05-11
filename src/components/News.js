import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ErrorBoundary from './ErrorBoundary';

const ContentWrapper = styled(motion.main)`
  flex-grow: 1;
  padding: 2rem;
  background-color: var(--bg-primary);
  min-height: calc(100vh - 70px);
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: calc(100vh - 60px);
  }
`;

const LoadingSpinner = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: var(--text-accent);
  font-size: 1.2rem;
`;

const spinTransition = {
  repeat: Infinity,
  duration: 1,
  ease: "linear"
};

const LoadingAnimation = () => (
  <LoadingSpinner
    animate={{ rotate: 360 }}
    transition={spinTransition}
  >
    ⌛
  </LoadingSpinner>
);

const MainContent = ({ children }) => {
  return (
    <ErrorBoundary>
      <ContentWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Suspense fallback={<LoadingAnimation />}>
          {children}
        </Suspense>
      </ContentWrapper>
    </ErrorBoundary>
  );
};

export default MainContent;