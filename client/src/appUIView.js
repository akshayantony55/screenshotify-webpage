import React from 'react';
import './App.css';
import View from './view/view';

const AppUIView = () => {
    return (
        <div className="AppContainer">
            {/* <TopBar /> */}
            <div className="AppContainer">
                <View />
            </div>
        </div>
    );
};

export default AppUIView;
