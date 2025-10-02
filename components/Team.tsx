
import React from 'react';

const Team = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
              Anyone can back<br />
              a winning company<br />
              once it's a winner.
            </h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-medium mb-6 tracking-wider uppercase text-slate-300">LEADERSHIP</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Eain Jones</p>
                  <p className="text-slate-400 text-sm">Managing Partner</p>
                </div>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Kamil Kuback</p>
                  <p className="text-slate-400 text-sm">Partner</p>
                </div>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Konrad Kaplita</p>
                  <p className="text-slate-400 text-sm">Partner</p>
                </div>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">Michal Niec</p>
                  <p className="text-slate-400 text-sm">Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
