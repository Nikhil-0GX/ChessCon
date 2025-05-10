// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Make sure motion is imported
import { FaChessKnight, FaGraduationCap, FaTrophy, FaNewspaper, FaUsers, FaPuzzlePiece, FaBroadcastTower } from 'react-icons/fa';
import AnimatedCard from './AnimatedCard';

const HomePageContainer = styled(motion.div)`
  color: var(--text-primary);
`;

const HeroSection = styled(motion.section)`
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
  border-radius: 12px;
  margin-bottom: 3.5rem;
  box-shadow: var(--card-shadow);
  color: var(--text-primary);

  @media (max-width: 768px) {
    padding: 2.5rem 1rem;
    margin-bottom: 2.5rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  color: var(--brand-primary);
  margin-bottom: 1rem;
  font-family: var(--font-secondary);
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

// VVVVVV THIS IS THE CORRECTED LINE (AROUND LINE 55) VVVVVV
const CTAButton = styled(motion(Link))` 
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.8rem 2.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color var(--transition-speed-fast) var(--easing-standard), 
              transform var(--transition-speed-fast) var(--easing-standard),
              box-shadow var(--transition-speed-fast) var(--easing-standard);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-3px) scale(1.03);
    color: var(--bg-primary); 
    box-shadow: 0 4px 12px rgba(var(--brand-highlight-rgb, 0,0,0), 0.3);
  }
  &:active {
    transform: translateY(-1px) scale(1);
    box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  }
`;
// ^^^^^^ END OF CORRECTED CTAButton DEFINITION ^^^^^^

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 2.5rem;
  color: var(--text-accent);
  font-family: var(--font-secondary);
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  gap: 2rem; 
  margin-bottom: 3rem;
  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled(AnimatedCard)`
  text-align: center;
  padding: 1.8rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: var(--text-primary);
  min-height: 230px;
  justify-content: flex-start; 
  border-left: 4px solid transparent;

  &:hover {
    border-left-color: var(--brand-secondary);
  }

  h3 {
    color: var(--text-accent);
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 0;
  }

  svg {
    font-size: 2.5rem;
    color: var(--brand-secondary);
    margin-bottom: 1.25rem;
    transition: transform var(--transition-speed-medium) var(--easing-standard);
  }

  &:hover svg {
    transform: scale(1.15) rotate(5deg);
  }
`;

const features = [
  { icon: <FaGraduationCap />, title: "Learning Tracks", desc: "Curated paths from beginner to pro, with top resources.", link: "/learning" },
  { icon: <FaTrophy />, title: "Tournaments", desc: "Stay updated on major online and OTB chess events.", link: "/tournaments" },
  { icon: <FaNewspaper />, title: "Latest News", desc: "Get the latest buzz from the world of chess.", link: "/news" },
  { icon: <FaPuzzlePiece />, title: "Chess Puzzles", desc: "Sharpen your tactics with daily interactive puzzles.", link: "/puzzles" },
  { icon: <FaBroadcastTower />, title: "Live Streams", desc: "Watch top players and commentators live.", link: "/streams" },
  { icon: <FaUsers />, title: "Community Hub", desc: "Connect with fellow players, join clubs, and discuss.", link: "/community" },
];

const containerStaggerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const itemFadeInUpVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

const Home = () => {
  return (
    <HomePageContainer
      initial="hidden"
      animate="visible"
      variants={{ hidden: {opacity: 0.8}, visible: {opacity: 1} }}
    >
      <Helmet>
        <title>ChessCon - Home | Your Path to Chess Mastery</title>
        <meta name="description" content="Welcome to ChessCon! The ultimate platform for aspiring chess professionals. Explore learning tracks, tournaments, news, puzzles, and a vibrant community." />
      </Helmet>

      <HeroSection
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 80 }}
      >
        <HeroTitle variants={itemFadeInUpVariants}>Unlock Your Chess Potential</HeroTitle>
        <HeroSubtitle variants={itemFadeInUpVariants} transition={{delay:0.1}}>
          ChessCon is your all-in-one resource to go from enthusiast to expert.
          Dive into structured learning, track events, solve puzzles, and join a thriving community.
        </HeroSubtitle>
        <CTAButton // This is the component causing the error if not styled correctly
          to="/learning"
          variants={itemFadeInUpVariants}
          transition={{delay:0.2}}
          whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(var(--brand-highlight-rgb,0,0,0), 0.35)" }}
          whileTap={{ scale: 0.98 }}
        >
          Start Your Journey <FaChessKnight />
        </CTAButton>
      </HeroSection>

      <SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
      >
        Explore ChessCon
      </SectionTitle>

      <FeaturesGrid variants={containerStaggerVariants} initial="hidden" animate="visible">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            as={motion(Link)} // This is also a motion component based on Link
            to={feature.link}
            variants={itemFadeInUpVariants}
            whileHover={{ y: -5, boxShadow: "var(--card-hover-shadow)" }}
          >
            {feature.icon}
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </HomePageContainer>
  );
};

export default Home;