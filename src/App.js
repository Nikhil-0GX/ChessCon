import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingState from './components/LoadingState';

// Lazy load route components
const Home = React.lazy(() => import('./components/Home'));
const LearningTracksPage = React.lazy(() => import('./components/LearningTracks'));
const TournamentsPage = React.lazy(() => import('./pages/Tournaments'));
const NewsPage = React.lazy(() => import('./pages/News'));
const CommunityPage = React.lazy(() => import('./pages/Community'));
const FaqPage = React.lazy(() => import('./pages/Faq'));
const PuzzlePage = React.lazy(() => import('./components/PuzzlePage'));
const StreamsPage = React.lazy(() => import('./components/StreamsPage'));
const SettingsPage = React.lazy(() => import('./components/SettingsPage'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./components/NotFound'));

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-primary);
  position: relative;
`;

const MainLayout = styled.div`
  display: flex;
  flex-grow: 1;
  padding-top: 70px;
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
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 1rem;
    transition: filter 0.3s ease-in-out;
    ${({ isMobileMenuOpen }) => isMobileMenuOpen && css`
      filter: blur(3px) brightness(0.7);
      pointer-events: none;
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
  z-index: 998;
  display: none;
  @media (max-width: 768px) {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`;

const pageVariants = {
  initial: { opacity: 0, x: -30 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 30 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.35
};

function App() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    document.body.classList.toggle('mobile-menu-open');
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('mobile-menu-open');
  };

  // Close menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  if (isLoading) {
    return (
      <AppContainer>
        <LoadingState />
      </AppContainer>
    );
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AppContainer>
          <Helmet>
            <title>ChessCon - Chess Professional Platform</title>
            <meta name="description" content="Your ultimate platform for mastering chess" />
          </Helmet>

          <Header 
            isMobileMenuOpen={isMobileMenuOpen} 
            toggleMobileMenu={toggleMobileMenu} 
          />

          <MainLayout>
            <Sidebar 
              open={isMobileMenuOpen} 
              onClose={closeMobileMenu} 
            />
            
            <BackdropOverlay
              isVisible={isMobileMenuOpen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />

            <ContentArea
              key={location.pathname}
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              isMobileMenuOpen={isMobileMenuOpen}
            >
              <Suspense fallback={<LoadingState />}>
                <Routes location={location}>
                  <Route path="/" element={<Home />} />
                  <Route path="/learning" element={<LearningTracksPage />} />
                  <Route path="/tournaments" element={<TournamentsPage />} />
                  <Route path="/news" element={<NewsPage />} />
                  <Route path="/community" element={<CommunityPage />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/puzzles" element={<PuzzlePage />} />
                  <Route path="/streams" element={<StreamsPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ContentArea>
          </MainLayout>
          <Footer />
        </AppContainer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;