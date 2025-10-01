
import React from 'react';

const Team = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Anyone can back<br />
              a winning company<br />
              once it's a winner.
            </h2>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4 tracking-wide">LEADERSHIP</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Eain Jones</p>
                  <p className="text-slate-400 text-sm">Managing Partner</p>
                </div>
                <div>
                  <p className="font-semibold">Kamil Kuback</p>
                  <p className="text-slate-400 text-sm">Partner</p>
                </div>
                <div>
                  <p className="font-semibold">Konrad Kaplita</p>
                  <p className="text-slate-400 text-sm">Partner</p>
                </div>
                <div>
                  <p className="font-semibold">Michal Niec</p>
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
