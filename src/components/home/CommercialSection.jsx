import React from 'react';
import { Link } from 'react-router-dom';
import './CommercialSection.css';

const CommercialSection = () => {
    return (
        <section id="commercial" className="commercial-section">
            <div className="container">
                <div className="section-header center">
                    <span className="subtitle">Business Spaces</span>
                    <h2>Commercial Designs</h2>
                </div>

                <div className="commercial-placeholder">
                    <div className="placeholder-content">
                        <p>Our premium commercial portfolio is currently being curated.</p>
                        <p>We specialize in boutique offices, retail showrooms, and luxury hospitality spaces.</p>
                        <Link to="/contact" className="btn-secondary">Get Early Access</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommercialSection;
