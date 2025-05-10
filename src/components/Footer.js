import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter, FaChess } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--bg-header); /* Same as header for consistency */
  color: var(--text-secondary);
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid var(--border-color);
  font-size: 0.9rem;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CopyrightText = styled.p`
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const SocialLinks = styled.div`
  margin-bottom: 1rem;
  a {
    color: var(--text-secondary);
    font-size: 1.5rem;
    margin: 0 0.75rem;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: var(--brand-primary);
      transform: translateY(-2px);
    }
  }
`;

const AttributionText = styled.p`
  font-size: 0.8rem;
  a {
    color: var(--text-accent);
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyrightText>
          ChessCon &copy; {new Date().getFullYear()} &mdash; Aspire. Learn. Master.
        </CopyrightText>
        <SocialLinks>
          <a href="https://github.com/Nikhil-0GX" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/nikhil-goel-432b1333a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://lichess.org/@/whitevoidxn" target="_blank" rel="noopener noreferrer" aria-label="Lichess">
            <FaChess />
          </a>
        </SocialLinks>
        <AttributionText>
                  Built with AI. Chess data powered by <a href="https://lichess.org/api" target="_blank" rel="noopener noreferrer">Lichess API</a>.
          <br />
          
        </AttributionText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;