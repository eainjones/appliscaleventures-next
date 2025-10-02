'use client';

import Link from 'next/link';
import { Sparkles, Rocket, Code2, Database, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header />

      {/* Hero - Tech & Vibrant */}
      <section className="pt-32 pb-24 px-8 relative" id="home">
        <div className="max-w-7xl mx-auto relative">
          {/* Floating badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Powered by Innovation</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future-Ready
            </span>
            <br />
            Venture Capital
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-12 leading-relaxed">
            We invest in cutting-edge technology companies that are redefining industries.
            AI, SaaS, Infrastructure, and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#portfolio">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Explore Companies
                </span>
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold hover:bg-white/20 hover:border-cyan-500/50 transition-all">
                Connect With Us
              </button>
            </Link>
          </div>

          {/* Floating cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '$50M+', label: 'AUM' },
              { value: '7', label: 'Companies' },
              { value: '2', label: 'Markets' },
              { value: '100%', label: 'Tech-First' }
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas - Modern Cards */}
      <section className="py-24 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Investment Focus
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              Where technology meets transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: 'SaaS & Cloud',
                desc: 'Next-gen software platforms',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Sparkles,
                title: 'AI & ML',
                desc: 'Intelligence-driven solutions',
                color: 'from-blue-500 to-purple-500'
              },
              {
                icon: Database,
                title: 'Infrastructure',
                desc: 'Developer tools & platforms',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Rocket,
                title: 'Emerging Tech',
                desc: 'Web3, IoT, and beyond',
                color: 'from-pink-500 to-orange-500'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`}></div>
                <div className={`inline-flex p-3 bg-gradient-to-br ${item.color} rounded-2xl mb-6`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio - Bento Grid */}
      <section className="py-24 px-8 relative" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </h2>
              <p className="text-slate-400">Companies we're building with</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['demoboost', 'quick9', 'harmonyze', 'TVAD.ia', 'Bedrock', 'Erebor', 'First Party'].map((company, i) => (
              <Link
                key={i}
                href={`/company/${company.toLowerCase().replace(/\./g, '').replace(/\s+/g, '-')}`}
                className={`group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all cursor-pointer ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <span className="text-lg md:text-xl font-bold text-slate-300 group-hover:text-white transition-colors">
                    {company}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-8 relative" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Experienced operators and investors who've built and scaled technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Eain Jones',
                role: 'Founder & Managing Partner',
                bio: 'Former technology executive with 15+ years building and scaling SaaS companies across Europe and North America.',
                linkedin: 'https://linkedin.com/in/eainjones'
              },
              {
                name: 'Alex Suchman',
                role: 'Partner',
                bio: 'Growth specialist with expertise in go-to-market strategy and international expansion for B2B technology companies.',
                linkedin: '#'
              },
              {
                name: 'Chris Zylka',
                role: 'Venture Partner',
                bio: 'Product and engineering leader who has built teams and platforms at high-growth startups.',
                linkedin: '#'
              }
            ].map((member, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{member.role}</p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {member.bio}
                </p>
                {member.linkedin && member.linkedin !== '#' && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    Connect on LinkedIn
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Vibrant */}
      <section className="py-32 px-8 relative" id="contact">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full mb-8 backdrop-blur-xl">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-cyan-300">We're Hiring Portfolio Companies</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build the Future
            </span>
            <br />
            With Us
          </h2>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            We're looking for exceptional founders building the next generation of technology companies.
          </p>

          <Link href="/contact">
            <button className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105">
              <span className="flex items-center gap-2">
                Start a Conversation
                <Rocket className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
