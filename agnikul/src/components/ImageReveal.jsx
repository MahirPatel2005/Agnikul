import React from 'react';
import './ImageReveal.css';

const ImageReveal = () => {
    return (
        <div className="image-reveal-container">
            <div className="image-description">
                <h2>Agnibaan is a highly customizable, 2 stage launch vehicle.</h2>
                <p>
                    Capable of taking up to 100 kg to orbits around 700 km high, Agnibaan can access both low and high inclination orbits and is completely mobile – designed for accessing more than 10 launchports.
                </p>
                <p>
                    Driven by LOX/Kerosene engines in all its stages, Agnibaan is configurable by the customer. Yes, Agnibaan doesn’t fly with the same number of engines all the time. The mission, the satellite, and the launchport itself would decide how many engines go on the first stage.
                </p>
                <p>How is this possible? What about controllability? Assembly?</p>
                <a href="/more-info" className="more-info-button">Tell me more</a>
            </div>
            <div className="image-reveal">
                <img src="https://www.agnikul.in/static/media/home-agni.cc387bed4312c9ebd8ce.jpg" alt="Agnibaan" /> {/* Replace with your image URL */}
            </div>
        </div>
    );
};

export default ImageReveal;
