import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import AnimatedCard from "./AnimatedCard";
import { motion } from "framer-motion";

const Centered = styled.div`
  text-align: center;
  padding: 2.3rem 0;
`;

export default function Puzzle() {
  return (
    <Centered>
      <Helmet><title>Practice Chess Puzzle - ChessCon</title></Helmet>
      <motion.h2 initial={{y:-24, opacity:0}} animate={{y:0, opacity:1}}>🧩 Try a Live Chess Puzzle!</motion.h2>
      <AnimatedCard>
        <iframe
          title="Lichess Puzzle"
          src="https://lichess.org/training/frame?theme=blue"
          width="380"
          height="410"
          allowtransparency="true"
          frameBorder="0"
          style={{borderRadius:"13px", background:"#232835"}}
        ></iframe>
        <p style={{marginTop:"1.3em", fontSize:"1.06em"}}>For more, visit <a href="https://lichess.org/training" target="_blank" style={{color:"#8af5f7"}}>Lichess Training</a></p>
      </AnimatedCard>
    </Centered>
  );
}