// src/pages/News.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const NewsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

const NewsCard = styled.div`
  background: var(--bg-secondary, #181c24);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  width: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #222;
`;

const NewsContent = styled.div`
  padding: 1.2rem;
  flex: 1;
`;

const NewsTitle = styled.h3`
  color: var(--brand-primary, #3fa7ff);
  margin-bottom: 0.5rem;
`;

const NewsSummary = styled.p`
  color: var(--text-secondary, #b0b8c1);
  margin-bottom: 1rem;
`;

const NewsLink = styled.a`
  color: var(--brand-primary, #3fa7ff);
  text-decoration: underline;
  font-weight: 500;
`;

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/news") // Replace with your API or use fallback below
      .then(res => setNews(res.data))
      .catch(() => setNews([
        {
          title: "Carlsen Defends World Rapid Title",
          summary: "Magnus Carlsen proves unstoppable in the Rapid format at the World Rapid Championships.",
          image: "/images/Carlsen_Defends.png",
          url: "https://www.chess.com/news/view/carlsen-defends-world-rapid-title"
        },
        {
          title: "Next Chess Queen's Gambit Announced",
          summary: "A new chess-themed series inspired by The Queen's Gambit is set for production in 2025.",
          image: "/images/Next_Chess.png",
          url: "https://www.chess.com/news/view/next-chess-queens-gambit"
        },
        {
          title: "FIDE Announces New Title Regulations",
          summary: "Upcoming title changes will simplify the candidate process for IM/GM norms.",
          image: "/images/FIDE_Announces.png",
          url: "https://www.fide.com/news/announces-title-regulations"
        }
      ]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: "#3fa7ff", margin: "2rem" }}>Loading news...</div>;

  return (
    <div>
      <h2 style={{ color: "#3fa7ff", margin: "2rem 0 1rem 0" }}>Latest News</h2>
      <NewsGrid>
        {news.map((item, idx) => (
          <NewsCard key={idx}>
            {item.image && <NewsImage src={item.image} alt={item.title} />}
            <NewsContent>
              <NewsTitle>{item.title}</NewsTitle>
              <NewsSummary>{item.summary}</NewsSummary>
              {item.url && <NewsLink href={item.url} target="_blank" rel="noopener noreferrer">Read More →</NewsLink>}
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </div>
  );
}