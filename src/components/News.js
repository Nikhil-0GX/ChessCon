// src/components/News.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { fetchLichessBlogFeed } from '../api/chessApi';
import AnimatedCard from './AnimatedCard';
import { FaNewspaper, FaSpinner, FaExclamationTriangle, FaExternalLinkAlt, FaUser, FaCalendarDay } from 'react-icons/fa';

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

const NewsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const NewsItemCard = styled(AnimatedCard)`
  border-left: 5px solid var(--brand-secondary);
  background-color: var(--bg-card-news); /* New variable for specific card bg */
`;

const NewsTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--text-accent);
  margin-bottom: 0.75rem;
  font-family: var(--font-secondary);
`;

const NewsMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;

  span {
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
      color: var(--brand-highlight);
    }
  }
`;

const NewsShortDescription = styled.div` /* Changed to div for dangerouslySetInnerHTML */
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  color: var(--text-primary);

  p { /* Style paragraphs within the description if any */
    margin-bottom: 0.5em;
  }
  a { /* Style links within the description */
    color: var(--link-color-inline); /* New variable for inline links */
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ReadMoreLink = styled.a`
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: background-color 0.2s ease, transform 0.2s ease;

  svg {
    margin-left: 0.5rem;
  }

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
`;

const LoadingErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
  background-color: var(--bg-secondary); /* Use a card-like background */
  border-radius: 12px;
  box-shadow: var(--card-shadow);

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--brand-primary);
  }

  p {
    font-size: 1.1rem;
  }
`;

const Spinner = styled(FaSpinner)`
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      console.log("NewsPage: useEffect triggered to load news.");
      try {
        setLoading(true);
        setError(null);
        const feed = await fetchLichessBlogFeed(7);
        console.log("NewsPage: Feed received from API:", feed);
        if (feed && feed.length > 0) {
          setNewsItems(feed);
        } else if (feed && feed.length === 0) {
          console.log("NewsPage: Feed received, but it's empty.");
          setNewsItems([]); // Ensure it's an empty array
        } else {
          // This case should ideally be caught by the API layer, but as a fallback:
          console.error("NewsPage: Invalid feed structure received (not an array or undefined).");
          setError("Received unexpected data from the news source.");
          setNewsItems([]);
        }
      } catch (err) {
        console.error("NewsPage: Error in loadNews:", err);
        setError(err.message || "Failed to fetch news. Please try again later.");
        setNewsItems([]); // Clear any previous items on error
      } finally {
        setLoading(false);
        console.log("NewsPage: Loading finished.");
      }
    };
    loadNews();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <LoadingErrorContainer>
          <Spinner />
          <p>Loading latest chess news from Lichess...</p>
        </LoadingErrorContainer>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <LoadingErrorContainer>
          <FaExclamationTriangle style={{ color: 'var(--brand-highlight)' }} />
          <p>Error loading news: {error}</p>
          <p>Please check your internet connection or try again later.</p>
        </LoadingErrorContainer>
      </PageContainer>
    );
  }

  if (newsItems.length === 0) {
    return (
        <PageContainer>
            <LoadingErrorContainer>
                <FaNewspaper />
                <p>No news articles found at the moment.</p>
                <p>The Lichess blog might be quiet, or there could be a temporary issue.</p>
            </LoadingErrorContainer>
        </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Helmet>
        <title>Latest Chess News - ChessCon</title>
        <meta name="description" content="Stay informed with the latest articles and updates from the chess world, powered by the Lichess Blog, on ChessCon." />
      </Helmet>
      <PageTitle><FaNewspaper /> Latest Chess News</PageTitle>
      
      <NewsGrid variants={containerVariants} initial="hidden" animate="visible">
        {newsItems.map((item, index) => (
          <NewsItemCard key={item.id || `news-${index}`} customStaggerIndex={index}>
            <NewsTitle>{item.title || "Untitled Article"}</NewsTitle>
            <NewsMeta>
              {item.author && <span><FaUser /> {item.author}</span>}
              {item.date && <span><FaCalendarDay /> {new Date(item.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
            </NewsMeta>
            {/* Lichess API `shortlede` (short lede/summary) contains HTML */}
            {item.shortlede && <NewsShortDescription dangerouslySetInnerHTML={{ __html: item.shortlede }} />}
            <ReadMoreLink href={`https://lichess.org${item.url}`} target="_blank" rel="noopener noreferrer">
              Read Full Article <FaExternalLinkAlt />
            </ReadMoreLink>
          </NewsItemCard>
        ))}
      </NewsGrid>
      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
        News feed powered by <a href="https://lichess.org/blog" target="_blank" rel="noopener noreferrer">Lichess Blog</a>.
      </div>
    </PageContainer>
  );
};

export default NewsPage;