import React from 'react';
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
                        <button className="btn-secondary" onClick={() => window.location.href = '/contact'}>Get Early Access</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommercialSection;
