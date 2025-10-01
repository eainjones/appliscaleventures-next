'use client';

import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-12 leading-tight">
          Our most ambitious investments yet, backing founders at the{' '}
          <span className="underline decoration-2 underline-offset-4">frontier</span> of innovation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="mb-4">
              <span className="text-sm font-medium text-muted-foreground">Investment focus</span>
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Early Stage</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Pre-seed to Series A investments in exceptional founders building 
              transformative companies across technology and innovation sectors.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center text-foreground hover:underline transition-all"
            >
              Learn more about early stage →
            </button>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="mb-4">
              <span className="text-sm font-medium text-muted-foreground">Investment focus</span>
            </div>
            <h3 className="text-2xl font-medium text-foreground mb-4">Growth Stage</h3>
            <p className="text-foreground leading-relaxed mb-6">
              Series B+ investments in proven companies ready to scale globally, 
              with strategic guidance and operational expertise.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center text-foreground hover:underline transition-all"
            >
              Learn more about growth stage →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
