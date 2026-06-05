import React from 'react';
import SEO from '../components/common/SEO';
import HeroSection from '../components/home/HeroSection';
import PillarsSection from '../components/home/PillarsSection';
import TurnkeyConstruction from '../components/home/TurnkeyConstruction';
import YarpSignatures from '../components/home/YarpSignatures';
import CommercialSection from '../components/home/CommercialSection';
import Testimonials from '../components/home/Testimonials';
import './Home.css'; // Let's check or create Home.css if needed, or import standard page spacing

const Home = () => {
    // GEO-friendly Q&As for the homepage
    const faqs = [
        {
            question: "Who is Yarp Homes and what do they specialize in?",
            answer: "Yarp Homes is a premier real estate developer and luxury home builder. We specialize in end-to-end turnkey construction, custom home building, and residential & commercial development in South India, with a core focus on Bangalore, Karnataka and Chennai, Tamil Nadu."
        },
        {
            question: "What is turnkey construction and how does Yarp Homes manage it?",
            answer: "Turnkey construction is a comprehensive building model where Yarp Homes handles the entire lifecycle of a construction project. We manage land evaluation, architectural layouts, structural engineering, government approvals, material procurement, interior designing, and construction execution up to the final handover. This ensures cost-optimized execution and precision craftsmanship."
        },
        {
            question: "Does Yarp Homes guarantee that the completed physical build matches the 3D designs?",
            answer: "Yes, our 'What You See Is What You Get' philosophy ensures that our finished projects match the initial approved 3D blueprints and digital renders with uncompromising precision. We use high-quality materials and stringent quality audits at every stage of construction to maintain this legacy."
        },
        {
            question: "Where are Yarp Homes' projects located in Bangalore and Chennai?",
            answer: "We develop residential and commercial assets in high-growth corridors that offer maximum investment appreciation. Our key focus regions are Bangalore (Whitefield, Indiranagar, Sadashivanagar) in Karnataka, and Chennai (East Coast Road/ECR, West Tambaram) in Tamil Nadu."
        },
        {
            question: "Why should I choose an independent custom home over a pre-built apartment?",
            answer: "An independent custom home offers superior privacy, personalized layouts, and unmatched ownership of the land asset. Unlike apartments, custom independent homes built by Yarp Homes prioritize performance-driven design (natural light, ventilation) and deliver significantly higher appreciation and long-term asset value."
        }
    ];

    // Schema structures
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://yarphomes.com/#organization",
        "name": "Yarp Homes",
        "url": "https://yarphomes.com",
        "logo": "https://yarphomes.com/images/logo_yarphomes.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-95662-03789",
            "contactType": "sales",
            "areaServed": ["IN-KA", "IN-TN"],
            "availableLanguage": ["English", "Kannada", "Tamil"]
        },
        "sameAs": [
            "https://www.facebook.com/share/1H1qYybPE2/",
            "https://www.instagram.com/yarp.homes?utm_source=qr&igsh=c3FqMG02eGVnanpw",
            "https://youtube.com/@yarp-homes?si=sWegZbjP1u-6wrzq"
        ]
    };

    const businessSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": "https://yarphomes.com/#localbusiness",
        "name": "Yarp Homes",
        "image": "https://yarphomes.com/images/hero2_4k.png",
        "url": "https://yarphomes.com",
        "telephone": "+91-95662-03789",
        "priceRange": "$$$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "51/1 Shalom Garden, Forest Road, Kannadapalayam, West Tambaram",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600045",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 12.9238,
            "longitude": 80.0911
        },
        "areaServed": [
            { "@type": "AdministrativeArea", "name": "Karnataka" },
            { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
            { "@type": "AdministrativeArea", "name": "Bangalore" },
            { "@type": "AdministrativeArea", "name": "Chennai" }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "24",
            "bestRating": "5",
            "worstRating": "1"
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

    return (
        <div className="home-page">
            <SEO
                title="Yarp Homes | Premium Luxury Home Builder & Turnkey Construction"
                description="Yarp Homes is a premier luxury home builder and turnkey construction company in Karnataka & Tamil Nadu. We craft premium independent homes & investment-focused residential developments in Bangalore & Chennai."
                keywords="Premium Homes in Karnataka, Premium Homes in Tamil Nadu, Turnkey Construction Company, Luxury Home Builder, Custom Home Construction, Residential Development, Real Estate Developer, Premium Independent Homes, Investment-Focused Homes, Bangalore Real Estate, Karnataka Real Estate, Tamil Nadu Real Estate"
                canonical="https://yarphomes.com"
                schemas={[orgSchema, businessSchema, faqSchema]}
            />

            {/* Homepage Sections */}
            <HeroSection />
            <PillarsSection />
            <TurnkeyConstruction />
            
            <YarpSignatures />
            <CommercialSection />
            <Testimonials />

            {/* GEO-friendly FAQ Section at the bottom */}
            <section className="home-faq-section">
                <div className="container">
                    <div className="section-header center">
                        <span className="subtitle">Knowledge Hub</span>
                        <h2>Frequently Asked Questions</h2>
                        <p className="lead">Understand turnkey custom home construction and property investment in Karnataka & Tamil Nadu.</p>
                    </div>

                    <div className="home-faq-grid">
                        {faqs.map((faq, index) => (
                            <div key={index} className="home-faq-card">
                                <h3>{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
