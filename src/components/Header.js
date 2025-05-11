import React from "react";
import styled from "styled-components";
import { FaBars, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  height: 64px;
  background: #10141c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  color: #3fa7ff;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  color: #3fa7ff;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  
  &:hover {
    color: #7fc3ff;
  }
`;

const Header = ({ toggleMobileMenu }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <LogoImage src="/chess_logo.png" alt="ChessCon Logo" />
        <LogoText>ChessCon</LogoText>
      </LogoContainer>
      
      <MenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
        <FaBars />
      </MenuButton>
    </HeaderContainer>
  );
};

export default Header;