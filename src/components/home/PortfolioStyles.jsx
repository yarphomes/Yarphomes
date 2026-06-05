import React from 'react';
import './PortfolioStyles.css';

const PortfolioStyles = () => {
    const styles = [
        {
            id: 1,
            name: "Victorian Elegance",
            image: "/images/victorian_real.jpg?v=1",
            desc: "Classic charm with modern durability."
        },
        {
            id: 2,
            name: "Kerala Traditional",
            image: "/images/kerala_real.jpg?v=1",
            desc: "Harmony with nature and heritage."
        },
        {
            id: 3,
            name: "Chettinad Grandeur",
            image: "/images/chettinad_real.jpg",
            desc: "Majestic pillars and cultural richness."
        }
    ];

    return (
        <section className="portfolio-styles" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="subtitle">Our Expertise</span>
                    <h2>Signature Styles</h2>
                </div>

                <div className="styles-grid">
                    {styles.map((style) => (
                        <div key={style.id} className="style-card">
                            <div className="style-image-wrapper">
                                <img src={style.image} alt={`${style.name} - Custom Home Construction Style by Yarp Homes`} />
                            </div>
                            <div className="style-content-box">
                                <h3>{style.name}</h3>
                                <p>{style.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioStyles;
