import React from 'react';
import ErrorBoundary from '../Components/error-boundary/error-boundary.component';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import HomePageComponent from '../features/HomePage/homePageComponent';

const Main = () => {
    return (
        <div id="main">
            <Router>
                <ErrorBoundary errorMessage="The application has encountered an error.">
                    <React.Fragment>
                        <Route
                            exact
                            path='/'
                            component={HomePageComponent}
                        />
                    </React.Fragment>
                </ErrorBoundary>
            </Router>
        </div>
    );
};

export default Main;
