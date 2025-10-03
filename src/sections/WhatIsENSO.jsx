import React from "react";
import { motion } from "framer-motion";

const WhatIsENSO = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-green-500 mb-6">
            What is ENSO?
          </h1>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">
            Understanding El Niño and La Niña - The Earth's Most Influential Climate Pattern
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-green-700/30 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-emerald-400 mb-6">
                El Niño-Southern Oscillation (ENSO)
              </h2>
              
              <div className="space-y-4 text-green-200 leading-relaxed">
                <p>
                  The El Niño-Southern Oscillation (ENSO) is a significant climate phenomenon marked by changes in sea surface temperatures and atmospheric pressure in the tropical Pacific.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30">
                    <h3 className="text-amber-300 font-bold text-lg mb-2">🌊 El Niño Conditions</h3>
                    <p className="text-amber-200">
                      Occurs when temperatures in the central and eastern equatorial Pacific are warmer than usual. Weakened trade winds can result in warm water shifting eastward, leading to increased rainfall along the Americas and decreased rainfall in Indonesia.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                    <h3 className="text-cyan-300 font-bold text-lg mb-2">🌡️ La Niña Conditions</h3>
                    <p className="text-cyan-200">
                      Characterized by cooler temperatures in the central and eastern equatorial Pacific. Features stronger trade winds and colder waters, enhancing rainfall in the western Pacific.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                    <h3 className="text-emerald-300 font-bold text-lg mb-2">⚖️ Neutral Conditions</h3>
                    <p className="text-emerald-200">
                      Exist between El Niño and La Niña events, defined by a typical balance of atmospheric pressure and ocean temperatures.
                    </p>
                  </div>
                </div>
                
                <p>
                  ENSO's impacts are monitored through indicators like the Southern Oscillation Index (SOI) and the Tropical Atmosphere Ocean (TAO) Array, providing crucial data for predicting global climate variability. Scientists track temperature and pressure deviations over time to recognize and categorize ENSO events effectively.
                </p>
              </div>
            </div>

            {/* Monitoring Methods */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-blue-700/30">
              <h3 className="text-xl font-bold text-blue-400 mb-4">🔬 Monitoring ENSO</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-blue-300 font-semibold">Key Indicators:</h4>
                  <ul className="text-blue-200 text-sm space-y-1">
                    <li>• Southern Oscillation Index (SOI)</li>
                    <li>• Oceanic Niño Index (ONI)</li>
                    <li>• Sea Surface Temperatures</li>
                    <li>• Trade Wind Patterns</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-300 font-semibold">Monitoring Tools:</h4>
                  <ul className="text-blue-200 text-sm space-y-1">
                    <li>• TAO/TRITON Array</li>
                    <li>• Satellite Observations</li>
                    <li>• Buoy Networks</li>
                    <li>• Climate Models</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ENSO Conditions Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* ENSO Conditions Diagram */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-700/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                ENSO Conditions in the Equatorial Pacific
              </h3>
              
              <div className="space-y-6">
                {/* Neutral Conditions */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl p-4 border border-emerald-500/30">
                    <h4 className="text-emerald-300 font-bold text-lg mb-3">⚖️ Neutral Conditions</h4>
                    <div className="h-32 bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white font-semibold text-sm bg-black/40 px-4 py-2 rounded-full">
                          Normal Trade Winds → Warm Pool in West
                        </div>
                      </div>
                    </div>
                    <p className="text-emerald-200 text-sm mt-3">
                      Typical balance of atmospheric pressure and ocean temperatures
                    </p>
                  </div>
                </div>

                {/* El Niño Conditions */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-4 border border-amber-500/30">
                    <h4 className="text-amber-300 font-bold text-lg mb-3">🔥 El Niño Conditions</h4>
                    <div className="h-32 bg-gradient-to-r from-red-400 via-orange-400 to-red-400 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white font-semibold text-sm bg-black/40 px-4 py-2 rounded-full">
                          Weakened Trade Winds ← Warm Water Spreads East
                        </div>
                      </div>
                    </div>
                    <p className="text-amber-200 text-sm mt-3">
                      Warm water shifts eastward, increased rainfall in Americas
                    </p>
                  </div>
                </div>

                {/* La Niña Conditions */}
                <div className="text-center">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-4 border border-cyan-500/30">
                    <h4 className="text-cyan-300 font-bold text-lg mb-3">🌊 La Niña Conditions</h4>
                    <div className="h-32 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white font-semibold text-sm bg-black/40 px-4 py-2 rounded-full">
                          Strong Trade Winds → Cold Water Upwelling
                        </div>
                      </div>
                    </div>
                    <p className="text-cyan-200 text-sm mt-3">
                      Stronger trade winds, enhanced rainfall in western Pacific
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-700/30">
                <p className="text-purple-300 text-sm text-center">
                  <em>Illustrations show how the coupled ocean-atmosphere system typically behaves during each event</em>
                </p>
                <p className="text-purple-400 text-xs text-center mt-2">
                  Source: NOAA Climate Prediction Center
                </p>
              </div>
            </div>

            {/* Niño Regions Info */}
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-amber-700/30">
              <h3 className="text-xl font-bold text-amber-400 mb-4">📍 Niño Monitoring Regions</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-amber-700/30">
                  <span className="text-amber-300">Niño 1+2</span>
                  <span className="text-amber-200 text-sm">Coastal South America</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-700/30">
                  <span className="text-amber-300">Niño 3</span>
                  <span className="text-amber-200 text-sm">Eastern Pacific</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-700/30">
                  <span className="text-amber-300">Niño 4</span>
                  <span className="text-amber-200 text-sm">Western Pacific</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-amber-300">Niño 3.4</span>
                  <span className="text-amber-200 text-sm">Central Pacific (Primary)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Impacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-700/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Global Climate Impacts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-amber-400 text-2xl mb-3">🌎</div>
                <h3 className="text-amber-300 font-bold mb-2">El Niño Effects</h3>
                <ul className="text-amber-200 text-sm space-y-1">
                  <li>• Drought in Australia/SE Asia</li>
                  <li>• Flooding in South America</li>
                  <li>• Warmer global temperatures</li>
                  <li>• Hurricane suppression in Atlantic</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 text-2xl mb-3">🌍</div>
                <h3 className="text-cyan-300 font-bold mb-2">La Niña Effects</h3>
                <ul className="text-cyan-200 text-sm space-y-1">
                  <li>• Flooding in Australia/SE Asia</li>
                  <li>• Drought in South America</li>
                  <li>• Cooler global temperatures</li>
                  <li>• Active hurricane season</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-2xl mb-3">📊</div>
                <h3 className="text-emerald-300 font-bold mb-2">Monitoring Importance</h3>
                <ul className="text-emerald-200 text-sm space-y-1">
                  <li>• Early warning systems</li>
                  <li>• Agricultural planning</li>
                  <li>• Disaster preparedness</li>
                  <li>• Water resource management</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsENSO;