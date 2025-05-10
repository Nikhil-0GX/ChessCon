import React from "react";
import styled from "styled-components";
import tracks from "../data/learningTracks";
import { FaBookReader, FaYoutube, FaFileAlt } from "react-icons/fa";

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  margin-top: 2rem;
`;

const Card = styled.div`
  background: #222632;
  border-radius: 17px;
  box-shadow: 0 2px 14px #22222229;
  padding: 2rem 1.5rem;
  color: #fffbe2;
  border-left: 7px solid #fedc97;
`;

const Level = styled.h3`
  color: #fedc97;
  font-weight: bold;
  margin-bottom: .2rem;
`;

const Desc = styled.p`
  color: #f2e7cb;
`;

const ResList = styled.ul`
  padding-left: 1em;
  font-size: 1.05em;
`;

const TagIcon = ({type}) => {
  switch(type) {
    case "Book": return <FaBookReader style={{color:"#81bcff", marginRight:"7px"}}/>;
    case "Video": return <FaYoutube style={{color:"#E14335", marginRight:"7px"}}/>;
    case "Course": return <FaFileAlt style={{color:"#57cc99", marginRight:"7px"}}/>;
    case "Article": return <FaFileAlt style={{color:"#ffcf4a", marginRight:"7px"}}/>;
    case "Resource": return <FaFileAlt style={{color:"#b273ff", marginRight:"7px"}}/>;
    default: return null;
  }
};

export default function LearningTracks() {
  return (
    <>
      <h2>🎓 Structured Study Paths</h2>
      <span style={{color:"#fffcd1"}}>Choose a track matching your level. Each path has trusted resources, books, and videos.</span>
      <Grid>
        {tracks.map(track => (
          <Card key={track.level}>
            <Level>{track.level}</Level>
            <Desc>{track.description}</Desc>
            <ResList>
              {track.resources.map((r, idx) => (
                <li key={idx}>
                  <TagIcon type={r.type} />
                  <a href={r.link} target="_blank" rel="noopener noreferrer" style={{color:"#fad46b", fontWeight:"bold"}}>
                    {r.title}
                  </a>
                  <span style={{fontSize:"0.89em", color:"#c3baa1", marginLeft:6}}>
                    ({r.type})
                  </span>
                </li>
              ))}
            </ResList>
          </Card>
        ))}
      </Grid>
    </>
  );
}   