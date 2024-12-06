import React from 'react';
import './LaunchContainer.css'; // Import the CSS file

const LaunchContainer = () => {
    return (
        <div className="launch-container">
            <h1>Ready To Launch ?</h1>
            <p>Yes, Agnibaan is configurable (If you have not picked that up already)!. So, let’s go to space together.</p>
            <button className="launch-button">
                BOOK A LAUNCH
            </button>
        </div>
    );
};

export default LaunchContainer;
