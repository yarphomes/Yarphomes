import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';

import Footer from './components/layout/Footer';
import CookieConsent from './components/common/CookieConsent';
import ContactModal from './components/common/ContactModal';

function App() {
    const location = useLocation();
    // Hide footer on contact and about pages
    const showFooter = !['/contact', '/about'].includes(location.pathname);

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [hasTriggeredPopup, setHasTriggeredPopup] = useState(false);

    // Scroll to top on route changes (unless it contains a hash link)
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        }
    }, [location.pathname]);

    // Handle hash links when navigating from other pages
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const scrollToElement = () => {
                const element = document.getElementById(id);
                if (element) {
                    const headerOffset = 90; // offset for the fixed header
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                    const offsetPosition = elementPosition - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };
            
            // Try scrolling immediately
            scrollToElement();
            
            // Also try scrolling with a brief delay in case React is still rendering the page
            const timer = setTimeout(scrollToElement, 150);
            return () => clearTimeout(timer);
        }
    }, [location.pathname, location.hash]);

    useEffect(() => {
        const handleScroll = () => {
            // Trigger popup on homepage when scrolling down
            if (location.pathname === '/' && !hasTriggeredPopup) {
                const scrollThreshold = 800; // Trigger after scrolling 800px
                if (window.scrollY > scrollThreshold) {
                    setHasTriggeredPopup(true);
                    // Slight delay for premium feel
                    setTimeout(() => {
                        setIsContactModalOpen(true);
                    }, 300);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname, hasTriggeredPopup]);

    return (
        <div className="app-container">
            <Header onOpenContact={() => setIsContactModalOpen(true)} />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/residential" element={<Residential />} />
                    <Route path="/commercial" element={<Commercial />} />
                </Routes>
            </main>
            {showFooter && <Footer />}
            <CookieConsent />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        </div>
    );
}

export default App;
