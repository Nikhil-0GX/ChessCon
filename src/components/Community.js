import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import communityLinksData from '../data/communityLinks';
import AnimatedCard from './AnimatedCard';
import {
  FaUsers, FaChess, FaLiraSign, FaRedditAlien, FaStackExchange, FaTwitch,
  FaYoutube, FaGlobeEurope, FaBookReader, FaMapMarkedAlt, FaDiscord, FaExternalLinkAlt, FaTag
} from 'react-icons/fa'; // Added FaTag for tags

const PageContainer = styled.div`
  padding: 2rem;
  color: var(--text-primary);

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

const CommunityGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CommunityLinkCard = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure content is well-spaced */
  border-left: 5px solid var(--brand-secondary);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  svg { /* Icon for the link type */
    font-size: 2.2rem;
    color: var(--brand-secondary);
    margin-right: 1rem;
    min-width: 30px; /* Ensure alignment */
  }
`;

const LinkName = styled.h3`
  font-size: 1.4rem;
  color: var(--text-accent);
  margin: 0;
  font-family: var(--font-secondary);
`;

const LinkType = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-primary);
  flex-grow: 1; /* Allow description to take space */
  margin-bottom: 1rem;
`;

const VisitLinkButton = styled.a`
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex; /* Changed from block to inline-flex */
  align-items: center;
  justify-content: center; /* Center content in button */
  transition: background-color 0.2s ease, transform 0.2s ease;
  margin-top: auto; /* Push to bottom if Card is flex column */

  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
`;

const TagsContainer = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-color);
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
  border: 1px solid var(--border-color);
  display: inline-flex;
  align-items: center;

  svg { /* Icon within the tag, if any */
    margin-right: 0.3rem;
    font-size: 0.8rem;
  }
`;

// Mapping for icons based on community link's 'icon' field or type
const communityIcons = {
  FaChess: <FaChess />,
  FaLiraSign: <FaLiraSign />,
  FaRedditAlien: <FaRedditAlien />,
  FaStackExchange: <FaStackExchange />,
  FaTwitch: <FaTwitch />,
  FaYoutube: <FaYoutube />,
  FaGlobeEurope: <FaGlobeEurope />,
  FaBookReader: <FaBookReader />,
  FaMapMarkedAlt: <FaMapMarkedAlt />,
  FaDiscord: <FaDiscord />,
  Default: <FaUsers /> // Fallback icon
};

const CommunityPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <PageContainer>
      <Helmet>
        <title>Chess Community Hub - ChessCon</title>
        <meta name="description" content="Connect with the global chess community on ChessCon. Find links to popular platforms, forums, streaming sites, local clubs, and more." />
      </Helmet>
      <PageTitle><FaUsers /> Chess Community Hub</PageTitle>
      <CommunityGrid variants={containerVariants} initial="hidden" animate="visible">
        {communityLinksData.map((item, index) => (
          <CommunityLinkCard key={item.name + index} customStaggerIndex={index}>
            <div> {/* Wrapper for content above button */}
              <CardHeader>
                {communityIcons[item.icon] || communityIcons.Default}
                <div>
                  <LinkName>{item.name}</LinkName>
                  <LinkType>{item.type}</LinkType>
                </div>
              </CardHeader>
              <Description>{item.description}</Description>
            </div>

            <div> {/* Wrapper for tags and button */}
              {item.tags && item.tags.length > 0 && (
                <TagsContainer>
                  <FaTag style={{color: 'var(--text-secondary)', marginRight: '0.2rem'}}/>
                  {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </TagsContainer>
              )}
              <div style={{ marginTop: '1rem' }}> {/* Ensure button has some space if tags are present */}
                <VisitLinkButton href={item.link} target="_blank" rel="noopener noreferrer">
                  Visit Site <FaExternalLinkAlt />
                </VisitLinkButton>
              </div>
            </div>
          </CommunityLinkCard>
        ))}
      </CommunityGrid>
    </PageContainer>
  );
};

export default CommunityPage;