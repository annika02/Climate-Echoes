import React from "react";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-emerald-500 rounded-full blur-xl" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-amber-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
          About Climate Echoes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <div className="text-left">
            <div className="bg-gray-900/50 rounded-2xl p-8 shadow-xl border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-400 mb-4">The Challenge</h3>
              <p className="text-lg text-green-200 leading-relaxed">
                <span className="font-semibold text-cyan-400">Bangladesh</span> is among the most climate-vulnerable nations, 
                where floods, droughts, and storms are not isolated events — they are linked to 
                <span className="font-semibold text-emerald-400"> global teleconnections</span> like ENSO.
              </p>
            </div>
          </div>

          <div className="text-left">
            <div className="bg-gray-900/50 rounded-2xl p-8 shadow-xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
              <p className="text-lg text-green-200 leading-relaxed">
                <span className="font-semibold text-amber-400">Climate Echoes</span> transforms 
                <span className="font-semibold text-emerald-400"> NASA's Terra satellite data</span> into 
                engaging visual stories, connecting global climate drivers with local realities.
              </p>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="mt-16 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-green-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-green-400 mb-6">Powered by Terra Satellite Instruments</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'MODIS', desc: 'Moderate Resolution Imaging Spectroradiometer', color: 'from-amber-500 to-orange-500' },
              { name: 'MISR', desc: 'Multi-angle Imaging SpectroRadiometer', color: 'from-cyan-500 to-blue-500' },
              { name: 'CERES', desc: 'Clouds and Earth Radiant Energy System', color: 'from-emerald-500 to-green-500' },
              { name: 'MOPITT', desc: 'Measurements of Pollution in the Troposphere', color: 'from-purple-500 to-indigo-500' }
            ].map((instrument) => (
              <div 
                key={instrument.name} 
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 text-center border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105"
              >
                <div className={`font-bold text-xl bg-gradient-to-r ${instrument.color} bg-clip-text text-transparent`}>
                  {instrument.name}
                </div>
                <div className="text-xs text-green-300/80 mt-2 leading-tight">
                  {instrument.desc}
                </div>
                <div className="text-xs text-gray-400 mt-2">25 years of data</div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16 bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-8 border border-amber-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-amber-400 mb-6">25 Years of Climate Data</h3>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            {[
              { year: '1999', event: 'Terra Launch', color: 'bg-amber-500' },
              { year: '2005', event: 'Major El Niño', color: 'bg-orange-500' },
              { year: '2010', event: 'Strong La Niña', color: 'bg-cyan-500' },
              { year: '2016', event: 'Record El Niño', color: 'bg-red-500' },
              { year: '2024', event: 'Current Analysis', color: 'bg-emerald-500' }
            ].map((item, index) => (
              <div key={item.year} className="flex flex-col items-center text-center">
                <div className={`w-3 h-3 rounded-full ${item.color} mb-2`} />
                <div className="font-bold text-white">{item.year}</div>
                <div className="text-green-300 text-xs max-w-24">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;