import React from 'react';
import './TurnkeyConstruction.css';
import { ShieldCheck, HardHat, Home, TrendingUp } from 'lucide-react';

const TurnkeyConstruction = () => {
    const features = [
        {
            icon: <ShieldCheck size={32} />,
            title: "Cost-Optimized Execution",
            description: "Delivering maximum value without compromising quality."
        },
        {
            icon: <HardHat size={32} />,
            title: "Precision Craftsmanship",
            description: "Built with attention to detail and structural excellence."
        },
        {
            icon: <Home size={32} />,
            title: "Customized Living Solutions",
            description: "Tailored designs aligned with lifestyle needs."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Investment-Driven Approach",
            description: "Focused on long-term asset value."
        }
    ];

    return (
        <section className="turnkey-section" id="turnkey">
            <div className="container">
                <div className="section-header center">
                    <span className="subtitle">Our Expertise</span>
                    <h2>Turnkey Construction</h2>
                    <p className="lead">End-to-end construction solutions designed for clarity, quality, and peace of mind.</p>
                </div>

                <div className="turnkey-grid">
                    {features.map((item, index) => (
                        <div key={index} className="turnkey-card">
                            <div className="icon-box">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TurnkeyConstruction;
