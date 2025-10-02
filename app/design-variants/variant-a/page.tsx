'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

export default function VariantAPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simplified Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link href="/design-variants" className="text-xl font-bold">
            ← Design Variants
          </Link>
          <div className="text-sm text-white/60">Variant A: Bold & Modern</div>
        </div>
      </header>

      {/* Hero - Ultra Bold */}
      <section className="pt-32 pb-24 px-8 bg-gradient-to-br from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full">
              VENTURE CAPITAL
            </span>
          </div>
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Backing the<br />
            Exceptional
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 max-w-3xl mb-12 font-light">
            We partner with visionary founders building the future of technology.
            From pre-seed to Series A. Europe to the US.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
              View Portfolio
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/10 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                7+
              </div>
              <div className="text-white/60 text-lg">Portfolio Companies</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                2
              </div>
              <div className="text-white/60 text-lg">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-white/60 text-lg">Committed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus - Bold Cards */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-4">Our Focus</h2>
          <p className="text-xl text-white/60 mb-16 max-w-2xl">
            We invest in transformative companies across three key areas
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: 'Early Stage',
                desc: 'Pre-seed to Series A investments in exceptional founders',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Target,
                title: 'Tech-First',
                desc: 'Technology-driven businesses with strong unit economics',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: TrendingUp,
                title: 'High Growth',
                desc: 'Companies solving significant market problems at scale',
                gradient: 'from-orange-500 to-yellow-500'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <item.icon className="h-12 w-12 mb-6 text-white" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview - Minimal */}
      <section className="py-24 px-8 bg-gradient-to-b from-black to-purple-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-4">Portfolio</h2>
              <p className="text-xl text-white/60">
                Companies we're proud to back
              </p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
              View All <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['demoboost', 'quick9', 'harmonyze', 'TVAD.ia', 'Bedrock', 'Erebor', 'First Party Capital', 'More'].map((company, i) => (
              <div
                key={i}
                className="aspect-square bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
              >
                <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Bold */}
      <section className="py-32 px-8 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to build something exceptional?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            We're looking for exceptional founders with bold visions
          </p>
          <button className="px-12 py-5 bg-black text-white font-bold text-xl rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-white/40 text-sm">
          Variant A: Bold & Modern • Appliscale Ventures
        </div>
      </footer>
    </div>
  );
}
