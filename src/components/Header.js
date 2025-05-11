import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import logoSrc from '../assets/chess_logo.png';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: var(--bg-header);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  z-index: 1000;
  transition: background-color var(--transition-speed-medium) var(--easing-standard);

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    height: 60px;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--text-accent);
  transition: opacity var(--transition-speed-fast) var(--easing-standard);

  &:hover {
    opacity: 0.9;
  }
`;

const LogoImage = styled.img`
  height: 40px;
  width: auto;
  margin-right: 0.75rem;

  @media (max-width: 768px) {
    height: 32px;
    margin-right: 0.5rem;
  }
`;

const SiteTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--text-accent);
  font-family: var(--font-secondary);

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--text-accent);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--brand-highlight);
    transform: rotate(12deg);
  }
`;

const MobileMenuToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-accent);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  display: none; 
  transition: color 0.2s ease;
  z-index: 1000; 

  &:hover {
    color: var(--brand-highlight);
  }

  @media (max-width: 768px) {
    display: flex; 
    align-items: center;
    justify-content: center;
  }
`;

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <LogoLink to="/" onClick={() => isMobileMenuOpen && toggleMobileMenu()}>
        <LogoImage src={logoSrc} alt="ChessCon Logo" />
        <SiteTitle>ChessCon</SiteTitle>
      </LogoLink>
      <HeaderControls>
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </ThemeToggleButton>
        <MobileMenuToggle onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>
      </HeaderControls>
    </StyledHeader>
  );
};

export default Header;