import React from 'react';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Why() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-light text-slate-900 mb-8">Why Choose Us</h1>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                At Appliscale Ventures, we partner with exceptional entrepreneurs to build transformative companies
                across Europe and the US. Our approach is hands-on, collaborative, and focused on long-term success.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-16">
                <div>
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">Our Advantages</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1">1</span>
                      <span>Deep industry expertise and experience</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1">2</span>
                      <span>Extensive network of global partners</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1">3</span>
                      <span>Proven track record of successful exits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-emerald-100 text-emerald-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1">4</span>
                      <span>Long-term partnership approach</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-medium text-slate-900 mb-4">What Sets Us Apart</h2>
                  <ul className="space-y-3 text-slate-600">
                    <li>• Strategic guidance tailored to your vision</li>
                    <li>• Access to our network of industry experts</li>
                    <li>• Financial investment and funding support</li>
                    <li>• Technical and operational resources</li>
                    <li>• Market expansion opportunities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg mt-16">
                <h2 className="text-2xl font-medium text-slate-900 mb-4">Ready to Start?</h2>
                <p className="text-slate-600 mb-6">
                  We're always looking for innovative entrepreneurs with bold visions.
                  If you have an idea that could transform your industry, we'd love to hear from you.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
