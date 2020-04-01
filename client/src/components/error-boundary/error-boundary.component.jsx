import React from 'react';

import {
  ErrorImageOverlay,
  ErrorImageText,
  ErrorImageContainer
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError() {
    // process the error
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/A040Lxr.png"></ErrorImageContainer>
          <ErrorImageText>Sorry this page is lost in space</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
