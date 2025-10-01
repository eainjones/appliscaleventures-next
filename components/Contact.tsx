
import React from 'react';

const Contact = () => {
  return (
    <section className="py-32 bg-stone-100">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-8 tracking-wide">
              CONTACT
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">General Inquiries</h3>
                <p className="text-slate-600">hello@appliscaleventures.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Investment Opportunities</h3>
                <p className="text-slate-600">invest@appliscaleventures.com</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Krakow Office</h3>
                <p className="text-slate-600">
                  ul. Zyczkowskiego 14<br />
                  31-864 Krakow<br />
                  Poland
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-8 tracking-wide">
              NETWORK
            </h2>
            
            <div className="space-y-4">
              <div>
                <a href="https://linkedin.com/company/appliscale-ventures" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-700 transition-colors">
                  <p className="font-semibold text-slate-900">LinkedIn</p>
                  <p className="text-slate-600 text-sm">Connect with our team</p>
                </a>
              </div>
              
              <div>
                <a href="https://appliscale.com" target="_blank" rel="noopener noreferrer" className="block hover:text-slate-700 transition-colors">
                  <p className="font-semibold text-slate-900">Appliscale Group</p>
                  <p className="text-slate-600 text-sm">Learn about our parent company</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-300 mt-16 pt-8">
          <p className="text-sm text-slate-500">
            © 2024 Appliscale Ventures. Part of Appliscale Group.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
