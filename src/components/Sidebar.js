// src/components/Sidebar.js
import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome, FaGraduationCap, FaTrophy, FaNewspaper, FaUsers,
  FaQuestionCircle, FaPuzzlePiece, FaBroadcastTower, FaCog, FaEnvelope
} from 'react-icons/fa';

const SidebarContainer = styled.aside`
  width: 250px; /* Desktop width */
  background-color: var(--bg-sidebar);
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-shrink: 0; /* Prevent sidebar from shrinking if content is wide */
  
  /* Desktop Styling: Sticky next to content */
  position: sticky; 
  top: 70px; /* Must match desktop Header height */
  height: calc(100vh - 70px); /* Fill remaining viewport height */
  overflow-y: auto; /* Allow sidebar content to scroll if it's too long */
  border-right: 1px solid var(--border-color);
  
  transition: transform 0.3s ease-in-out, 
              background-color var(--transition-speed-medium) var(--easing-standard);

  @media (max-width: 768px) {
    /* Mobile Styling: Fixed overlay sliding in from the left */
    position: fixed; 
    left: 0;
    top: 60px; /* Must match mobile Header height */
    height: calc(100vh - 60px); /* Fill remaining viewport height below mobile header */
    width: 240px; /* Slightly adjusted mobile width */
    transform: translateX(-100%); /* Hidden by default off-screen to the left */
    z-index: 999; /* High z-index to be above content but below modals/header menu icon */
    border-right: none; /* No border when it's an overlay */
    box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.15); /* Shadow to make it distinct */
    padding-top: 1rem; /* Adjust padding for mobile */

    /* Show sidebar when isOpen (isMobileMenuOpen from App.js) is true */
    ${({ isOpen }) => isOpen && css`
      transform: translateX(0);
    `}
  }
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.3rem; /* Slightly reduced gap between items */
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem; /* Adjusted padding */
  margin: 0 0.5rem; /* Horizontal margin to give some breathing room */
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 1rem; /* Slightly smaller for a denser look if needed */
  font-weight: 500;
  border-radius: 6px; /* Rounded corners for NavItems */
  border-left: 4px solid transparent; /* Keep for active state indicator */
  transition: background-color var(--transition-speed-fast) var(--easing-standard), 
              color var(--transition-speed-fast) var(--easing-standard), 
              border-left-color var(--transition-speed-fast) var(--easing-standard),
              transform var(--transition-speed-fast) var(--easing-standard);

  svg {
    margin-right: 0.8rem; /* Adjusted icon margin */
    font-size: 1.1rem; /* Adjusted icon size */
    min-width: 18px; 
    color: var(--text-secondary); /* Ensure icons also get themed color */
    transition: color var(--transition-speed-fast) var(--easing-standard), 
                transform var(--transition-speed-fast) var(--easing-standard);
  }

  &:hover {
    background-color: var(--bg-tertiary);
    color: var(--text-accent);
    transform: translateX(3px); /* Slight shift on hover */
    svg {
      color: var(--text-accent); /* Icon color change on hover */
    }
  }

  &.active {
    background-color: var(--bg-tertiary); /* More distinct active background */
    color: var(--brand-primary); /* Use brand primary for active text */
    font-weight: 600;
    border-left-color: var(--brand-primary);
    svg {
      color: var(--brand-primary); /* Icon color matches active text */
      transform: scale(1.05);
    }
  }
`;

// Menu items definition
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

// Props: isMobileMenuOpen (boolean), closeMobileMenu (function)
const Sidebar = ({ isMobileMenuOpen, closeMobileMenu }) => {
  const location = useLocation(); // To determine active link

  // This function will be called when a NavItem is clicked.
  // It ensures the mobile menu closes IF it's currently open AND we are on a mobile device.
  const handleNavItemClick = () => {
    if (isMobileMenuOpen && window.innerWidth <= 768) {
      closeMobileMenu();
    }
  };

  return (
    // The `isOpen` prop is passed to the styled SidebarContainer to control its visibility on mobile
    <SidebarContainer isOpen={isMobileMenuOpen}>
      <NavList>
        {menuItems.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            // `isActive` prop is automatically handled by NavLink for `className="active"`
            // className={location.pathname === item.to ? "active" : ""} // NavLink handles this better
            onClick={handleNavItemClick} // Call our handler to close menu on mobile
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