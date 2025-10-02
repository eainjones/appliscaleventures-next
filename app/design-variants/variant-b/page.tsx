'use client';

import Link from 'next/link';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';

export default function VariantBPage() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white">
      {/* Simplified Header */}
      <header className="fixed top-0 w-full bg-[#0A0E27]/90 backdrop-blur-xl border-b border-amber-500/20 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link href="/design-variants" className="text-sm font-light tracking-wider text-amber-400 hover:text-amber-300">
            ← DESIGN VARIANTS
          </Link>
          <div className="text-xs text-white/40 uppercase tracking-widest">Variant B: Premium</div>
        </div>
      </header>

      {/* Hero - Elegant & Refined */}
      <section className="pt-40 pb-32 px-8 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-amber-500 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="mb-8">
            <div className="inline-block">
              <span className="text-xs tracking-[0.3em] text-amber-400 font-light uppercase">
                Est. 2020
              </span>
              <div className="h-px bg-gradient-to-r from-amber-400 to-transparent mt-2"></div>
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-8 tracking-tight">
            Appliscale<br />
            <span className="font-extralight text-white/70">Ventures</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-16 font-light leading-relaxed">
            Partnering with visionary founders to build enduring companies that shape the future of technology and innovation.
          </p>

          <div className="flex items-center gap-8">
            <button className="group relative px-8 py-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-[#0A0E27] font-medium tracking-wide flex items-center gap-2">
                Explore Portfolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 border border-white/20 hover:border-amber-400/50 hover:bg-white/5 transition-all font-light tracking-wide">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      </div>

      {/* Values - Sophisticated Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
                Investment<br />
                <span className="text-amber-400">Philosophy</span>
              </h2>
              <p className="text-lg text-white/60 leading-relaxed font-light">
                We believe in the power of exceptional founders and transformative ideas.
                Our approach is built on trust, transparency, and long-term partnership.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: 'Excellence First',
                  desc: 'We partner with founders who demonstrate exceptional vision and execution capability.'
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  desc: 'Supporting companies across Europe and the United States with local expertise.'
                },
                {
                  icon: Users,
                  title: 'True Partnership',
                  desc: 'Beyond capital, we provide strategic guidance and operational support.'
                }
              ].map((item, i) => (
                <div key={i} className="group flex gap-6 p-6 border border-white/10 hover:border-amber-500/30 hover:bg-white/5 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                      <item.icon className="h-5 w-5 text-amber-400" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
      </div>

      {/* Portfolio - Elegant Grid */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs tracking-[0.3em] text-amber-400 uppercase font-light mb-4 block">
                Selected Works
              </span>
              <h2 className="text-4xl md:text-5xl font-light">Portfolio</h2>
            </div>
            <button className="group hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-amber-400 transition-colors font-light tracking-wide">
              View All
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {['demoboost', 'quick9', 'harmonyze', 'TVAD.ia', 'Bedrock', 'Erebor'].map((company, i) => (
              <div
                key={i}
                className="aspect-square bg-[#0A0E27] border border-white/10 hover:border-amber-500/30 flex flex-col items-center justify-center hover:bg-white/5 transition-all cursor-pointer group p-8"
              >
                <span className="text-2xl font-light text-white/80 group-hover:text-white transition-colors mb-2">
                  {company}
                </span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Refined */}
      <section className="py-32 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-transparent"></div>

        <div className="max-w-3xl mx-auto text-center relative">
          <span className="text-xs tracking-[0.3em] text-amber-400 uppercase font-light mb-8 block">
            Partner With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Building the Future,<br />
            <span className="text-amber-400">Together</span>
          </h2>
          <p className="text-lg text-white/60 mb-12 font-light max-w-xl mx-auto">
            We're always seeking exceptional founders with transformative visions.
          </p>
          <button className="group relative px-10 py-4 overflow-hidden">
            <div className="absolute inset-0 border border-amber-500/50 group-hover:border-amber-400 transition-colors"></div>
            <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors"></div>
            <span className="relative text-white font-light tracking-wider flex items-center gap-3">
              Initiate Conversation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs text-white/30 uppercase tracking-widest font-light">
            Variant B: Premium & Sophisticated
          </div>
          <div className="text-xs text-white/20 mt-2">Appliscale Ventures</div>
        </div>
      </footer>
    </div>
  );
}
