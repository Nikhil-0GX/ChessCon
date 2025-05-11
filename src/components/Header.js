// src/components/Header.js
import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const HeaderBar = styled.header`
  height: 60px;
  background: var(--bg-header, #10131a);
  color: var(--brand-primary, #3fa7ff);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 2100;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 2rem;
  cursor: pointer;
  display: block;
  @media (min-width: 900px) {
    display: none;
  }
`;

export default function Header({ onMenuClick }) {
  return (
    <HeaderBar>
      <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
        <img src="/chess_logo.png" alt="ChessCon" style={{ height: 32, marginRight: 8, verticalAlign: "middle" }} />
        ChessCon
      </span>
      <Hamburger onClick={onMenuClick} aria-label="Open sidebar">
        <FaBars />
      </Hamburger>
    </HeaderBar>
  );
}