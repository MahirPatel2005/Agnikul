import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const slides = [
    {
        image: 'https://amchronicle.com/wp-content/uploads/2021/02/Agnikul-Rocket-e1613354247471.jpg', // Replace with your image URLs
        title: 'Bringing Space Within',
        subtitle: "Everyone's Reach",
        description: 'Going to space shouldn’t be the hardest part of utilizing, living in or working from space.',
    },
    {
        image: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2020/09/30/889516-pjimage.jpg',
        title: 'Innovating Space Travel',
        subtitle: "A New Era",
        description: 'Designing products that make space accessible to everyone.',
    },
    {
        image: 'https://globalindian.com/wp-content/uploads/2021/06/agnikul.jpg',
        title: 'Affordable Launches',
        subtitle: "Your Gateway to Space",
        description: 'Making space journeys simple, quick, and affordable.',
    },
    {
        image: 'https://www.globalindian.com/wp-content/uploads/2021/06/agnikul1.png',
        title: 'Join the Revolution',
        subtitle: "Explore the Universe",
        description: 'Be part of the next generation of space explorers.',
    },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000); // Change slide every 7 seconds

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${slides[currentSlide].image})` }}>
            <div className="hero-content">
                <h1>{slides[currentSlide].title}</h1>
                <h2>{slides[currentSlide].subtitle}</h2>
                <p>{slides[currentSlide].description}</p>
                <a href="/agnibaan" className="hero-button">Check out Agnibaan</a>
            </div>
            <div className="slide-buttons">
                <button className="slide-button" onClick={prevSlide}>❮</button>
                <button className="slide-button" onClick={nextSlide}>❯</button>
            </div>
            <div className={`slide ${currentSlide === 0 ? 'slide-in' : 'slide-out'}`}></div>
        </div>
    );
};

export default HeroSection;
