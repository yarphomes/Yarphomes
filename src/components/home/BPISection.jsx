import React from 'react';
import './BPISection.css';
import { Sun, Wind, TrendingUp, Layout } from 'lucide-react';

const BPISection = () => {
    const indices = [
        {
            icon: <Layout size={32} />,
            title: "Optimized Space",
            description: "Intelligent layouts maximizing usable area."
        },
        {
            icon: <Sun size={32} />,
            title: "Natural Lighting",
            description: "Abundant daylight reducing energy costs."
        },
        {
            icon: <Wind size={32} />,
            title: "Smart Ventilation",
            description: "Superior airflow for ultimate comfort."
        },
        {
            icon: <TrendingUp size={32} />,
            title: "ROI Focused",
            description: "Cost-effective building for long-term value."
        }
    ];

    return (
        <section className="bpi-section">
            <div className="container">
                <div className="bpi-content">
                    <div className="bpi-text">
                        <span className="subtitle">Core Philosophy</span>
                        <h2>Performance-Driven Design</h2>
                        <p className="lead">
                            We use advanced performance indices for value-driven designs that prioritize efficiency, comfort, and environmental impact.
                        </p>
                    </div>

                    <div className="bpi-grid">
                        {indices.map((item, index) => (
                            <div key={index} className="bpi-card">
                                <div className="icon-box">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BPISection;
