import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChessKnight, FaGraduationCap, FaTrophy, FaUsers } from 'react-icons/fa';
import AnimatedCard from './AnimatedCard';

const HomeContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border-radius: 15px;
  box-shadow: var(--card-shadow);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const Title = styled.h1`
  color: var(--text-accent);
  font-size: 3rem;
  margin-bottom: 1rem;
  font-family: var(--font-secondary);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: var(--brand-highlight);
  }
`;

const featureItems = [
  {
    icon: <FaChessKnight />,
    title: "Interactive Learning",
    description: "Master chess through our interactive lessons and exercises.",
    link: "/learning"
  },
  {
    icon: <FaGraduationCap />,
    title: "Structured Courses",
    description: "Follow our carefully crafted learning paths.",
    link: "/learning"
  },
  {
    icon: <FaTrophy />,
    title: "Tournaments",
    description: "Compete in regular tournaments and improve your skills.",
    link: "/tournaments"
  },
  {
    icon: <FaUsers />,
    title: "Community",
    description: "Join our vibrant community of chess enthusiasts.",
    link: "/community"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <HomeContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.div>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <HeroSection>
        <Title>Welcome to ChessCon</Title>
        <Subtitle>
          Your ultimate platform for mastering chess. Learn, compete, and connect
          with fellow chess enthusiasts from around the world.
        </Subtitle>
        <CTAButton to="/learning">Start Learning</CTAButton>
      </HeroSection>

      <FeaturesGrid>
        {featureItems.map((feature, index) => (
          <AnimatedCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            delay={index * 0.1}
          />
        ))}
      </FeaturesGrid>
    </HomeContainer>
  );
};

export default Home;