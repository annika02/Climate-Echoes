import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ENSODropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const dropdownItems = [
    {
      title: "What is ENSO?",
      subtitle: "El Niño & La Niña Basics",
      description: "Understanding the climate patterns",
      icon: "🌎",
      href: "/enso-basics", 
      content: {
        definition: "ENSO (El Niño-Southern Oscillation) is the most influential climate teleconnection system on Earth, driven by periodic changes in sea surface temperatures and atmospheric circulation over the tropical Pacific Ocean.",
        phases: [
          {
            name: "El Niño",
            description: "Warmer-than-average SSTs in central/eastern Pacific",
            effects: ["Weakens South Asian monsoon", "Reduced rainfall", "Drought conditions"]
          },
          {
            name: "La Niña", 
            description: "Cooler-than-average SSTs in central/eastern Pacific",
            effects: ["Strengthens monsoon flows", "Above-average rainfall", "Flood risks"]
          },
          {
            name: "ENSO Neutral",
            description: "Stable climate conditions",
            effects: ["Normal patterns", "Balanced systems", "Predictable weather"]
          }
        ]
      }
    },
    {
      title: "Climate Connections",
      subtitle: "ENSO & Bangladesh Rainfall",
      description: "Impact on regional weather patterns",
      icon: "📊",
      href: "/climate-connections", 
      content: {
        correlation: "Using Pearson's correlation coefficient to quantify relationships between ENSO phases and Bangladesh's extreme rainfall events.",
        findings: [
          "La Niña years show significant negative correlations with enhanced monsoon rainfall",
          "El Niño years show weaker or negative correlations with suppressed rainfall", 
          "25-year dataset (2000-2025) from NASA Terra satellite instruments",
          "Extreme rainfall defined as ≥88mm daily precipitation"
        ],
        dataSources: [
          "NOAA Oceanic Niño Index (ONI)",
          "NASA Terra MODIS for flood mapping",
          "CERES for radiation balance",
          "MISR for cloud measurements",
          "MOPITT for atmospheric composition"
        ]
      }
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ENSO Relations Button */}
      <button className="relative px-4 py-2 rounded-lg font-semibold uppercase text-sm tracking-wide text-white/70 hover:bg-white/35 transition-all duration-300 group">
        ENSO Relations
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-400 transition-all duration-400 group-hover:w-3/4" />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-96 rounded-2xl backdrop-blur-xl bg-black/95 border border-green-700/30 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-green-800/30 bg-gradient-to-r from-green-900/20 to-emerald-900/10">
              <h3 className="font-bold text-white text-lg">ENSO Climate Analysis</h3>
              <p className="text-green-300 text-sm mt-1">Based on 25 years of Terra satellite data</p>
            </div>

            {/* Dropdown Items */}
            <div className="p-3">
              {dropdownItems.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => setIsHovered(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-900/30 transition-all duration-300 group cursor-pointer mb-2 last:mb-0"
                  >
                    {/* Icon */}
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors text-base">
                        {item.title}
                      </h4>
                      <p className="text-green-400 text-sm font-medium mt-1">
                        {item.subtitle}
                      </p>
                      <p className="text-green-300/70 text-xs mt-2 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {/* Preview Content */}
                      {item.title === "What is ENSO?" && (
                        <div className="mt-2 text-xs text-green-200/80">
                          <p className="line-clamp-2">{item.content.definition}</p>
                          <div className="flex gap-1 mt-1">
                            {item.content.phases.map(phase => (
                              <span key={phase.name} className="px-1.5 py-0.5 bg-green-800/30 rounded text-[10px]">
                                {phase.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {item.title === "Climate Connections" && (
                        <div className="mt-2 text-xs text-green-200/80">
                          <p className="line-clamp-2">{item.content.correlation}</p>
                          <div className="flex gap-1 mt-1 flex-wrap">
                            <span className="px-1.5 py-0.5 bg-blue-800/30 rounded text-[10px]">
                              Pearson Correlation
                            </span>
                            <span className="px-1.5 py-0.5 bg-blue-800/30 rounded text-[10px]">
                              Rainfall Analysis
                            </span>
                            <span className="px-1.5 py-0.5 bg-blue-800/30 rounded text-[10px]">
                              Satellite Data
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="text-green-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                      →
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gradient-to-r from-black/50 to-green-900/10 border-t border-green-800/30">
              <div className="flex items-center justify-between text-xs">
                <span className="text-green-400/60">NASA Terra Instruments</span>
                <span className="text-green-300/40">2000-2025</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ENSODropdown;