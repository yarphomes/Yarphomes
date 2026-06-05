import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    // Mixed Media Slideshow
    // Supports 'video' or 'image' type.
    const slides = [
        { type: 'image', src: '/images/hero2_4k.png' },     // Luxury Apartment - Single Static Hero
    ];

    // Check for override videos on mount (pseudo-check) or just user adds them manually to the array above.
    // We keep it simple: Cycle through the slides array.

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // 5 seconds per slide for faster pace
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="hero">
            <div className="hero-bg">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        {slide.type === 'video' ? (
                            <video autoPlay muted loop playsInline className="hero-media">
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        ) : (
                            <img src={slide.src} alt="Premium luxury independent home in Bangalore - Yarp Homes Luxury Home Builder" className="hero-media ken-burns" />
                        )}
                    </div>
                ))}
                <div className="overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)' }}></div>
            </div>

            <div className="hero-content container">
                <div className="hero-layout">
                    <div className="hero-left">
                        <h1 className="hero-description fade-up delay-3" style={{ fontSize: '2.5rem', fontWeight: '600', lineHeight: '1.3', fontFamily: "'Cinzel', serif", color: 'var(--color-white)', textTransform: 'uppercase', letterSpacing: '3px' }}>
                            Luxury Independent Homes Crafted for <span style={{ color: 'var(--color-secondary)' }}>Generational Living</span>
                        </h1>
                        <div className="hero-stats fade-up delay-4">
                            <div className="stat-item">
                                <span className="number">Strategic Locations</span>
                                <span className="label">High-Growth Corridors</span>
                            </div>
                            <div className="stat-item">
                                <span className="number">Long-Term Value</span>
                                <span className="label">Investment-Focused Development</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta-panel fade-up delay-4">
                        <h3 className="cta-panel-headline">
                            From Vision<br />to <span className="cta-accent">Handover</span>
                        </h3>
                        <p className="cta-panel-subtext">
                            Complete turnkey construction crafted for modern family living.
                        </p>
                        <div className="cta-panel-divider"></div>
                        <button className="cta-panel-button" onClick={() => navigate('/contact')}>
                            Book Free Consultation
                        </button>
                        <span className="cta-panel-micro">Personalized project guidance</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
