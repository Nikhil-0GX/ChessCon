#!/bin/bash
# ChessCon Setup and Verification Script

echo "🔍 Checking project dependencies..."

# Function to check if a package is installed
check_package() {
    if npm list $1 > /dev/null 2>&1; then
        echo "✅ $1 is installed"
        return 0
    else
        echo "❌ $1 is missing"
        return 1
    }
}

# Required packages
PACKAGES=(
    "react"
    "react-dom"
    "react-router-dom"
    "styled-components"
    "framer-motion"
    "react-icons"
    "react-helmet-async"
    "@testing-library/jest-dom"
    "@testing-library/react"
    "@testing-library/user-event"
)

# Check each package
MISSING_PACKAGES=()
for package in "${PACKAGES[@]}"; do
    if ! check_package $package; then
        MISSING_PACKAGES+=($package)
    fi
done

# Install missing packages if any
if [ ${#MISSING_PACKAGES[@]} -ne 0 ]; then
    echo "📦 Installing missing packages..."
    npm install ${MISSING_PACKAGES[@]}
fi

echo "🧹 Cleaning up..."
echo "- Clearing npm cache"
npm cache clean --force
echo "- Removing old build files"
rm -rf build/
echo "- Clearing browser caches (please do this manually in your browser)"

echo "🔄 Updating project files..."
# This is where you'll place your updated files

echo "🚀 Starting development server..."
npm start

\`\`\`

2. Create a new test file 'src/__tests__/App.test.js' with:
\`\`\`javascript
// src/__tests__/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../ThemeContext';
import App from '../App';

const renderApp = () => {
  return render(
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
};

describe('App Component', () => {
  test('renders loading state initially', () => {
    renderApp();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  test('renders main content after loading', async () => {
    renderApp();
    const mainContent = await screen.findByRole('main');
    expect(mainContent).toBeInTheDocument();
  });

  test('toggles mobile menu', () => {
    renderApp();
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);
    expect(document.body).toHaveClass('mobile-menu-open');
    fireEvent.click(menuButton);
    expect(document.body).not.toHaveClass('mobile-menu-open');
  });

  test('closes mobile menu on escape key', () => {
    renderApp();
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    fireEvent.click(menuButton);
    expect(document.body).toHaveClass('mobile-menu-open');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(document.body).not.toHaveClass('mobile-menu-open');
  });
});