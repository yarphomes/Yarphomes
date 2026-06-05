import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Smitha Gowda",
            location: "Bangalore",
            text: <>Everything a family needs is within reach—schools, parks, supermarkets, hospitals, and public transport. The thoughtful design, reliable utilities, and <strong>excellent connectivity</strong> make everyday living effortless.</>
        },
        {
            id: 2,
            name: "Shashi Kumar",
            location: "Bangalore (Building Quality Perspective)",
            text: <>The <strong>construction quality and infrastructure</strong> exceeded our expectations. From dependable water systems and premium materials to EV-ready features, every detail reflects long-term value and thoughtful planning.</>
        },
        {
            id: 3,
            name: "Shashi Kumar",
            location: "Bangalore (Investment Perspective)",
            text: <>The location, tenant-friendly amenities, and seamless connectivity make this a <strong>highly desirable asset</strong>. It's a property that consistently attracts quality tenants and delivers lasting value.</>
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <div className="section-header center">
                    <span className="subtitle">Client Stories</span>
                    <h2>What Our Clients Say</h2>
                </div>

                <div className="reviews-grid">
                    {reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer-info">
                                <h5>{review.name}</h5>
                                <span>{review.location}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
