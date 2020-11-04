import React from 'react';
import PropTypes from 'prop-types';
import './spinner.scss';

const Spinner = ({
    centered,
    defaultSizing,
    helperClass,
    circleHelperClass,
    customSvgStyle,
    customCircleStyle
}) => {
    const classString = `Spinner ${centered ? 'Centered' : ''} ${
        defaultSizing ? 'DefaultSizing' : ''
    } ${helperClass}`;
    const circleClassString = `Path ${circleHelperClass}`;
    return (
        <svg className={classString} viewBox="0 0 50 50" style={customSvgStyle}>
            <circle
                className={circleClassString}
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
                style={customCircleStyle}
            />
        </svg>
    );
};

Spinner.propTypes = {
    centered: PropTypes.bool,
    defaultSizing: PropTypes.bool,
    customSvgStyle: PropTypes.object,
    customCircleStyle: PropTypes.object,
    helperClass: PropTypes.string,
    circleHelperClass: PropTypes.string
};

Spinner.defaultProps = {
    centered: true,
    defaultSizing: true,
    customSvgStyle: {},
    customCircleStyle: {},
    helperClass: '',
    circleHelperClass: ''
};

export default Spinner;
