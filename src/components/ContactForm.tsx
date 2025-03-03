"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Replace this with your actual email
  const formSubmitEmail = "nabeel.anjum@yopmail.com";

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
          <form 
            action="https://formsubmit.co/your-actual-email@example.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Hidden fields for FormSubmit configuration */}
            <input type="hidden" name="_subject" value="New Inquiry from Prime Midin Website" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/thank-you" />
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
                  />
                  <span className="text-[var(--text-secondary)]">Inbound Call Generation</span>
                </label>
                
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="services" 
                    value="live-transfers"
                    className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-[var(--text-secondary)]">Qualified Live Transfers</span>
                </label>
                
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="services" 
                    value="internet-leads"
                    className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  <span className="text-[var(--text-secondary)]">Real-Time Digital Leads</span>
                </label>
                
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="services" 
                    value="aged-lists"
                    className="mt-1 h-4 w-4 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
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
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="btn btn-primary text-lg px-8 py-3 w-full md:w-auto"
              >
                Submit Inquiry
              </button>
              <p className="text-sm text-[var(--text-light)] mt-2">* Required fields</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 