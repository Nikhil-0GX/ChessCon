import React, { useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import faqsData from '../data/faqs';
import AnimatedCard from './AnimatedCard'; // Using AnimatedCard as the base for FAQ items
import { FaQuestionCircle, FaChevronDown, FaChevronRight, FaTag } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  color: var(--text-primary);
  max-width: 900px; /* Constrain width for better readability */
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

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Use AnimatedCard as the container for each FAQ item for consistency
// but style the clickable header and expandable answer within it.
const FaqItemCard = styled(AnimatedCard)`
  padding: 0; /* Remove AnimatedCard's default padding, control it internally */
  cursor: pointer;
  border-left: 5px solid var(--brand-secondary);
`;

const FaqQuestionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem; /* Padding for the clickable header */
  
  h3 {
    font-size: 1.15rem;
    color: var(--text-accent);
    margin: 0;
    flex-grow: 1; /* Allow question text to take available space */
    font-family: var(--font-primary); /* Use primary font for questions for readability */
    font-weight: 600;
  }

  svg.chevron-icon { /* Specific styling for chevron */
    font-size: 1.2rem;
    color: var(--brand-primary);
    margin-left: 1rem;
    transition: transform 0.2s ease-in-out;
  }

  &.open svg.chevron-icon {
    transform: rotate(90deg);
  }
`;

const FaqAnswerContent = styled(motion.div)`
  padding: 0 1.5rem 1.5rem 1.5rem; /* Padding for the answer, excluding top */
  font-size: 0.95rem;
  color: var(--text-primary); /* Use primary text color for readability */
  line-height: 1.7;
  overflow: hidden; /* Important for AnimatePresence */
  border-top: 1px solid var(--border-color);
  margin-top: 1rem; /* Space between question and answer separator */
`;

const TagsContainer = styled.div`
  margin-top: 0.75rem; /* Space above tags if answer is open */
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
`;

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } }
  };

  const answerVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0, paddingTop: 0, paddingBottom: 0 },
    open: { opacity: 1, height: 'auto', marginTop: '1rem', paddingTop: '1.5rem', paddingBottom: '1.5rem' } // Ensure padding matches FaqAnswerContent
  };

  return (
    <PageContainer>
      <Helmet>
        <title>FAQ - ChessCon</title>
        <meta name="description" content="Find answers to frequently asked questions about becoming a professional chess player, improving your game, FIDE titles, ratings, and more on ChessCon." />
      </Helmet>
      <PageTitle><FaQuestionCircle /> Frequently Asked Questions</PageTitle>
      <FaqList variants={containerVariants} initial="hidden" animate="visible">
        {faqsData.map((faq, index) => (
          <FaqItemCard
            key={index}
            onClick={() => toggleFaq(index)}
            customStaggerIndex={index} // For AnimatedCard stagger
            layout // Enable layout animation for smoother open/close
          >
            <FaqQuestionHeader className={openIndex === index ? 'open' : ''}>
              <h3>{faq.q}</h3>
              {openIndex === index ? <FaChevronDown className="chevron-icon"/> : <FaChevronRight className="chevron-icon"/>}
            </FaqQuestionHeader>
            <AnimatePresence>
              {openIndex === index && (
                <FaqAnswerContent
                  key="answer" // Key for AnimatePresence
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={answerVariants}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth cubic bezier
                >
                  <p>{faq.a}</p>
                  {faq.tags && faq.tags.length > 0 && (
                    <TagsContainer>
                      <FaTag style={{color: 'var(--text-secondary)', marginRight: '0.3rem'}}/>
                      {faq.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                    </TagsContainer>
                  )}
                </FaqAnswerContent>
              )}
            </AnimatePresence>
          </FaqItemCard>
        ))}
      </FaqList>
    </PageContainer>
  );
};

export default FaqPage;