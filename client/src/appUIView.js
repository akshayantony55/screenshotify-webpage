import React from 'react';
import './App.css';
import View from './view/view';

const AppUIView = () => {
    return (
        <div className="ViewContainer">
            {/* <TopBar /> */}
            <div>
                <View />
            </div>
        </div>
    );
};

export default AppUIView;
