import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome, FaGraduationCap, FaTrophy, FaNewspaper, FaUsers,
  FaQuestionCircle, FaPuzzlePiece, FaBroadcastTower, FaCog, FaEnvelope
} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: var(--bg-sidebar);
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 70px;
  height: calc(100vh - 70px);
  overflow-y: auto;
  border-right: 1px solid var(--border-color);
  transition: transform 0.3s ease-in-out, 
              background-color var(--transition-speed-medium) var(--easing-standard);

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    width: 240px;
    transform: translateX(-100%);
    z-index: 999;
    border-right: none;
    box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15);
    padding-top: 1rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    ${({ isOpen }) => isOpen && css`
      transform: translateX(0);
    `}
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  margin: 0 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 6px;
  border-left: 4px solid transparent;
  transition: all var(--transition-speed-fast) var(--easing-standard);

  svg {
    margin-right: 0.8rem;
    font-size: 1.1rem;
    min-width: 18px;
    color: var(--text-secondary);
    transition: all var(--transition-speed-fast) var(--easing-standard);
  }

  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
    transform: translateX(3px);
    
    svg {
      color: var(--text-accent);
    }
  }

  &.active {
    background-color: var(--bg-tertiary);
    color: var(--brand-primary);
    font-weight: 600;
    border-left-color: var(--brand-primary);
    
    svg {
      color: var(--brand-primary);
      transform: scale(1.05);
    }
  }
`;

const menuItems = [
  { to: "/", icon: <FaHome />, label: "Home" },
  { to: "/learning", icon: <FaGraduationCap />, label: "Learning Tracks" },
  { to: "/tournaments", icon: <FaTrophy />, label: "Tournaments" },
  { to: "/news", icon: <FaNewspaper />, label: "Latest News" },
  { to: "/puzzles", icon: <FaPuzzlePiece />, label: "Chess Puzzles" },
  { to: "/streams", icon: <FaBroadcastTower />, label: "Live Streams" },
  { to: "/community", icon: <FaUsers />, label: "Community Hub" },
  { to: "/faq", icon: <FaQuestionCircle />, label: "FAQ" },
  { to: "/settings", icon: <FaCog />, label: "Settings" },
  { to: "/contact", icon: <FaEnvelope />, label: "Contact Us" },
];

const Sidebar = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const location = useLocation();

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen, closeMobileMenu]);

  const handleNavItemClick = () => {
    if (isMobileMenuOpen && window.innerWidth <= 768) {
      closeMobileMenu();
    }
  };

  return (
    <SidebarContainer isOpen={isMobileMenuOpen}>
      <NavList>
        {menuItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            onClick={handleNavItemClick}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {item.icon}
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;