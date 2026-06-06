import React, { useState, useEffect } from 'react';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  
  // Custom states for form feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      setTimeout(() => setIsVisible(true), 10);
      // Reset messages when opening the modal
      setSubmitMessage('');
      setSubmitStatus('');
    } else {
      setIsVisible(false);
      setTimeout(() => setIsRendered(false), 300); // match transition duration
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(">>> ContactModal handleSubmit FIRED");
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus('');

    const formData = new FormData(e.target);
    // Debug: log all form fields being sent
    for (const [key, value] of formData.entries()) {
      console.log(">>> Form field:", key, "=", value);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Our expert will call you shortly.');
        e.target.reset(); // Clear the input fields
        // Automatically close modal after 3 seconds on success
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isRendered) return null;

  return (
    <div className={`contact-modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div className={`contact-modal-split ${isVisible ? 'visible' : ''}`} onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose}>&times;</button>
        
        <div className="contact-modal-form-side">
          <div className="contact-modal-header">
            <h2>Talk to Our Expert</h2>
          </div>
          
          {submitStatus === 'success' ? (
            <div className="modal-success-state">
              <div className="modal-success-icon">✓</div>
              <h3>Thank You!</h3>
              <p>{submitMessage}</p>
            </div>
          ) : (
            <form className="contact-modal-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="62d4a058-2690-4dcf-bd88-902d8b8110ef" />
              
              <div className="form-group">
                <input type="text" name="name" id="name" required placeholder="Name" />
              </div>
              
              <div className="form-group phone-group">
                <div className="phone-prefix">
                  <span>🇮🇳 ▾ +91</span>
                </div>
                <input type="tel" name="phone" id="phone" required placeholder="Phone Number" />
              </div>
              
              <div className="form-group">
                <input type="email" name="email" id="email" required placeholder="Email Address" />
              </div>
              
              {/* Status Messages for Error */}
              {submitMessage && submitStatus === 'error' && (
                <div className="modal-error-msg">
                  {submitMessage}
                </div>
              )}

              <div className="contact-modal-actions">
                <button 
                  type="submit" 
                  className="btn-submit" 
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'SENDING...' : 'BOOK FREE CONSULTATION'}
                </button>
              </div>
              
              <p className="privacy-text">
                By submitting, you agree to our <a href="#">privacy policy</a>, allowing us to use your information as outlined.
              </p>
            </form>
          )}
        </div>
        
        <div className="contact-modal-cta-side">
          <div className="cta-overlay"></div>
          <div className="cta-content">
            <h3 className="cta-heading">Build Your <span className="text-gold">Dream Home</span> with Confidence</h3>
            <div className="cta-accent-line"></div>
            <p className="cta-highlight-large">Turnkey Construction Experts</p>
            <p className="cta-subtext">From planning to handover — seamless, transparent, and value-driven.</p>
          </div>
          <div className="cta-footer-logo">
            <img src="/images/logo_popup_menu.png" alt="Yarphomes Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
