import React from 'react';
import PropTypes from 'prop-types';
import './error-boundary.component.scss';

class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }

    handleRefresh = () => {
        window.location.reload();
    };

    render() {
        const { errorMessage, t } = this.props;

        // If there is an error, render any custom fallback UI
        if (this.state.hasError) {
            return (
                <div className="ErrorBoundary">
                    <h1>{t(errorMessage)}</h1>
                    <span>
                        Please <a onClick={this.handleRefresh}>Click Here</a> to reload the
                            application.
                    </span>
                </div>
            );
        }

        // If there is no error, just return the components that the Error Boundary is wrapping
        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element.isRequired,
    errorMessage: PropTypes.string.isRequired
};

export default ErrorBoundary;
