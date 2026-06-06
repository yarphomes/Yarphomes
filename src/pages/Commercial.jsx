import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import CommercialSection from '../components/home/CommercialSection';
import './Commercial.css';

const Commercial = () => {
    // GEO-friendly FAQ data
    const faqs = [
        {
            question: "Does Yarp Homes build custom commercial properties on client-owned land?",
            answer: "Yes, Yarp Homes provides comprehensive turnkey commercial construction services. We design and build high-quality business assets, including boutique corporate offices, retail showrooms, luxury hospitality spaces, and multi-tenant commercial complexes in Bangalore, Chennai, and other parts of Karnataka and Tamil Nadu."
        },
        {
            question: "Where are your commercial developments located in Karnataka and Tamil Nadu?",
            answer: "Our commercial construction portfolio is focused on major urban centers and high-traffic commercial corridors. This includes IT hubs and prime retail areas in Bangalore (Whitefield, Indiranagar, Outer Ring Road) and Chennai (OMR, West Tambaram, ECR), ensuring maximum visibility and rental yield for business owners and investors."
        },
        {
            question: "What makes Yarp Homes a leading commercial real estate developer in South India?",
            answer: "We stand out due to our investment-driven designs, strict adherence to zoning laws and building codes, cost-optimized execution, and transparent turnkey process. We manage everything from obtaining legal permits and custom design blueprints to final construction and interior fit-outs, delivering custom spaces ready for business operations."
        },
        {
            question: "How can I partner with Yarp Homes for a commercial joint venture or custom build?",
            answer: "You can schedule a consultation with our commercial development team. We offer customized joint venture models, investor-friendly turnkey options, and architectural consultation to transform your strategic land parcel into a high-yielding, premium commercial asset."
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
        "@id": "https://yarphomes.com/commercial/#developer",
        "name": "Yarp Homes - Commercial Developer",
        "image": "https://yarphomes.com/images/p4.jpg",
        "url": "https://yarphomes.com/commercial",
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
                "name": "Commercial Developments",
                "item": "https://yarphomes.com/commercial"
            }
        ]
    };

    return (
        <div className="commercial-page-container">
            <SEO
                title="Premium Commercial Developments & Custom Business Spaces | Yarp Homes"
                description="Discover boutique offices, retail showrooms, and luxury commercial developments by Yarp Homes, the leading commercial builder and real estate developer in Karnataka & Tamil Nadu."
                keywords="Real Estate Developer, Commercial Development, Turnkey Construction Company, Bangalore Real Estate, Chennai Real Estate, Custom Home Construction"
                canonical="https://yarphomes.com/commercial"
                schemas={[orgSchema, developerSchema, faqSchema, breadcrumbSchema]}
            />

            {/* 1. Commercial Main Component */}
            <div id="commercial-portfolio">
                <CommercialSection />
            </div>

            {/* 2. Commercial Investment Insights (Additional GEO Text content for AI indexing) */}
            <section className="com-insights-section container">
                <div className="com-insights-grid">
                    <div className="com-insight-card">
                        <h3>Boutique Corporate Offices</h3>
                        <p>
                            We create state-of-the-art office spaces that reflect professionalism, incorporating sustainable materials, natural lighting, and intelligent design layouts to boost productivity.
                        </p>
                    </div>
                    <div className="com-insight-card">
                        <h3>Luxury Retail Showrooms</h3>
                        <p>
                            Designed for high footfalls and brand prominence, our retail structures in Bangalore and Chennai feature expansive facades, premium finishes, and strategic structural configurations.
                        </p>
                    </div>
                    <div className="com-insight-card">
                        <h3>Hospitality & Mixed-Use</h3>
                        <p>
                            From boutique hotels and luxury cafes to mixed-use commercial centers, we offer turnkey solutions that prioritize ROI, structural endurance, and aesthetics that wow visitors.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. GEO-Optimized FAQ Section for Search Engines and AI Agents */}
            <section className="com-faq-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="subtitle">Developer Guidance</span>
                        <h2>Commercial Development FAQ</h2>
                        <p className="lead">Understand the legal, financial, and construction parameters of building commercial developments with Yarp Homes.</p>
                    </div>

                    <div className="com-faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="com-faq-card">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Luxury Call to Action */}
            <section className="com-cta-section">
                <div className="com-cta-bg"></div>
                <div className="com-cta-content container">
                    <h2>Expand Your Commercial Footprint</h2>
                    <p>Contact our commercial development division to review joint venture opportunities or custom built-to-suit commercial projects.</p>
                    <Link to="/contact" className="com-cta-btn">Enquire Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Commercial;
