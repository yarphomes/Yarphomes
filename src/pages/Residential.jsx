import React from 'react';
import SEO from '../components/common/SEO';

import YarpSignatures from '../components/home/YarpSignatures';
import PortfolioStyles from '../components/home/PortfolioStyles';
import './Residential.css';

const Residential = () => {
    // GEO-friendly FAQ data
    const faqs = [
        {
            question: "Where does Yarp Homes build premium independent homes in Karnataka and Tamil Nadu?",
            answer: "Yarp Homes constructs premium independent homes, custom luxury villas, and residential developments in high-growth corridors across Karnataka and Tamil Nadu. Our primary projects are situated in Bangalore's strategic areas like Whitefield, Indiranagar, and Sadashivanagar, as well as Chennai's premium residential stretches like East Coast Road (ECR) and West Tambaram."
        },
        {
            question: "Why should I choose custom home construction over purchasing pre-built apartments in Bangalore?",
            answer: "Custom home construction offers unmatched flexibility, structural personalization, and higher long-term asset value. As a luxury home builder, Yarp Homes crafts custom independent homes designed around your family's lifestyle. Independent homes appreciate at a higher rate because you own the underlying land asset, making them a highly investment-focused option in Bangalore and Chennai real estate."
        },
        {
            question: "How does Yarp Homes ensure the completed residence matches the initial 3D design blueprints?",
            answer: "Through our proprietary Yarp Signatures process, 'What You See Is What You Get'. We design every custom villa in high-fidelity 3D down to the smallest detail before construction starts. Our team manages the entire turnkey execution, including structural engineering and material sourcing, to guarantee the final physical handover matches the approved design with absolute precision."
        },
        {
            question: "What architectural styles do you specialize in for residential developments?",
            answer: "We specialize in three signature architectural styles tailored for premium homes in South India: Victorian Elegance (combining classic European aesthetics with modern durability), Kerala Traditional (featuring elements harmonious with nature and local heritage), and Chettinad Grandeur (famous for majestic pillars, spacious courtyards, and cultural richness)."
        }
    ];

    // Schema Markups
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://yarphomes.com/#organization",
        "name": "Yarp Homes",
        "url": "https://yarphomes.com",
        "logo": "https://yarphomes.com/images/logo_yarphomes.png",
        "sameAs": [
            "https://www.facebook.com/share/1H1qYybPE2/",
            "https://www.instagram.com/yarp.homes?utm_source=qr&igsh=c3FqMG02eGVnanpw",
            "https://youtube.com/@yarp-homes?si=sWegZbjP1u-6wrzq"
        ]
    };

    const developerSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": "https://yarphomes.com/residential/#developer",
        "name": "Yarp Homes - Luxury Home Builder",
        "image": "https://yarphomes.com/images/hero2_4k.png",
        "url": "https://yarphomes.com/residential",
        "telephone": "+91-95662-03789",
        "priceRange": "$$$$",
        "parentOrganization": {
            "@type": "Organization",
            "@id": "https://yarphomes.com/#organization"
        },
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "Karnataka" },
            { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
            { "@type": "AdministrativeArea", "name": "Bangalore" },
            { "@type": "AdministrativeArea", "name": "Chennai" }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "51/1 Shalom Garden, Forest Road, Kannadapalayam, West Tambaram",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600045",
            "addressCountry": "IN"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
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
                "name": "Residential Projects",
                "item": "https://yarphomes.com/residential"
            }
        ]
    };

    return (
        <div className="residential-page-container">
            <SEO
                title="Premium Independent Homes & Luxury Villas in Karnataka & Tamil Nadu | Yarp Homes"
                description="Discover Yarp Signatures and custom residential developments by Yarp Homes, the premier luxury home builder in Bangalore and Chennai. Turnkey custom home construction crafted for generational living."
                keywords="Premium Homes in Karnataka, Premium Homes in Tamil Nadu, Luxury Home Builder, Custom Home Construction, Residential Development, Premium Independent Homes, Bangalore Real Estate, Karnataka Real Estate, Tamil Nadu Real Estate"
                canonical="https://yarphomes.com/residential"
                schemas={[orgSchema, developerSchema, faqSchema, breadcrumbSchema]}
            />



            {/* 2. Slider Comparison Section */}
            <div id="yarp-signatures-showcase">
                <YarpSignatures />
            </div>

            {/* 3. Signature Styles Section */}
            <div id="design-styles">
                <PortfolioStyles />
            </div>

            {/* 4. GEO-Optimized FAQ Section for Search Engines and AI Agents */}
            <section className="res-faq-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="subtitle">Client Guidance</span>
                        <h2>Residential Construction FAQ</h2>
                        <p className="lead">Common questions answered naturally for homebuyers and investors looking to build custom luxury assets.</p>
                    </div>

                    <div className="res-faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="res-faq-card">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Luxury Call to Action */}
            <section className="res-cta-section">
                <div className="res-cta-bg"></div>
                <div className="res-cta-content container">
                    <h2>Ready to Build Your Generational Asset?</h2>
                    <p>Connect with our senior consulting engineers and planners for a personalized turnkey proposal in Bangalore or Chennai.</p>
                    <a href="/contact" className="res-cta-btn">Book Consultation</a>
                </div>
            </section>
        </div>
    );
};

export default Residential;
