"use client";

import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Your actual email
  const formSubmitEmail = "e57ea68ed03e0785658347a97eb3faf2";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Set loading state
    setIsLoading(true);
    
    // Get form data
    const formData = new FormData(e.currentTarget);
    
    // Submit to FormSubmit
    fetch(`https://formsubmit.co/${formSubmitEmail}`, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      setIsLoading(false);
      if (response.ok) {
        setIsSubmitted(true);
        // Form will be unmounted when isSubmitted becomes true, no need to reset
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <section id="get-started" className="py-20 bg-[var(--background-alt)]">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--color-black)]">
            Contact <span className="text-[var(--color-primary)]">Us</span> Today
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
          <p className="text-xl text-[var(--text-secondary)]">
            Ready to elevate your lead generation strategy? Reach out to Prime Midin and discover how we can help grow your business.
          </p>
        </div>

        <div 
          className={`max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--color-black)]">Thank You!</h3>
              <p className="text-xl text-[var(--text-secondary)] mb-6">
                Your inquiry has been successfully submitted. A Prime Midin representative will contact you within 24 hours to discuss how we can help grow your business.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary text-lg px-8 py-3"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              method="POST"
              className="space-y-6"
            >
              {/* Hidden fields for FormSubmit configuration */}
              <input type="hidden" name="_subject" value="New Inquiry from Prime Midin Website" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_autoresponse" value="Thank you for your inquiry. We have received your message and will get back to you shortly." />
              
              {/* Name and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="block text-[var(--text-secondary)] font-medium">
                    Full Name*
                  </label>
                  <input 
                    type="text" 
                    id="full-name" 
                    name="full-name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="company-name" className="block text-[var(--text-secondary)] font-medium">
                    Company Name*
                  </label>
                  <input 
                    type="text" 
                    id="company-name" 
                    name="company-name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-[var(--text-secondary)] font-medium">
                    Business Email*
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                    disabled={isLoading}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-[var(--text-secondary)] font-medium">
                    Phone Number*
                  </label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Services Interested In */}
              <div className="space-y-3">
                <p className="block text-[var(--text-secondary)] font-medium">
                  Services Interested In
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="inbound-calls"
                      className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      disabled={isLoading}
                    />
                    <span className="text-[var(--text-secondary)]">Inbound Call Generation</span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="live-transfers"
                      className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      disabled={isLoading}
                    />
                    <span className="text-[var(--text-secondary)]">Qualified Live Transfers</span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="internet-leads"
                      className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      disabled={isLoading}
                    />
                    <span className="text-[var(--text-secondary)]">Real-Time Digital Leads</span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="services" 
                      value="aged-lists"
                      className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                      disabled={isLoading}
                    />
                    <span className="text-[var(--text-secondary)]">Targeted Data Solutions</span>
                  </label>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-2">
                <label htmlFor="additional-info" className="block text-[var(--text-secondary)] font-medium">
                  Additional Information
                </label>
                <textarea 
                  id="additional-info" 
                  name="additional-info" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-colors"
                  disabled={isLoading}
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit" 
                  className="btn btn-primary text-lg px-8 py-3 w-full md:w-auto flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
                <p className="text-sm text-[var(--text-light)] mt-2">* Required fields</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 