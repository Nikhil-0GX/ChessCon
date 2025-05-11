import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { 
  FaHome, 
  FaGraduationCap, 
  FaTrophy, 
  FaNewspaper, 
  FaPuzzlePiece,
  FaBroadcastTower, 
  FaUsers, 
  FaQuestionCircle, 
  FaCog, 
  FaEnvelope 
} from "react-icons/fa";

const SidebarContainer = styled.aside`
  width: 220px;
  background: var(--bg-sidebar, #181c24);
  color: var(--text-secondary, #b0b8c1);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transform: translateX(${props => (props.open ? "0" : "-100%")});
  transition: transform 0.3s ease;
  padding-top: 60px; /* Space for header */
  
  @media (min-width: 768px) {
    transform: translateX(0);
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  color: var(--text-secondary, #b0b8c1);
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  
  &:hover, &.active {
    background: var(--bg-tertiary, #23293a);
    color: var(--brand-primary, #3fa7ff);
  }
  
  svg {
    margin-right: 1rem;
    font-size: 1.2rem;
  }
`;

const Sidebar = ({ open, onClose }) => {
  return (
    <SidebarContainer open={open}>
      <NavList>
        <NavItem to="/" onClick={onClose}>
          <FaHome /> Home
        </NavItem>
        <NavItem to="/learning" onClick={onClose}>
          <FaGraduationCap /> Learning Tracks
        </NavItem>
        <NavItem to="/tournaments" onClick={onClose}>
          <FaTrophy /> Tournaments
        </NavItem>
        <NavItem to="/news" onClick={onClose}>
          <FaNewspaper /> Latest News
        </NavItem>
        <NavItem to="/puzzles" onClick={onClose}>
          <FaPuzzlePiece /> Chess Puzzles
        </NavItem>
        <NavItem to="/streams" onClick={onClose}>
          <FaBroadcastTower /> Live Streams
        </NavItem>
        <NavItem to="/community" onClick={onClose}>
          <FaUsers /> Community Hub
        </NavItem>
        <NavItem to="/faq" onClick={onClose}>
          <FaQuestionCircle /> FAQ
        </NavItem>
        <NavItem to="/settings" onClick={onClose}>
          <FaCog /> Settings
        </NavItem>
        <NavItem to="/contact" onClick={onClose}>
          <FaEnvelope /> Contact Us
        </NavItem>
      </NavList>
    </SidebarContainer>
  );
};

export default Sidebar;