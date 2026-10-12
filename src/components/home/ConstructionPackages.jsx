import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plus } from 'lucide-react';
import { packagesByLocation, locations, defaultLocation } from '../../data/constructionPackagesData';
import './ConstructionPackages.css';

const AccordionItem = ({ category, isOpen, onToggle }) => {
    const contentRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState('0px');

    useEffect(() => {
        if (isOpen) {
            setMaxHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setMaxHeight('0px');
        }
    }, [isOpen]);

    return (
        <div className="accordion-item">
            <button 
                className={`accordion-header ${isOpen ? 'active' : ''}`}
                onClick={onToggle}
            >
                {category.name}
                <div className="accordion-icon">
                    <Plus size={16} />
                </div>
            </button>
            <div 
                className="accordion-content" 
                style={{ maxHeight }}
                ref={contentRef}
            >
                <div className="accordion-content-inner">
                    {category.items.length > 0 ? (
                        <ul>
                            {category.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ fontSize: '0.85rem', color: '#888', paddingLeft: '1rem' }}>
                            Included as standard
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const PackageCard = ({ pkg, index, onOpenContact }) => {
    const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

    const handleToggle = (idx) => {
        setOpenCategoryIndex(openCategoryIndex === idx ? null : idx);
    };

    const formatINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className={`package-card delay-${index + 1} ${pkg.id === 'signature' ? 'signature-package' : ''} package-reveal`}>
            <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                    {formatINR(pkg.price)}
                    <span style={{ fontSize: '1rem', fontWeight: 400, color: '#aaa' }}>/sq.ft</span>
                </div>
                <div className="package-descriptor">(Incl. GST)</div>
            </div>

            <div className="package-accordions">
                {pkg.categories.map((cat, idx) => (
                    <AccordionItem 
                        key={idx} 
                        category={cat} 
                        isOpen={openCategoryIndex === idx}
                        onToggle={() => handleToggle(idx)}
                    />
                ))}
            </div>

            <div className="package-cta">
                <button 
                    className="btn-package"
                    onClick={(e) => {
                        e.preventDefault();
                        if (onOpenContact) onOpenContact();
                    }}
                    style={{ cursor: 'pointer' }}
                >
                    TALK TO AN EXPERT
                </button>
            </div>
        </div>
    );
};

const ConstructionPackages = ({ onOpenContact }) => {
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
    const [areaStr, setAreaStr] = useState('');
    const sectionRef = useRef(null);

    const activePackages = packagesByLocation[selectedLocation] || [];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const revealElements = document.querySelectorAll('.package-reveal, .estimator-reveal');
        revealElements.forEach(el => observer.observe(el));

        return () => {
            revealElements.forEach(el => observer.unobserve(el));
        };
    }, []);

    const formatINR = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    const handleAreaChange = (e) => {
        const value = e.target.value;
        if (value === '' || /^\d+$/.test(value)) {
            setAreaStr(value);
        }
    };

    const areaNum = parseInt(areaStr, 10);
    const isValidArea = !isNaN(areaNum) && areaNum > 0;

    return (
        <section className="construction-packages-section" id="packages" ref={sectionRef}>
            <div className="container">
                <div className="packages-header">
                    <span className="subtitle">Premium Quality, Transparent Pricing</span>
                    <h2>Construction Packages</h2>
                    <p className="lead">
                        End-to-end turnkey solutions tailored to your vision. Choose the perfect specification level for your dream home.
                    </p>
                    
                    <div className="location-selector-wrapper">
                        <span>Currently showing for</span>
                        <div className="location-select-container">
                            <select 
                                className="location-select"
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                            >
                                {locations.map(loc => (
                                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                                ))}
                            </select>
                            <ChevronDown size={16} className="chevron-down" />
                        </div>
                    </div>
                </div>

                <div className="packages-grid">
                    {activePackages.map((pkg, idx) => (
                        <PackageCard key={pkg.id} pkg={pkg} index={idx} onOpenContact={onOpenContact} />
                    ))}
                </div>

                <div className="estimator-section estimator-reveal">
                    <div className="estimator-header">
                        <h3>Estimate Your Home</h3>
                        <p>Enter your expected built-up area to calculate approximate construction costs.</p>
                    </div>

                    <div className="estimator-input-group">
                        <div className="estimator-input-wrapper">
                            <input 
                                type="text"
                                className="estimator-input"
                                placeholder="Enter area..."
                                value={areaStr}
                                onChange={handleAreaChange}
                            />
                            <span className="estimator-unit">sq.ft</span>
                        </div>
                    </div>

                    <div className="estimator-results">
                        {activePackages.map(pkg => {
                            const est = isValidArea ? pkg.price * areaNum : 0;
                            return (
                                <div key={pkg.id} className={`estimator-result-card ${pkg.id === 'signature' ? 'signature' : ''}`}>
                                    <div className="result-name">{pkg.name}</div>
                                    <div className="result-value">
                                        {isValidArea ? formatINR(est) : '---'}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <p className="estimator-disclaimer">
                        * Indicative estimate based on the selected package rate and built-up area. Final project cost may vary based on specific architectural requirements, customized specifications, site conditions, and applicable government charges.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ConstructionPackages;
