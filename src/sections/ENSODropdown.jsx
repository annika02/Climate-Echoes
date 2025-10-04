import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ENSODropdown = ({ isActive, phaseColor, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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

  const handleItemClick = () => {
    setIsHovered(false);
    if (onSelect) onSelect();
  };

  // Handle main button click or navigation
  const handleMainClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    navigate("#"); // Default ENSO page
    setIsHovered(false);
    if (onSelect) onSelect();
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ENSO Relations Main Link */}
      <Link
        to="/enso"
        onClick={handleMainClick}
        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
          isActive
            ? `${phaseColor} text-white font-semibold shadow-md`
            : "text-gray-200 hover:text-white hover:bg-gray-800/60"
        }`}
      >
        <span className="mr-2">🌊</span>
        <span>ENSO Relations</span>
      </Link>
      {/* Dropdown Menu */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-80 rounded-xl bg-gray-900/95 backdrop-blur-md border border-gray-700 shadow-xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700 bg-gray-800/50">
              <h3 className="font-bold text-white text-sm">ENSO Climate Analysis</h3>
              <p className="text-gray-400 text-xs mt-1">Based on 25 years of Terra satellite data</p>
            </div>
            {/* Dropdown Items */}
            <div className="p-2">
              {dropdownItems.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={handleItemClick}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/60 transition-all duration-200 group cursor-pointer mb-1 last:mb-0"
                  >
                    {/* Icon */}
                    <div className="text-xl group-hover:scale-110 transition-transform duration-200 flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                  
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-white text-sm group-hover:text-gray-200 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-xs font-medium mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                        {/* Arrow */}
                        <div className="text-gray-500 opacity-0 group-hover:opacity-100 transform translate-x-1 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0 mt-0.5">
                          →
                        </div>
                      </div>
                     
                      <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    
                      {/* Preview Content */}
                      <div className="mt-2">
                        {item.title === "What is ENSO?" && (
                          <div className="space-y-1.5">
                            <p className="text-gray-400 text-xs leading-tight line-clamp-2">
                              {item.content.definition}
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              {item.content.phases.map(phase => (
                                <span
                                  key={phase.name}
                                  className="px-2 py-0.5 bg-gray-800 rounded text-[10px] leading-none border border-gray-700 text-gray-300"
                                >
                                  {phase.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      
                        {item.title === "Climate Connections" && (
                          <div className="space-y-1.5">
                            <p className="text-gray-400 text-xs leading-tight line-clamp-2">
                              {item.content.correlation}
                            </p>
                            <div className="flex gap-1 flex-wrap">
                              <span className="px-2 py-0.5 bg-gray-800 rounded text-[10px] leading-none border border-gray-700 text-gray-300">
                                Pearson Correlation
                              </span>
                              <span className="px-2 py-0.5 bg-gray-800 rounded text-[10px] leading-none border border-gray-700 text-gray-300">
                                Rainfall Analysis
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
            {/* Footer */}
            <div className="p-3 bg-gray-800/30 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">NASA Terra Instruments</span>
                <span className="text-gray-600">2000-2025</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ENSODropdown;