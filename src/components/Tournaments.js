import React from "react";
import styled from "styled-components";
import tournaments from "../data/tournaments";
import { FaExternalLinkAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const EventCard = styled.div`
  background: #222632;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 13px #22222223;
  padding: 1.5rem 1.8rem;
  color: #fffbe2;
  border-left: 7px solid #a8cab7;
`;

const Title = styled.h3`
  color: #91f2e1;
  margin: 0 0 .18rem 0;
  display: flex;
  align-items: center;
`;

const MetaRow = styled.div`
  color: #ffe299;
  font-size: 0.97rem;
  display: flex;
  align-items: center;
  gap: 1.2em;
  margin-bottom: 0.6em;
`;

export default function Tournaments() {
  return (
    <div>
      <h2>♟️ Tournaments & Events</h2>
      <div>
        {tournaments.map(event => (
          <EventCard key={event.name}>
            <Title>
              {event.name}
              <a href={event.link} target="_blank" rel="noopener noreferrer" style={{marginLeft:13, color:'#ffe299'}}>
                <FaExternalLinkAlt style={{fontSize:"1em", verticalAlign:"middle"}} title="official site"/>
              </a>
            </Title>
            <MetaRow>
              <span><FaCalendarAlt/> {event.date}</span>
              <span><FaMapMarkerAlt/> {event.location}</span>
            </MetaRow>
            <div style={{marginBottom:"6px"}}>{event.description}</div>
          </EventCard>
        ))}
      </div>
      <div style={{fontSize: "1em", color:"#fedc97", marginTop:"10px"}}>
        More events at <a href="https://www.fide.com/calendar" style={{color:"#8af5f7"}}>FIDE Calendar</a> and <a href="https://chess.com/tournaments" style={{color:"#89f3c3"}}>Chess.com Tournaments</a>.
      </div>
    </div>
  );
}