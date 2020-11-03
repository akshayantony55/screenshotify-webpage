import React from 'react';
import ErrorBoundary from './Components/error-boundary/error-boundary.component';
import AppUIView from './appUIView';
import './App.css';

const MainApp = () => (
  <div className="appContainer">
    <ErrorBoundary errorMessage="The application has encountered an error.">
      <AppUIView />
    </ErrorBoundary>
  </div>
);
export default MainApp;
