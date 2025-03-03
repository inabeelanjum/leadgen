"use client";

import React from 'react';
import { useInView } from 'react-intersection-observer';

interface TestimonialCardProps {
  name: string;
  position: string;
  quote: string;
  highlight: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, position, quote, highlight, delay }) => {
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
      <div className="mb-4">
        <h4 className="text-xl font-bold text-[var(--color-black)]">{name}</h4>
        <p className="text-[var(--text-secondary)] italic">{position}</p>
      </div>
      <p className="text-[var(--text-secondary)] mb-4 text-lg">"{quote}"</p>
      <div className="text-[var(--color-primary)] font-bold text-lg">{highlight}</div>
    </div>
  );
};

interface StatCardProps {
  number: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`bg-[var(--color-primary)] text-white rounded-xl shadow-lg p-6 text-center transition-all duration-700 transform ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl font-bold mb-2">{number}</div>
      <p className="text-white/90 text-lg">{label}</p>
    </div>
  );
};

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-[var(--color-black)]">
            Success <span className="text-[var(--color-primary)]">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mb-6"></div>
          <p className="text-xl text-[var(--text-secondary)]">
            See how businesses like yours achieved remarkable growth with LeadGenPro
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <TestimonialCard
            name="Sarah Johnson"
            position="Insurance Agency Owner"
            quote="LeadGenPro transformed our lead generation process. We saw a 30% increase in conversions within the first 90 days, and our sales team is now consistently exceeding their targets."
            highlight="30% more conversions"
            delay={100}
          />
          
          <TestimonialCard
            name="Michael Chen"
            position="Law Firm Partner"
            quote="The quality of live transfers is exceptional. Our client acquisition costs dropped by 40% while maintaining high-quality leads. The ROI has been incredible for our practice."
            highlight="40% lower acquisition costs"
            delay={200}
          />
        </div>
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <StatCard
            number="98%"
            label="Client Satisfaction"
            delay={300}
          />
          
          <StatCard
            number="2.5x"
            label="Average ROI"
            delay={400}
          />
          
          <StatCard
            number="<1min"
            label="Average Response Time"
            delay={500}
          />
          
          <StatCard
            number="10k+"
            label="Active Clients"
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 