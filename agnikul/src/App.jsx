// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageReveal from './components/ImageReveal';
import FactsFigures from './components/FactsFigures';
import LaunchContainer from './components/LaunchContainer';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <HeroSection />
                <ImageReveal />
                <FactsFigures />
                <LaunchContainer />
                <footer>
                    {/* Footer Content */}
                </footer>
            </div>
        </Router>
    );
}

export default App;