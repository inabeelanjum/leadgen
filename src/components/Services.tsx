"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-[var(--color-primary)] flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-[var(--color-black)]">{title}</h3>
      <p className="text-[var(--text-secondary)]">{description}</p>
    </div>
  );
};

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-[var(--background-alt)]">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--color-black)]">
            Our <span className="text-[var(--color-primary)]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
          <p className="text-xl text-[var(--text-secondary)]">
            Discover our comprehensive suite of lead generation solutions designed to accelerate your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.31 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M15 5.5C15 4.57 15.75 3.82 16.68 3.82" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18.5 5.5C18.5 3.29 16.71 1.5 14.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Customer-Initiated Inbound Calls"
            description="Connect with prospects who are actively reaching out to you—our system routes inbound calls from motivated customers, ensuring immediate engagement with higher conversion rates."
            delay={100}
          />
          
          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.18 10.16 8.49001 10.96 8.49001H12.84C13.76 8.49001 14.51 9.27001 14.51 10.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 3V7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Live Transfers"
            description="Get on the phone with pre-qualified prospects instantly. Our agents verify interest and intent, then transfer calls to your sales team in real time for immediate closing opportunities."
            delay={200}
          />
          
          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.9965 11H16.0054" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.9955 11H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.99451 11H8.00349" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Real-Time Internet Leads"
            description="Receive prospect data the moment they submit an online form—no delays, no missed opportunities, just instant lead delivery to your CRM or email for immediate follow-up."
            delay={300}
          />
          
          <ServiceCard
            icon={
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M20 6.95V17.05C19.84 17.02 19.67 17 19.5 17C18.12 17 17 18.12 17 19.5C17 19.67 17.02 19.84 17.05 20H6.95C6.98 19.84 7 19.67 7 19.5C7 18.12 5.88 17 4.5 17C4.33 17 4.16 17.02 4 17.05V6.95C4.16 6.98 4.33 7 4.5 7C5.88 7 7 5.88 7 4.5C7 4.33 6.98 4.16 6.95 4H17.05C17.02 4.16 17 4.33 17 4.5C17 5.88 18.12 7 19.5 7C19.67 7 19.84 6.98 20 6.95Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 4.5C7 5.88 5.88 7 4.5 7C4.33 7 4.16 6.98 4 6.95C2.86 6.72 2 5.71 2 4.5C2 3.12 3.12 2 4.5 2C5.71 2 6.72 2.86 6.95 4C6.98 4.16 7 4.33 7 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 4.5C22 5.71 21.14 6.72 20 6.95C19.84 6.98 19.67 7 19.5 7C18.12 7 17 5.88 17 4.5C17 4.33 17.02 4.16 17.05 4C17.28 2.86 18.29 2 19.5 2C20.88 2 22 3.12 22 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 19.5C7 19.67 6.98 19.84 6.95 20C6.72 21.14 5.71 22 4.5 22C3.12 22 2 20.88 2 19.5C2 18.29 2.86 17.28 4 17.05C4.16 17.02 4.33 17 4.5 17C5.88 17 7 18.12 7 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 19.5C22 20.88 20.88 22 19.5 22C18.29 22 17.28 21.14 17.05 20C17.02 19.84 17 19.67 17 19.5C17 18.12 18.12 17 19.5 17C19.67 17 19.84 17.02 20 17.05C21.14 17.28 22 18.29 22 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            title="Aged Data Lists"
            description="Tap into cost-effective, previously generated leads to re-engage or nurture. We provide curated aged lists tailored to your target market with detailed demographic and behavioral data."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Services; 