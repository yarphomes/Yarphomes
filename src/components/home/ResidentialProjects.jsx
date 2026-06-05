import React from 'react';
import './ResidentialProjects.css';

const ResidentialProjects = () => {
    // Using existing assets as placeholders for now since generation is limited
    // User can upload specific modern indian home images later
    const projects = [
        {
            id: 1,
            title: "The Grove Estate",
            location: "Whitefield, Bangalore",
            price: "Price on Request",
            type: "Luxury Villa",
            beds: "3 & 4 BHK",
            size: "2400 - 3200 Sq.Ft",
            image: "/images/grove_estate.png", // Modern Whitefield Luxury Asset
            tag: "New Launch"
        },
        {
            id: 2,
            title: "Azure Waterfront",
            location: "ECR, Chennai",
            price: "2.5 Cr Onwards",
            type: "Independent Home",
            beds: "3 BHK",
            size: "1800 Sq.Ft / 5.5 Cents",
            image: "/images/azure_waterfront.jpg", // Custom Chennai Asset
            tag: "Premium"
        },
        {
            id: 3,
            title: "Emerald Enclave",
            location: "Sadashivanagar, Bangalore",
            price: "5.2 Cr Onwards",
            type: "Premium Independent Home",
            beds: "4 & 5 BHK",
            size: "4500 Sq.Ft",
            image: "/images/emerald_enclave.jpg?v=2", // Custom Bangalore Asset
            tag: "Best Seller"
        }
    ];

    return (
        <section id="residential" className="residential-section">
            <div className="container">
                <div className="section-header center">

                    <h2>Residential Projects</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                {project.tag && <span className="project-tag">{project.tag}</span>}
                                <img src={project.image} alt={`${project.title} - ${project.type} in ${project.location} by Yarp Homes`} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-location">{project.location}</p>
                                <div className="project-price">{project.price}</div>

                                <div className="project-specs">
                                    <div className="spec-item">
                                        <span className="spec-label">Project Type</span>
                                        <span className="spec-value">{project.type}</span>
                                    </div>
                                    <div className="spec-item">
                                        <span className="spec-label">Bedrooms</span>
                                        <span className="spec-value">{project.beds}</span>
                                    </div>
                                    <div className="spec-item full-width">
                                        <span className="spec-label">Development Size</span>
                                        <span className="spec-value">{project.size}</span>
                                    </div>
                                </div>

                                <button className="btn-enquire">Enquire Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResidentialProjects;
