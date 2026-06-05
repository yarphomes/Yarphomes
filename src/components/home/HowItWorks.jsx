import { Link } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
    // ... existing steps ...
    const steps = [
        {
            id: 1,
            title: "Strategic Land Selection",
            description: "Identifying high-growth locations with strong appreciation potential."
        },
        {
            id: 2,
            title: "Precision Development",
            description: "Thoughtfully designed homes with a focus on quality and long-term durability."
        },
        {
            id: 3,
            title: "Value Appreciation",
            description: "Assets built to deliver sustainable long-term growth."
        }
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="section-header center">
                    <span className="subtitle">Our Process</span>
                    <h2>How It Works</h2>
                </div>

                <div className="steps-grid">
                    {steps.map((step) => (
                        <div key={step.id} className="step-card">
                            <div className="step-number">0{step.id}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="cta-container">
                    <Link to="/contact" className="btn-primary">Book With Us</Link>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
