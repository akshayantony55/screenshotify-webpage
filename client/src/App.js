import React from 'react';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';
import AppUIView from './appUIView';

const MainApp = () => (
    <ErrorBoundary errorMessage="The application has encountered an error.">
      <AppUIView />
    </ErrorBoundary>);
export default MainApp;
