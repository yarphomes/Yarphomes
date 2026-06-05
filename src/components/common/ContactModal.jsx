import React, { useState, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            setTimeout(() => setIsRendered(false), 300); // match transition duration
        }
    }, [isOpen]);

    if (!isRendered) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        onClose();
    };

    return (
        <div className={`contact-modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
            <div className={`contact-modal-split ${isVisible ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
                <button className="contact-modal-close" onClick={onClose}>&times;</button>
                
                <div className="contact-modal-form-side">
                    <div className="contact-modal-header">
                        <h2>Talk to Our Expert</h2>
                    </div>
                    <form className="contact-modal-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" required placeholder="Name" />
                        </div>
                        <div className="form-group phone-group">
                            <div className="phone-prefix">
                                <span>🇮🇳 ▾ +91</span>
                            </div>
                            <input type="tel" id="phone" required placeholder="Phone Number" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" required placeholder="Email Address" />
                        </div>
                        <div className="contact-modal-actions">
                            <button type="submit" className="btn-submit">Book Free Consultation</button>
                        </div>
                        <p className="privacy-text">
                            By submitting, you agree to our <a href="#">privacy policy</a>, allowing us to use your information as outlined.
                        </p>
                    </form>
                </div>
                
                <div className="contact-modal-cta-side">
                    <div className="cta-overlay"></div>
                    <div className="cta-content">
                        <h3 className="cta-heading">Build Your <span className="text-gold">Dream Home</span> with Confidence</h3>
                        <div className="cta-accent-line"></div>
                        <p className="cta-highlight-large">Turnkey Construction Experts</p>
                        <p className="cta-subtext">From planning to handover — seamless, transparent, and value-driven.</p>
                    </div>
                    <div className="cta-footer-logo">
                        <img src="/images/logo_popup_menu.png" alt="Yarphomes Logo" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactModal;
