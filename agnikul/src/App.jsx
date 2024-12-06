// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ImageReveal from './components/ImageReveal';
import FactsFigures from './components/FactsFigures';
import LaunchContainer from './components/LaunchContainer';
import Footer from './components/Footer';
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
                <Footer />
            </div>
        </Router>
    );
}

export default App;