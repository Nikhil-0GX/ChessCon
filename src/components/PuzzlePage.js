import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { FaPuzzlePiece, FaLightbulb } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center; /* Center content */

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const PuzzleCard = styled(AnimatedCard)`
  width: 100%;
  max-width: 450px; /* Max width for the puzzle iframe area */
  padding: 1.5rem;
  text-align: center;
  border-left: 5px solid var(--brand-secondary);
`;

const IframeContainer = styled.div`
  width: 100%;
  /* Aspect ratio for typical Lichess puzzle iframe, adjust if needed */
  /* height: 410px for width 380px. Ratio is approx 1.078 */
  /* max-height: 450px;  Could also set max height */
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden; /* Ensures iframe corners are rounded */
  border: 1px solid var(--border-color);

  iframe {
    width: 100%;
    height: 420px; /* Adjust height as needed or use aspect ratio padding trick */
    border: none;
    display: block; /* Remove extra space below iframe */
  }
`;

const TipSection = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: var(--bg-tertiary);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  
  p {
    margin-bottom: 0.5rem;
  }
  
  strong {
    color: var(--text-accent);
  }
`;

const MorePuzzlesLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
`;

const PuzzlePage = () => {
  // Determine Lichess iframe theme based on current app theme
  const currentTheme = document.body.getAttribute('data-theme') || 'dark';
  const lichessTheme = currentTheme === 'light' ? 'brown' : 'blue'; // Lichess themes: blue, brown, green, purple, pink, grey, newspaper

  return (
    <PageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Daily Chess Puzzle - ChessCon</title>
        <meta name="description" content="Sharpen your tactical vision with daily chess puzzles on ChessCon. Interactive puzzles powered by Lichess." />
      </Helmet>
      <PageTitle><FaPuzzlePiece /> Daily Chess Puzzle</PageTitle>

      <PuzzleCard>
        <IframeContainer>
          <iframe
            title="Lichess Daily Puzzle"
            src={`https://lichess.org/training/frame?theme=${lichessTheme}&bg=auto`} // `bg=auto` tries to match system theme
            allowtransparency="true"
          ></iframe>
        </IframeContainer>
        <MorePuzzlesLink href="https://lichess.org/training" target="_blank" rel="noopener noreferrer">
          More Puzzles on Lichess
        </MorePuzzlesLink>
      </PuzzleCard>

      <TipSection
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{maxWidth: '450px', width: '100%', marginTop: '2rem'}}
      >
        <p><strong><FaLightbulb style={{marginRight: '0.5rem'}}/>Tactics Tip:</strong> When solving puzzles, always look for <strong>Checks, Captures, and Threats</strong> (CCT). This systematic approach can help you find solutions faster!</p>
        <p>Analyze why other moves might not work. Understanding the refutations is as important as finding the solution.</p>
      </TipSection>
    </PageContainer>
  );
};

export default PuzzlePage;