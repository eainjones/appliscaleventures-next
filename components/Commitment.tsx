
import React from 'react';

const Commitment = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-foreground mb-6 leading-tight">
            At Appliscale Ventures, we build partnerships to serve{' '}
            <span className="underline decoration-2 underline-offset-4">founders'</span> long-term success.
          </h2>
        </div>
        
        <div className="bg-card p-8 rounded-lg border border-border">
          <blockquote className="text-xl text-foreground leading-relaxed mb-8">
            "While no one can foresee every outcome entrepreneurship will have on society, 
            we do know that building transformative companies requires both bold vision 
            and thoughtful execution with the right partners by your side."
          </blockquote>
          
          <div className="text-sm text-muted-foreground">
            <div className="font-medium">Managing Partner</div>
            <div>Investment Philosophy, Appliscale Ventures</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
