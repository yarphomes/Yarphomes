import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieChoice = localStorage.getItem('cookieConsent');
        if (!cookieChoice) {
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleChoice = (choice) => {
        localStorage.setItem('cookieConsent', choice);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-modal">
                <div className="cookie-content">
                    <p>We use cookies to improve your experience and analyze site traffic.</p>
                </div>
                <div className="cookie-actions">
                    <button onClick={() => handleChoice('reject')} className="btn-cookie btn-reject">Reject</button>
                    <button onClick={() => handleChoice('customize')} className="btn-cookie btn-customize">Customize</button>
                    <button onClick={() => handleChoice('all')} className="btn-cookie btn-all">Accept All</button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
