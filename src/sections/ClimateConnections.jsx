import React from "react";
import { motion } from "framer-motion";

const ClimateConnections = () => {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-green-400 mb-6">
          Climate Connections: ENSO & Bangladesh Rainfall
        </h1>

        <p className="text-lg leading-relaxed text-gray-200 mb-6">
          The study investigates Bangladesh’s extreme rainfall events in
          connection with El Niño and La Niña phases using <strong>Pearson’s
          correlation coefficient</strong> over a 25-year dataset (2000–2025).
          It combines <span className="text-green-300">NOAA ENSO indices</span>
          with <span className="text-green-300">NASA Terra satellite data</span>.
        </p>

        <h2 className="text-2xl font-semibold text-green-300 mb-4">Key Findings</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>La Niña years show significant negative correlations with enhanced monsoon rainfall, often leading to floods.</li>
          <li>El Niño years show weaker or negative correlations, typically linked to suppressed rainfall and drought risks.</li>
          <li>92 extreme rainfall events were identified (≥88 mm daily precipitation).</li>
          <li>Regions most affected: Sylhet, Rajshahi, and coastal districts.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-green-300 mt-8 mb-4">Datasets Used</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">NOAA Oceanic Niño Index (ONI)</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Sea surface temperature anomalies (Niño 3.4 region). Defines El Niño & La Niña phases.
            </p>
          </div>
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">MODIS (Terra)</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Land cover, vegetation stress, and flood mapping for rainfall impact analysis.
            </p>
          </div>
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">CERES (Terra)</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Radiation balance anomalies linked to ENSO and rainfall extremes.
            </p>
          </div>
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">MISR (Terra)</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Cloud height and aerosol interactions influencing storms.
            </p>
          </div>
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">MOPITT (Terra)</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Atmospheric composition (CO anomalies) linked to drought or flood years.
            </p>
          </div>
          <div className="p-4 bg-green-900/30 rounded-xl border border-green-700/40">
            <h3 className="font-bold text-white">BMD Ground Data</h3>
            <p className="text-gray-300 mt-1 text-sm">
              Daily rainfall observations used for validation (≥88 mm = extreme event).
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-green-300 mt-8 mb-4">Why It Matters</h2>
        <p className="text-gray-200 leading-relaxed">
          By combining satellite observations with ENSO indices, this research
          demonstrates how global teleconnections influence local climate
          extremes in one of the world’s most vulnerable regions. The findings
          provide insights for <span className="text-green-300">disaster preparedness</span>,{" "}
          <span className="text-green-300">water resource management</span>, and{" "}
          <span className="text-green-300">climate resilience planning</span> in Bangladesh.
        </p>
      </motion.div>
    </div>
  );
};

export default ClimateConnections;
