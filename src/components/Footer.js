import React from "react";
import styled from "styled-components";

const FooterBar = styled.footer`
  background: #181c24;
  color: #3fa7ff;
  text-align: center;
  padding: 1.2rem 0 1rem 0;
  font-size: 1rem;
  border-top: 1.5px solid #1a2233;
  letter-spacing: 0.5px;
`;

export default function Footer() {
  return (
    <FooterBar>
      ChessCon &copy; {new Date().getFullYear()} &mdash; Aspire. Learn. Master.
    </FooterBar>
  );
}