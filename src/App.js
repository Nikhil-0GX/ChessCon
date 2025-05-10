// src/App.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import { Routes, Route, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components'; // Import css
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import LearningTracksPage from './components/LearningTracks';
import TournamentsPage from './components/Tournaments';
import NewsPage from './components/News';
import CommunityPage from './components/Community';
import FaqPage from './components/Faq';
import PuzzlePage from './components/PuzzlePage';
import StreamsPage from './components/StreamsPage';
import SettingsPage from './components/SettingsPage'; // <-- NEW
import ContactPage from './components/ContactPage'; // <-- NEW
import NotFound from './components/NotFound';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative; /* For backdrop positioning */
`;

const MainLayout = styled.div`
  display: flex;
  flex-grow: 1;
  padding-top: 70px; /* Height of the fixed Header */
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 60px; 
  }
`;

const ContentArea = styled(motion.main)`
  flex-grow: 1;
  padding: 1.5rem;
  overflow-y: auto; 
  background-color: var(--bg-primary);
  position: relative; /* Ensure content is above backdrop if needed */
  z-index: 1; /* Ensure content is above backdrop */


  @media (max-width: 768px) {
    padding: 1rem;
    transition: filter 0.3s ease-in-out;
    ${({ isMobileMenuOpen }) => isMobileMenuOpen && css`
      filter: blur(3px) brightness(0.7); /* Dim and blur content when menu is open */
      pointer-events: none; /* Prevent interaction with content when menu is open */
    `}
  }
`;

const BackdropOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998; /* Below sidebar (999) but above content (1) */
  display: none; /* Hidden by default, shown via AnimatePresence */

  @media (max-width: 768px) {
    /* display is handled by AnimatePresence */
  }
`;

const pageVariants = {
  initial: { opacity: 0, x: -30 }, // Adjusted animation
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 30 }, // Adjusted animation
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.35, // Slightly faster
};

function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // This effect will listen for changes to the body class controlled by Header/Sidebar
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          setIsMobileMenuOpen(document.body.classList.contains('mobile-menu-open'));
        }
      }
    });

    observer.observe(document.body, { attributes: true });

    // Initial check
    setIsMobileMenuOpen(document.body.classList.contains('mobile-menu-open'));

    return () => observer.disconnect();
  }, []);


  return (
    <HelmetProvider>
      <AppContainer>
        <Header /> {/* Header will toggle 'mobile-menu-open' on body */}
        <MainLayout>
          <Sidebar /> {/* Sidebar will show/hide based on 'mobile-menu-open' on body */}
          
          <AnimatePresence>
            {isMobileMenuOpen && (
              <BackdropOverlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  // Close menu by removing class from body, which Header/Sidebar should react to
                  document.body.classList.remove('mobile-menu-open');
                  // If Header directly controls a state for its icon, that needs to be synced.
                  // This assumes Header's hamburger icon toggles the body class.
                }}
              />
            )}
          </AnimatePresence>

          <ContentArea
            key={location.pathname}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="page-motion-div"
            isMobileMenuOpen={isMobileMenuOpen} // Pass prop to ContentArea
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/learning" element={<LearningTracksPage />} />
              <Route path="/tournaments" element={<TournamentsPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/puzzles" element={<PuzzlePage />} />
              <Route path="/streams" element={<StreamsPage />} />
              <Route path="/settings" element={<SettingsPage />} /> {/* <-- NEW */}
              <Route path="/contact" element={<ContactPage />} />   {/* <-- NEW */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ContentArea>
        </MainLayout>
        <Footer />
      </AppContainer>
    </HelmetProvider>
  );
}

export default App;