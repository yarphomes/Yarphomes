import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ onOpenContact }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50 || location.pathname !== '/');
        };
        window.addEventListener('scroll', handleScroll);
        setScrolled(window.scrollY > 50 || location.pathname !== '/');
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link 
                    to="/" 
                    className="logo"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <img src="/images/main_logo_yh.png" alt="Yarp Homes - Premium Luxury Home Builder" />
                </Link>

                <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                    <a href="/#turnkey" onClick={() => setMenuOpen(false)}>Turnkey</a>
                    <Link to="/residential" onClick={() => setMenuOpen(false)}>Yarp Signatures</Link>
                    <Link to="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                    <div className="header-contact-group">
                        <a 
                            href="https://wa.me/919566203789" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="header-whatsapp"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="currentColor" 
                                width="14" 
                                height="14"
                            >
                                <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.761.458 3.477 1.332 5.006l-1.354 4.954 5.071-1.33c1.478.806 3.14 1.23 4.843 1.233H12c5.506 0 9.988-4.482 9.988-9.988S17.518 2 12.012 2zm0 18.286c-1.583 0-3.136-.426-4.502-1.232l-.323-.192-3.348.878.892-3.267-.21-.336c-.886-1.41-1.354-3.054-1.354-4.75 0-4.735 3.85-8.586 8.586-8.586 4.735 0 8.586 3.85 8.586 8.586-.002 4.736-3.852 8.586-8.587 8.587zm4.708-6.425c-.258-.129-1.527-.753-1.762-.839-.236-.086-.407-.129-.578.129-.17.258-.66.839-.809 1.011-.148.172-.297.193-.556.064-.258-.129-1.09-.402-2.077-1.282-.767-.685-1.286-1.533-1.436-1.79-.15-.258-.016-.398.113-.526.116-.116.258-.3.387-.451.129-.15.172-.258.258-.43.086-.172.043-.323-.021-.451-.064-.13-.578-1.393-.792-1.908-.209-.502-.42-.433-.578-.44l-.493-.01c-.172 0-.451.065-.687.323-.236.258-.901.88-0.901 2.146s.923 2.49 1.052 2.662c.129.172 1.817 2.774 4.398 3.886.614.264 1.094.422 1.468.541.618.196 1.18.169 1.624.103.495-.074 1.527-.623 1.741-1.224.215-.6.215-1.117.15-1.224-.063-.109-.235-.172-.493-.301z"/>
                            </svg>
                            <span>+91 95662 03789</span>
                        </a>
                        <Link to="/contact" className="btn-contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                    </div>
                </nav>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
