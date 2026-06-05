import React, { useEffect, useRef } from 'react';
import './PillarsSection.css';

const pillars = [
    {
        id: 1,
        heading: 'Generational Architecture',
        description: 'Thoughtfully designed homes crafted for timeless comfort, modern family living, and multi-generational experiences.',
        image: '/images/pillar_architecture.png',
        icon: '⟐',
    },
    {
        id: 2,
        heading: 'Turnkey Peace of Mind',
        description: 'From planning and engineering to interiors and final delivery, every detail is managed seamlessly.',
        image: '/images/p2_1.jpg',
        icon: '◈',
    },
    {
        id: 3,
        heading: 'Strategic Growth Locations',
        description: "Developed in Bangalore's high-potential corridors focused on connectivity, lifestyle, and appreciation.",
        image: '/images/p3.png',
        icon: '▣',
    },
    {
        id: 4,
        heading: 'Uncompromising Craftsmanship',
        description: 'Premium materials, refined detailing, and enduring engineering built for long-term quality.',
        image: '/images/p4.jpg',
        icon: '◆',
    },
];

const PillarsSection = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('pillar-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        cardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="pillars-section" ref={sectionRef}>
            <div className="pillars-header">
                <span className="pillars-eyebrow">Our Foundation</span>
                <h2 className="pillars-title">
                    The Pillars of <span className="text-accent">Yarp Homes</span>
                </h2>
                <p className="pillars-subtitle">
                    A foundation built on legacy, craftsmanship, and long-term value creation.
                </p>
                <div className="pillars-divider"></div>
            </div>

            <div className="pillars-grid">
                {pillars.map((pillar, index) => (
                    <div
                        key={pillar.id}
                        className="pillar-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="pillar-card-bg">
                            <img src={pillar.image} alt={`${pillar.heading} - Foundation Pillar of Yarp Homes`} />
                        </div>
                        <div className="pillar-card-overlay"></div>
                        <div className="pillar-card-content">
                            <span className="pillar-card-number">0{pillar.id}</span>
                            <div className="pillar-card-icon">{pillar.icon}</div>
                            <h3 className="pillar-card-heading">{pillar.heading}</h3>
                            <div className="pillar-card-line"></div>
                            <p className="pillar-card-desc">{pillar.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PillarsSection;
