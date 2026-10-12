import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Kumar Ghata",
            rating: 5,
            text: <>Schools, hospitals, and parks are within reach. The thoughtful design and <strong>excellent connectivity</strong> make family living effortless.</>
        },
        {
            id: 2,
            name: "Ramesh Patil",
            rating: 5,
            text: <><strong>Construction quality</strong> exceeded our expectations. Premium materials and thoughtful planning reflect true long-term value.</>
        },
        {
            id: 3,
            name: "Sneha Verma",
            rating: 5,
            text: <>A <strong>highly desirable asset</strong> with seamless connectivity. It consistently attracts quality tenants and delivers lasting value.</>
        },
        {
            id: 4,
            name: "Amit Desai",
            rating: 5,
            text: <>I was stressed about buying a home until I found YARP Homes. The entire process was <strong>smooth and hassle-free</strong>.</>
        },
        {
            id: 5,
            name: "Pooja Sharma",
            rating: 5,
            text: <>Purchased an independent 4BHK villa. From the construction to the interiors, <strong>everything is excellent</strong>. Highly recommended!</>
        },
        {
            id: 6,
            name: "Vikram Mehta",
            rating: 5,
            text: <>The property is <strong>title-clear</strong> and pricing is reasonable. Thank you, YARP Homes, for helping me own my dream home.</>
        },
        {
            id: 7,
            name: "Anjali Rao",
            rating: 5,
            text: <>Dependable utilities and <strong>EV-ready features</strong>. Every detail shows excellent infrastructure planning.</>
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
                            <div className="review-stars">
                                {"★".repeat(review.rating)}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="reviewer-info">
                                <h5>{review.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
