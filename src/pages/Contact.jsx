import React, { useState } from 'react';
import SEO from '../components/common/SEO';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Dynamically extract the Web3Forms access key from the hidden form field
        const accessKey = e.target.access_key?.value || "62d4a058-2690-4dcf-bd88-902d8b8110ef";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Contact Page schemas
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://yarphomes.com/#organization",
        "name": "Yarp Homes",
        "url": "https://yarphomes.com"
    };

    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://yarphomes.com/contact/#contactpage",
        "name": "Contact Yarp Homes",
        "url": "https://yarphomes.com/contact",
        "description": "Book a free turnkey construction consultation with Yarp Homes client planners.",
        "mainEntity": {
            "@type": "RealEstateAgent",
            "name": "Yarp Homes",
            "telephone": "+91-95662-03789",
            "email": "yarphomes@gmail.com",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "51/1 Shalom Garden, Forest Road, Kannadapalayam, West Tambaram",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "postalCode": "600045",
                "addressCountry": "IN"
            }
        }
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
                "name": "Contact",
                "item": "https://yarphomes.com/contact"
            }
        ]
    };

    return (
        <div className="contact-page-container">
            <SEO
                title="Contact Yarp Homes | Book a Turnkey Construction Consultation"
                description="Connect with Yarp Homes, the premier luxury home builder and turnkey construction company in Karnataka & Tamil Nadu. Schedule your free consultation for custom independent homes."
                keywords="Luxury Home Builder, Custom Home Construction, Turnkey Construction Company, Real Estate Developer, Bangalore Real Estate, Chennai Real Estate"
                canonical="https://yarphomes.com/contact"
                schemas={[orgSchema, contactSchema, breadcrumbSchema]}
            />
            
            <div className="contact-hero-banner">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content container">
                    <h1>Connect with Yarp Homes</h1>
                    <p className="contact-hero-sub">Begin your custom home or commercial development journey with us</p>
                </div>
            </div>

            <div className="contact-page">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>Ready to build your asset? Contact our premium client team for a consultation.</p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <strong>Email</strong>
                                <span>yarphomes@gmail.com</span>
                            </div>
                            <div className="detail-item">
                                <strong>Phone</strong>
                                <span>+91 95662 03789</span>
                            </div>
                            <div className="detail-item">
                                <strong>Office Address</strong>
                                <address className="contact-address-wrap">
                                    <a 
                                        href="https://www.google.com/maps/search/?api=1&query=51/1+Shalom+Garden,+Forest+Road,+Kannadapalayam,+West+Tambaram,+Chennai+-+600045"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-address-link"
                                    >
                                        51/1 Shalom Garden, Forest Road, Kannadapalayam, West Tambaram, Chennai - 600045
                                    </a>
                                </address>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="access_key" value="62d4a058-2690-4dcf-bd88-902d8b8110ef" />
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>
                            <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="submit-success-msg">Thank you for your interest! Our team will contact you shortly.</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="submit-error-msg">Something went wrong. Please try again or email us directly.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
