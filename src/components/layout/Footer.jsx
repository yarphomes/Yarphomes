import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img src="/images/footer_yh.png" alt="Yarp Homes - Premium Luxury Home Builder" />
                    </Link>
                    <p className="footer-desc">
                        Premium luxury independent homes, custom home construction, and turnkey residential & commercial developments across Karnataka & Tamil Nadu.
                    </p>
                    <div className="social-links">
                        <a href="https://www.facebook.com/share/1H1qYybPE2/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                        <a href="https://www.instagram.com/yarp.homes?utm_source=qr&igsh=c3FqMG02eGVnanpw" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://youtube.com/@yarp-homes?si=sWegZbjP1u-6wrzq" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="YouTube">
                            <Youtube size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <a href="/#turnkey">Turnkey Construction</a>
                    <Link to="/residential">Residential Projects</Link>
                    <Link to="/commercial">Commercial Space</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <div className="contact-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        <span>yarphomes@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <Phone size={16} />
                        <span>+91 95662 03789</span>
                    </div>
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=51/1+Shalom+Garden,+Forest+Road,+Kannadapalayam,+West+Tambaram,+Chennai+-+600045"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-item footer-address-link"
                    >
                        <MapPin size={16} />
                        <span>51/1 Shalom Garden, Forest Road, Kannadapalayam, West Tambaram, Chennai - 600045</span>
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Yarphomes. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
