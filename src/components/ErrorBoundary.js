import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  padding: 2rem;
  text-align: center;
  background: var(--bg-secondary);
  border-radius: 12px;
  margin: 2rem;
`;

const ErrorTitle = styled.h2`
  color: var(--text-accent);
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 600px;
`;

const RetryButton = styled.button`
  background-color: var(--brand-primary);
  color: var(--text-on-accent);
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--brand-highlight);
    transform: translateY(-2px);
  }
`;

const HomeLink = styled(Link)`
  color: var(--brand-primary);
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 500;

  &:hover {
    color: var(--brand-highlight);
  }
`;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>Oops! Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but something unexpected happened. Please try again or return to the home page.
          </ErrorMessage>
          <div>
            <RetryButton onClick={this.handleRetry}>
              Try Again
            </RetryButton>
          </div>
          <HomeLink to="/">Return to Home</HomeLink>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;