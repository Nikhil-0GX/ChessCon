import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import { FaBroadcastTower, FaTwitch, FaExclamationTriangle } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
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

const StreamCard = styled(AnimatedCard)`
  width: 100%;
  max-width: 700px; /* Adjust for a good stream embed size */
  padding: 1.5rem;
  text-align: center;
  border-left: 5px solid var(--brand-secondary);
`;

const IframeContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9; /* Maintain 16:9 aspect ratio for video */
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  background-color: #000; /* Fallback background for iframe */

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }
`;

const StreamInfo = styled.div`
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const MoreStreamsLink = styled.a`
  display: inline-flex; /* Use inline-flex for icon alignment */
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, transform 0.2s ease;

  svg {
    margin-right: 0.75rem; /* Space between icon and text */
  }

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
    color: var(--bg-primary);
  }
`;

const Notice = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: var(--bg-tertiary);
  border-radius: 8px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  max-width: 700px;
  text-align: left;
  line-height: 1.5;

  svg {
    color: var(--brand-highlight);
    margin-right: 0.5rem;
  }
`;

// List of popular chess channels to cycle through or feature
const chessChannels = [
  "chess", // Official Chess.com channel
  "gothamchess",
  "botezlive",
  "gmhikaru",
  "chessbrah",
  "imrosen"
];

const StreamsPage = () => {
  const [currentChannel, setCurrentChannel] = useState(chessChannels[0]);
  const [parentDomain, setParentDomain] = useState("localhost"); // Default for local dev

  useEffect(() => {
    // This is crucial for Twitch embeds to work on deployed sites.
    // It dynamically sets the parent domain based on the window's hostname.
    const hostname = window.location.hostname;
    if (hostname !== "localhost" && hostname !== "127.0.0.1") {
      setParentDomain(hostname);
    }
  }, []);

  // Simple function to cycle through channels (optional)
  // You could implement a UI for users to select channels
  const changeChannel = () => {
    const currentIndex = chessChannels.indexOf(currentChannel);
    const nextIndex = (currentIndex + 1) % chessChannels.length;
    setCurrentChannel(chessChannels[nextIndex]);
  };

  return (
    <PageContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Helmet>
        <title>Live Chess Streams - ChessCon</title>
        <meta name="description" content="Watch live chess streams from top players and commentators on Twitch, right here on ChessCon." />
      </Helmet>
      <PageTitle><FaBroadcastTower /> Live Chess Streams</PageTitle>

      <StreamCard>
        <StreamInfo>
          Currently featuring: <strong>{currentChannel}</strong> on Twitch.
          {/* Optional: Button to change channel
          <button onClick={changeChannel} style={{marginLeft: '1rem', padding: '0.3rem 0.6rem'}}>Next Channel</button>
          */}
        </StreamInfo>
        <IframeContainer>
          <iframe
            title={`Twitch Stream - ${currentChannel}`}
            src={`https://player.twitch.tv/?channel=${currentChannel}&parent=${parentDomain}&muted=false&autoplay=false`} // autoplay=false recommended
            allowFullScreen={true}
            scrolling="no" // Often recommended for iframes
          ></iframe>
        </IframeContainer>
        <MoreStreamsLink href="https://www.twitch.tv/directory/game/Chess" target="_blank" rel="noopener noreferrer">
          <FaTwitch /> Explore More on Twitch
        </MoreStreamsLink>
      </StreamCard>
      
      <Notice>
        <FaExclamationTriangle />
        <strong>Note:</strong> Twitch embeds require interaction (like a click) to unmute audio on some browsers due to autoplay policies. The availability of streams depends on the streamers. If a stream is offline, you might see an offline message or a replay.
      </Notice>
    </PageContainer>
  );
};

export default StreamsPage;