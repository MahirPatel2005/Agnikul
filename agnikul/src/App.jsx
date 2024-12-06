// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageReveal from './components/ImageReveal';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <HeroSection />
                <ImageReveal />
                <footer>
                    {/* Footer Content */}
                </footer>
            </div>
        </Router>
    );
}

export default App;