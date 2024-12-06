import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Phone</h3>
                <p>+91 72472 46334</p>
            </div>
            <div className="footer-section">
                <h3>Corporate Addresses</h3>
                <p>3rd floor, IIT Madras,<br />Chennai 600036,<br />India</p>
                <p>1415 Park Ave W, Denver, CO<br />80205, USA</p>
            </div>
            <div className="footer-section">
                <h3>Email</h3>
                <p>Careers - <a href="mailto:humancapital@agnikul.in">humancapital@agnikul.in</a></p>
                <p>Customers - <a href="mailto:payloadpeople@agnikul.in">payloadpeople@agnikul.in</a></p>
            </div>
            <div className="footer-section">
                <h3>Other Address</h3>
                <p>Agnikul Cosmos Launch Vehicles Private Limited<br />
                Kerala Startup Mission,<br />
                Technopark, Thejaswini, G3B,<br />
                Technopark Rd, Karyavattom,<br />
                Thiruvananthapuram, Kerala 695581</p>
            </div>
            <div className="footer-section">
                <h3>Curious to know more about us? Reach out to</h3>
                <p><a href="mailto:curious@agnikul.in">curious@agnikul.in</a></p>
                <a href="#">Blog</a><br />
                <a href="#">News</a><br />
                <a href="#">Videos</a><br />
                <a href="#">Terms, Conditions and Privacy Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
