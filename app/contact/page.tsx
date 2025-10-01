import React from 'react';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-light text-foreground mb-8">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a founder with a transformative idea or an investor looking for opportunities,
              we'd love to connect with you.
            </p>
          </div>

          <div className="mb-16">
            <ContactForm />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">General Inquiries</h3>
              <p className="text-muted-foreground">eain@appliscale.io</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Investment Opportunities</h3>
              <p className="text-muted-foreground">eain@appliscale.io</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Krakow Office</h3>
              <p className="text-muted-foreground">
                ul. Zyczkowskiego 14<br />
                31-864 Krakow, Poland
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
