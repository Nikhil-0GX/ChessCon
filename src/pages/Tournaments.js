// src/pages/Tournaments.js
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const TournamentsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 2rem 0;
`;

const TournamentCard = styled.div`
  background: var(--bg-secondary, #181c24);
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.12);
  width: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TournamentImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #222;
`;

const TournamentContent = styled.div`
  padding: 1.2rem;
  flex: 1;
`;

const TournamentTitle = styled.h3`
  color: var(--brand-primary, #3fa7ff);
  margin-bottom: 0.5rem;
`;

const TournamentDesc = styled.p`
  color: var(--text-secondary, #b0b8c1);
  margin-bottom: 1rem;
`;

const TournamentLink = styled.a`
  color: var(--brand-primary, #3fa7ff);
  text-decoration: underline;
  font-weight: 500;
`;

export default function Tournaments() {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/tournaments") // Replace with your API or use fallback below
      .then(res => setTournaments(res.data))
      .catch(() => setTournaments([
        {
          name: "FIDE World Championship",
          description: "The apex title match between the world's best players.",
          image: "/images/FIDE_World_Championship.png",
          url: "https://www.fide.com/world-championship"
        },
        {
          name: "Tata Steel Chess",
          description: "Top-level classical round robin. Open amateur events too.",
          image: "/images/Tata_Steel_Chess.png",
          url: "https://tatasteelchess.com/"
        },
        {
          name: "Chess.com Global Championship",
          description: "Online megatournament open for all levels.",
          image: "/images/Chess.com_Global_Championship.png",
          url: "https://www.chess.com/events/info/2024-chesscom-global-championship"
        },
        {
          name: "U.S. Chess Championship",
          description: "The annual crowning of the US Chess Champion.",
          image: "/images/U.S._Chess_Championship.png",
          url: "https://uschesschamps.com/"
        }
      ]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div style={{ color: "#3fa7ff", margin: "2rem" }}>Loading tournaments...</div>;

  return (
    <div>
      <h2 style={{ color: "#3fa7ff", margin: "2rem 0 1rem 0" }}>Tournaments</h2>
      <TournamentsGrid>
        {tournaments.map((item, idx) => (
          <TournamentCard key={idx}>
            {item.image && <TournamentImage src={item.image} alt={item.name} />}
            <TournamentContent>
              <TournamentTitle>{item.name}</TournamentTitle>
              <TournamentDesc>{item.description}</TournamentDesc>
              {item.url && <TournamentLink href={item.url} target="_blank" rel="noopener noreferrer">View Tournament →</TournamentLink>}
            </TournamentContent>
          </TournamentCard>
        ))}
      </TournamentsGrid>
    </div>
  );
}