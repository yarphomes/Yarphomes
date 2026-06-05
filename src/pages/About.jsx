import React, { useEffect, useRef } from 'react';
import SEO from '../components/common/SEO';
import './About.css';

const About = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('abt-visible');
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.abt-reveal');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    const timelineEras = [
        {
            era: '01',
            label: 'The Foundation',
            year: '1980s — 2000s',
            title: 'Foundational Legacy',
            text: 'Our roots run deep in custom home construction. From early residential developments — including iconic bungalows and apartments in Golden George Nagar, Chennai — our family background has always been defined by an unwavering commitment to quality and structural integrity.',
            image: '/images/p2_1.jpg',
            align: 'left',
        },
        {
            era: '02',
            label: 'The Expansion',
            year: '2000s — 2010s',
            title: 'Global Experience',
            text: 'With construction and real estate experience dating back to the 1980s, our expertise is shaped by global standards. Having worked as a luxury home builder across New Zealand, Australia, and India, we bring international best practices to every home we build.',
            image: '/images/g_yh.jpg',
            align: 'right',
        },
        {
            era: '03',
            label: 'The Evolution',
            year: '2010s — Present',
            title: 'Modern Yarp Homes',
            text: 'Today, Yarp Homes stands as the premier turnkey construction company and real estate developer, evolving to meet the demands of modern living while focusing on premium independent homes and investment-focused residential developments in Bangalore\'s most strategic corridors.',
            image: '/images/m_yh.png',
            align: 'left',
        },
    ];

    const founderPillars = [
        {
            icon: '⬙',
            title: 'The Builder',
            subtitle: 'Precision & Craft',
            text: 'Uncompromising focus on construction quality and meticulous execution. Every joint, every beam, every finish is held to the highest standard.',
        },
        {
            icon: '◈',
            title: 'The Developer',
            subtitle: 'Strategy & Vision',
            text: 'Strategic focus on optimal land selection and long-term community planning. Every location is chosen for growth, connectivity, and lifestyle value.',
        },
        {
            icon: '▣',
            title: 'The Entrepreneur',
            subtitle: 'Innovation & Foresight',
            text: 'Driven by innovation, market foresight, and future-ready thinking. Every decision is guided by long-term value creation.',
        },
    ];

    const leadershipTeam = [
        {
            name: 'Yarp Homes',
            role: 'Founder & Managing Director',
            philosophy: '"Building is not a profession — it is a responsibility to the families who trust us."',
            image: '/images/CEO.jpeg',
            isLogo: false,
        },
    ];

    // About page specific schemas
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://yarphomes.com/#organization",
        "name": "Yarp Homes",
        "url": "https://yarphomes.com"
    };

    const developerSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": "https://yarphomes.com/about/#developer",
        "name": "Yarp Homes - Real Estate Developer",
        "url": "https://yarphomes.com/about",
        "telephone": "+91-95662-03789",
        "areaServed": ["Karnataka", "Tamil Nadu"]
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://yarphomes.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://yarphomes.com/about"
            }
        ]
    };

    return (
        <div className="about-page-redesign">
            <SEO
                title="About Yarp Homes | Premium Luxury Real Estate Developer & Builder"
                description="Learn about the legacy of Yarp Homes, a leading custom home builder and turnkey construction company with decades of experience in Bangalore, Karnataka & Chennai, Tamil Nadu."
                keywords="Real Estate Developer, Luxury Home Builder, Turnkey Construction Company, Bangalore Real Estate, Custom Home Construction, Residential Development"
                canonical="https://yarphomes.com/about"
                schemas={[orgSchema, developerSchema, breadcrumbSchema]}
            />


            {/* ========================================
                SECTION 2 — THE LEGACY TIMELINE
            ======================================== */}
            <section className="abt-timeline-section">
                <div className="abt-section-header abt-reveal">
                    <span className="abt-section-label">Our Journey</span>
                    <h2 className="abt-section-title">A Legacy <span className="abt-gold">Written in Stone</span></h2>
                </div>

                <div className="abt-timeline">
                    <div className="abt-timeline-line"></div>
                    {timelineEras.map((era, index) => (
                        <div className={`abt-timeline-item abt-timeline-${era.align} abt-reveal`} key={index}>
                            <div className="abt-timeline-image-wrap">
                                <img src={era.image} alt={`${era.title} - ${era.label} of Yarp Homes Legacy`} className="abt-timeline-image" />
                                <div className="abt-timeline-image-overlay"></div>
                                <span className="abt-timeline-era">{era.era}</span>
                            </div>
                            <div className="abt-timeline-content">
                                <span className="abt-timeline-year">{era.year}</span>
                                <span className="abt-timeline-badge">{era.label}</span>
                                <h3 className="abt-timeline-heading">{era.title}</h3>
                                <div className="abt-timeline-divider"></div>
                                <p className="abt-timeline-text">{era.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                SECTION 3 — THE FOUNDER'S APPROACH
            ======================================== */}
            <section className="abt-founder-section">
                <div className="abt-founder-bg">
                    <div className="abt-founder-overlay"></div>
                </div>
                <div className="abt-founder-inner">
                    <div className="abt-section-header abt-reveal">
                        <span className="abt-section-label abt-light">The Founder's Approach</span>
                        <h2 className="abt-section-title abt-white">Three Pillars of <span className="abt-gold">Excellence</span></h2>
                    </div>
                    <div className="abt-pillars-grid">
                        {founderPillars.map((pillar, index) => (
                            <div className="abt-pillar-card abt-reveal" key={index}>
                                <div className="abt-pillar-icon">{pillar.icon}</div>
                                <h3 className="abt-pillar-title">{pillar.title}</h3>
                                <span className="abt-pillar-subtitle">{pillar.subtitle}</span>
                                <div className="abt-pillar-divider"></div>
                                <p className="abt-pillar-text">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================
                SECTION 4 — LEADERSHIP TEAM
            ======================================== */}
            <section className="abt-leadership-section">
                <div className="abt-section-header abt-reveal">
                    <span className="abt-section-label">The People</span>
                    <h2 className="abt-section-title">Leadership <span className="abt-gold">& Vision</span></h2>
                </div>
                <div className="abt-leadership-grid">
                    {leadershipTeam.map((leader, index) => (
                        <div className="abt-leader-card abt-reveal" key={index}>
                            <div className={`abt-leader-portrait ${leader.isLogo ? 'abt-leader-logo' : ''}`}>
                                <img src={leader.image} alt={`${leader.name} - ${leader.role} of Yarp Homes`} />
                            </div>
                            <div className="abt-leader-info">
                                <h3 className="abt-leader-name">{leader.name}</h3>
                                <span className="abt-leader-role">{leader.role}</span>
                                <div className="abt-leader-divider"></div>
                                <p className="abt-leader-philosophy">{leader.philosophy}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ========================================
                SECTION 5 — BRAND PHILOSOPHY / CLOSING
            ======================================== */}
            <section className="abt-closing-section">
                <div className="abt-closing-bg">
                    <img src="/images/pillar_architecture.png" alt="Luxury Architectural Structure by Yarp Homes - Custom Home Construction Builder" className="abt-closing-bg-img" />
                    <div className="abt-closing-overlay"></div>
                </div>
                <div className="abt-closing-content abt-reveal">
                    <span className="abt-closing-label">Our Philosophy</span>
                    <h2 className="abt-closing-heading">
                        Built Beyond <span className="abt-gold">Structures</span>
                    </h2>
                    <div className="abt-closing-divider"></div>
                    <p className="abt-closing-text">
                        At Yarp Homes, we believe a home should stand as a legacy — timeless in design,
                        enduring in value, and crafted for generations.
                    </p>
                    <a href="/contact" className="abt-closing-cta">
                        Book a Consultation
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
