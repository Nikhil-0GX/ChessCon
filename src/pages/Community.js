// src/pages/Community.js
import React from "react";
import styled from "styled-components";

const CommunityGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

const CommunityCard = styled.div`
  background: var(--bg-secondary, #181c24);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  width: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CommunityImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #222;
`;

const CommunityContent = styled.div`
  padding: 1.2rem;
  flex: 1;
`;

const CommunityTitle = styled.h3`
  color: var(--brand-primary, #3fa7ff);
  margin-bottom: 0.5rem;
`;

const CommunityDesc = styled.p`
  color: var(--text-secondary, #b0b8c1);
  margin-bottom: 1rem;
`;

const CommunityLink = styled.a`
  color: var(--brand-primary, #3fa7ff);
  text-decoration: underline;
  font-weight: 500;
`;

const communities = [
  {
    name: "Chess.com Community",
    description: "Join the largest online chess community.",
    image: "/images/Chess_Community_Hub.png",
    url: "https://www.chess.com/community"
  },
  {
    name: "Lichess Community",
    description: "Open-source chess community for all levels.",
    image: "/images/Lichess_Community.png",
    url: "https://lichess.org/team"
  },
  {
    name: "Reddit r/chess",
    description: "Discuss chess, share memes, and get advice.",
    image: "/images/Reddit_Chess.png",
    url: "https://reddit.com/r/chess"
  },
  // Add more as needed
];

export default function Community() {
  return (
    <div>
      <h2 style={{ color: "#3fa7ff", margin: "2rem 0 1rem 0" }}>Chess Community Hub</h2>
      <CommunityGrid>
        {communities.map((item, idx) => (
          <CommunityCard key={idx}>
            {item.image && <CommunityImage src={item.image} alt={item.name} />}
            <CommunityContent>
              <CommunityTitle>{item.name}</CommunityTitle>
              <CommunityDesc>{item.description}</CommunityDesc>
              {item.url && <CommunityLink href={item.url} target="_blank" rel="noopener noreferrer">Learn More →</CommunityLink>}
            </CommunityContent>
          </CommunityCard>
        ))}
      </CommunityGrid>
    </div>
  );
}