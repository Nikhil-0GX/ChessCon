// src/components/Header.js
import React from 'react'; // Removed useState, useEffect as state is now from App.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../ThemeContext';
import logoSrc from '../assets/chess_logo.png';

// ... (StyledHeader, LogoLink, LogoImage, SiteTitle, HeaderControls, ThemeToggleButton remain the same)
const StyledHeader = styled.header` /* ... */ `;
const LogoLink = styled(Link)` /* ... */ `;
const LogoImage = styled.img` /* ... */ `;
const SiteTitle = styled.h1` /* ... */ `;
const HeaderControls = styled.div` /* ... */ `;
const ThemeToggleButton = styled.button` /* ... */ `;

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

// Accept isMobileMenuOpen and toggleMobileMenu as props
const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <StyledHeader>
      <LogoLink to="/" onClick={() => isMobileMenuOpen && toggleMobileMenu()} > {/* Close menu if open and logo is clicked */}
        <LogoImage src={logoSrc} alt="ChessCon Logo" />
        <SiteTitle>ChessCon</SiteTitle>
      </LogoLink>
      <HeaderControls>
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </ThemeToggleButton>
        {/* Use the passed toggleMobileMenu function */}
        <MobileMenuToggle id="mobile-menu-toggle-button" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuToggle>
      </HeaderControls>
    </StyledHeader>
  );
};

export default Header;