import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ENSODropdown = () => {
  const [isHovered, setIsHovered] = useState(false);

  const dropdownItems = [
    {
      title: "What is ENSO?",
      subtitle: "El Niño & La Niña Basics",
      description: "Understanding climate patterns",
      icon: "🌎",
      href: "#enso-basics"
    },
    {
      title: "Climate Connections",
      subtitle: "ENSO & Rainfall Patterns", 
      description: "Impact on Bangladesh weather",
      icon: "📊",
      href: "#enso-relations"
    }
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ENSO Relations Button */}
      <button className="relative px-4 py-2 rounded-lg font-semibold uppercase text-sm tracking-wide text-green-300 hover:text-white hover:bg-green-900/40 transition-all duration-300 group">
        ENSO Relations
        {/* Animated underline */}
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
            className="absolute top-full left-0 mt-2 w-80 rounded-2xl backdrop-blur-xl bg-black/90 border border-green-700/30 shadow-2xl z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-green-800/30 bg-gradient-to-r from-green-900/20 to-emerald-900/10">
              <h3 className="font-bold text-white text-lg">ENSO Climate Patterns</h3>
              <p className="text-green-300 text-sm mt-1">Explore El Niño & La Niña impacts</p>
            </div>

            {/* Dropdown Items */}
            <div className="p-2">
              {dropdownItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-green-900/30 transition-all duration-300 group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-white group-hover:text-green-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-green-400 text-sm font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-green-300/70 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="text-green-400 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 bg-gradient-to-r from-black/50 to-green-900/10 border-t border-green-800/30">
              <p className="text-green-400/60 text-xs text-center">
                Based on 25 years of Terra satellite data
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ENSODropdown;