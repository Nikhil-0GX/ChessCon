// src/components/Sidebar.js
import React from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import {
  FaHome, FaGraduationCap, FaTrophy, FaNewspaper, FaPuzzlePiece,
  FaBroadcastTower, FaUsers, FaQuestionCircle, FaCog, FaEnvelope
} from "react-icons/fa";

const SidebarContainer = styled.aside`
  width: 250px;
  background: var(--bg-sidebar, #181c24);
  color: var(--text-secondary, #b0b8c1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2000;
  transform: translateX(${props => (props.open ? "0" : "-100%")});
  transition: transform 0.3s cubic-bezier(.4,0,.2,1);
  box-shadow: 2px 0 12px rgba(0,0,0,0.15);

  @media (min-width: 900px) {
    position: static;
    transform: none;
    box-shadow: none;
    height: auto;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem 1rem 1.5rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--brand-primary, #3fa7ff);
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  @media (min-width: 900px) {
    display: none;
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.9rem 1.5rem;
  color: inherit;
  text-decoration: none;
  font-size: 1.05rem;
  border-left: 4px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  svg { margin-right: 1rem; font-size: 1.2rem; }
  &:hover, &.active {
    background: var(--bg-tertiary, #23293a);
    color: var(--brand-primary, #3fa7ff);
    border-left: 4px solid var(--brand-primary, #3fa7ff);
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

export default function Sidebar({ open, onClose }) {
  return (
    <SidebarContainer open={open}>
      <SidebarHeader>
        ChessCon
        <CloseBtn onClick={onClose} aria-label="Close sidebar">&times;</CloseBtn>
      </SidebarHeader>
      <NavList>
        {menuItems.map(item => (
          <NavItem key={item.to} to={item.to} onClick={onClose}>
            {item.icon}
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
}