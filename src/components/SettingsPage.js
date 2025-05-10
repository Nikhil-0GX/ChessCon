// src/components/SettingsPage.js
import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useTheme } from '../ThemeContext';
import { FaPalette, FaCog, FaSun, FaMoon } from 'react-icons/fa';
import AnimatedCard from './AnimatedCard';

const PageContainer = styled(motion.div)`
  padding: 2rem;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const PageTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--brand-primary);
  font-family: var(--font-secondary);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1rem;
  }
`;

const SettingsSection = styled(AnimatedCard)`
  margin-bottom: 2rem;
  padding: 2rem;
  border-left: 5px solid var(--brand-secondary);
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-accent);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  font-family: var(--font-secondary);

  svg {
    margin-right: 0.75rem;
    color: var(--brand-secondary);
  }
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.label`
  font-size: 1.05rem;
  font-weight: 500;
`;

const ThemeToggleButton = styled.button`
  background-color: var(--bg-tertiary);
  color: var(--text-accent);
  border: 1px solid var(--border-color);
  padding: 0.6rem 1.2rem;
  border-radius: 25px; /* Pill shape */
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: var(--brand-primary);
    color: var(--text-on-accent);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <PageContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Helmet>
        <title>Settings - ChessCon</title>
        <meta name="description" content="Customize your ChessCon experience. Adjust theme preferences and other settings." />
      </Helmet>
      <PageTitle><FaCog /> Settings</PageTitle>

      <SettingsSection customStaggerIndex={0}>
        <SectionTitle><FaPalette /> Appearance</SectionTitle>
        <SettingItem>
          <SettingLabel htmlFor="theme-toggle">Theme</SettingLabel>
          <ThemeToggleButton onClick={toggleTheme} id="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
            <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
          </ThemeToggleButton>
        </SettingItem>
        {/* Placeholder for more settings */}
        <SettingItem>
          <SettingLabel>Notifications (Coming Soon)</SettingLabel>
          <span style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>Unavailable</span>
        </SettingItem>
        <SettingItem>
          <SettingLabel>Language (Coming Soon)</SettingLabel>
          <span style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>English (Default)</span>
        </SettingItem>
      </SettingsSection>

      {/* You can add more SettingsSection cards for different categories of settings */}

    </PageContainer>
  );
};

export default SettingsPage;