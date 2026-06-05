import React, { useState } from 'react';
import './YarpSignatures.css';

const YarpSignatures = () => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (clientX, rect) => {
        const x = clientX - rect.left;
        const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pct);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
    };

    return (
        <section className="signatures-section" id="signatures">
            <div className="container">
                <div className="signatures-header">
                    <span className="signatures-badge">YARP SIGNATURES</span>
                    <h2 className="signatures-title">From Vision<br />to Reality</h2>
                    <p className="signatures-subtitle">
                        Every Yarp Signatures home begins as a meticulous 3D blueprint — and is built to match it exactly. 
                        Drag the slider to see how our designs translate into finished homes with uncompromising precision.
                    </p>
                </div>

                <div className="signatures-showcase">
                    {/* Swipe comparison — 9:16 portrait */}
                    <div 
                        className="comparison-container"
                        onMouseMove={handleMouseMove}
                        onMouseUp={() => setIsDragging(false)}
                        onMouseLeave={() => setIsDragging(false)}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={() => setIsDragging(false)}
                    >
                        {/* Real image (bottom layer) */}
                        <div className="comparison-img comparison-real">
                            <img src="/images/real_yh.png" alt="Completed Premium Independent Home in Karnataka - Yarp Signatures Reality" />
                            <span className="comparison-label comparison-label-real">REALITY</span>
                        </div>

                        {/* 3D render (top layer, clipped) */}
                        <div 
                            className="comparison-img comparison-3d"
                            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                        >
                            <img src="/images/3d_yh.jpg" alt="3D architectural rendering of luxury custom home in Tamil Nadu - Yarp Signatures Design" />
                            <span className="comparison-label comparison-label-3d">3D DESIGN</span>
                        </div>

                        {/* Slider handle */}
                        <div 
                            className="comparison-slider"
                            style={{ left: `${sliderPos}%` }}
                            onMouseDown={() => setIsDragging(true)}
                            onTouchStart={() => setIsDragging(true)}
                        >
                            <div className="slider-line"></div>
                            <div className="slider-handle">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Feature highlights */}
                    <div className="signatures-features">
                        <div className="sig-feature">
                            <div className="sig-feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                    <path d="M2 17l10 5 10-5"></path>
                                    <path d="M2 12l10 5 10-5"></path>
                                </svg>
                            </div>
                            <div>
                                <h4>Precision Blueprint</h4>
                                <p>Every home is designed in detailed 3D before a single brick is laid.</p>
                            </div>
                        </div>
                        <div className="sig-feature">
                            <div className="sig-feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4>What You See Is What You Get</h4>
                                <p>Our builds match the 3D renders with uncompromising accuracy.</p>
                            </div>
                        </div>
                        <div className="sig-feature">
                            <div className="sig-feature-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4>Premium Materials</h4>
                                <p>Built with top-grade materials that ensure lasting quality and value.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YarpSignatures;
