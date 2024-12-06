import React, { useState } from 'react';
import './FactsFigures.css'; 
const FactsFigures = () => {
    const facts = [
        { value: '5', label: 'Configurations', hoverMessage: 'A first stage with 4 / 5 / 6 or 7 engines. A “baby” stage could be made available for select missions.' },
        { value: '2', label: 'Weeks', hoverMessage: 'Payload integration to launch won’t take more than a fortnight. Yes, launch-when-you-want.' },
        { value: '10+', label: 'Launch Ports', hoverMessage: 'Access to 10+ launchports today. Access to 25+ coming soon. Yes, launch-where-you-want.' },
        { value: '100kg', label: 'Mass', hoverMessage: 'Same price per kg for any payload in the 25-100 kg range. Yes, pay-for-what-you-launch.' },
    ];
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoverMessage, setHoverMessage] = useState('');

    return (
        <div className = "facts-figures-container">
            <h2 className="b">Facts & Figures</h2> 
            <p className="a">Agnibaan’s first stage could have 4 / 5 / 6 or 7 engines. An optional third “baby” stage might be available for select missions.</p> 
        <div className="facts-cards">
                {facts.map((fact, index) => (
                    <div 
                        key={index} 
                        className="fact-card"
                        onMouseEnter={() => {
                            setHoveredIndex(index); 
                            setHoverMessage(fact.hoverMessage);
                        }} 
                        onMouseLeave={() => {
                            setHoveredIndex(null); 
                            setHoverMessage('');
                        }} 
                    >
                        <h3>{hoveredIndex === index ? ' ' : fact.value}</h3> {/* Change text on hover */}
                        <p>{hoveredIndex === index ? hoverMessage : fact.label}</p> {/* Show specific hover message */}
                    </div>
                ))}
        </div>
        </div>
    );
};

export default FactsFigures;
