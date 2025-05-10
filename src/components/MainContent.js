import React from "react";
import LearningTracks from "./LearningTracks";
import Tournaments from "./Tournaments";
import News from "./News";
import Community from "./Community";
import Faq from "./Faq";

const MainContent = ({ section }) => (
  <main style={{ flex: 1, padding: "2rem", minHeight: "80vh" }}>
    {section === "home" && (
      <>
        <h2>Welcome to ChessCon!</h2>
        <p>
          Whether you're just discovering chess or striving to go pro, ChessCon is your comprehensive resource. 
          Explore learning roadmaps, tactics, tournaments, community, and mentorship to fuel your chess journey!
        </p>
        <ul>
          <li><strong>Learning Tracks:</strong> Curated study guides from beginner to Grandmaster.</li>
          <li><strong>Tournaments:</strong> Upcoming and major chess events globally and online.</li>
          <li><strong>Latest News:</strong> Stay up to date with chess happenings.</li>
          <li><strong>Community:</strong> Join clubs, forums, and find training partners.</li>
          <li><strong>FAQ:</strong> Get answers to popular questions about going pro.</li>
        </ul>
      </>
    )}
    {section === "learning" && <LearningTracks />}
    {section === "tournaments" && <Tournaments />}
    {section === "news" && <News />}
    {section === "community" && <Community />}
    {section === "faq" && <Faq />}
  </main>
);

export default MainContent;