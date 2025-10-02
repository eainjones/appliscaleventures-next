'use client';

import React from 'react';
const Hero = () => {
  return (
    <section id="home" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30 flex items-center justify-center relative">
      <div className="max-w-6xl mx-auto px-8 text-left">
        <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-6 text-foreground">
          Venture capital that backs{' '}
          <span className="underline decoration-2 underline-offset-8">exceptional</span>{' '}
          founders building tomorrow's companies
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">INVESTMENT</h3>
            <h2 className="text-2xl font-medium text-foreground mb-4">Meet our portfolio</h2>
            <p className="text-foreground mb-6">
              Exceptional companies we've backed from pre-seed to Series B across Europe and the US.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              View portfolio
            </button>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-sm font-medium text-muted-foreground mb-2">PARTNERSHIP</h3>
            <h2 className="text-2xl font-medium text-foreground mb-4">Build with our support</h2>
            <p className="text-foreground mb-6">
              Strategic guidance, operational expertise, and long-term commitment for transformative founders.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#about') || document.querySelector('section:nth-child(3)');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border border-border text-foreground px-6 py-2.5 rounded-md text-sm font-medium hover:bg-secondary transition-all duration-200 hover:shadow-sm hover:border-slate-400"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;