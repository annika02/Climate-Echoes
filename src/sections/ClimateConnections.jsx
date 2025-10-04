import React from "react";
import { motion } from "framer-motion";
import DailyImg from "../assets/download (2).png"
import ExtremeImg from "../assets/download (3).png"
import HeatmapImg from "../assets/heat.png"
import RainfallImg from "../assets/rainfall.png"
import ENSO from "../assets/ENSO.png"
const ClimateConnections = () => {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-6">
            Teleconnection of Bangladesh Extreme Rainfall with El Niño and La Niña
          </h1>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Quantifying the Relationship Between Pacific Climate Patterns and Bangladesh's Extreme Rainfall Events Using Satellite Data and Correlation Analysis
          </p>
        </motion.div>

        {/* Data Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Research Methodology and Data Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">🌊 ENSO Index Data (El Niño/La Niña Phases)</h3>
                <p className="text-blue-200 text-justify leading-relaxed mb-4">
                  The El Niño–Southern Oscillation (ENSO) index, specifically the Oceanic Niño Index (ONI), is used as a proxy for identifying global teleconnection phases. This index is based on sea surface temperature anomalies in the Niño 3.4 region of the equatorial Pacific Ocean. Positive ONI values indicate El Niño conditions (Pacific warming), while negative values indicate La Niña conditions (Pacific cooling). ENSO data are obtained from the NOAA Climate Prediction Center, available in a monthly time series format covering several decades. For our analysis, we subset the data for the period 2000–2025 to align with the Terra satellite mission timeline. These indices are crucial for capturing the timing and intensity of ENSO events and for evaluating their possible impact on South Asian monsoon systems.
                </p>
                <ul className="text-blue-200 space-y-2">
                  <li>• <span className="text-amber-300">Positive ONI</span>: El Niño conditions (Pacific warming)</li>
                  <li>• <span className="text-cyan-300">Negative ONI</span>: La Niña conditions (Pacific cooling)</li>
                  <li>• <span className="text-emerald-300">Near-zero ONI</span>: Neutral conditions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-justify text-cyan-400 mb-4">🛰️ Terra Satellite Data for Bangladesh Rainfall Proxies</h3>
                <p className="text-blue-200 leading-relaxed mb-4">
                  NASA’s Terra mission, launched in 1999, provides a suite of instruments that measure land, atmosphere, and energy balance variables. For this study, we rely on several Terra datasets that serve as proxies for extreme rainfall and hydrological anomalies in Bangladesh:
                </p>
                <ul className="text-blue-200 space-y-2">
                  <li>• <span className="text-cyan-300">MODIS (Moderate Resolution Imaging Spectroradiometer)</span>: Provides land cover, vegetation stress indices (NDVI), and surface reflectance. For flood and extreme rainfall analysis, MODIS flood maps and vegetation health indices are extracted.</li>
                  <li>• <span className="text-cyan-300">CERES (Clouds and the Earth’s Radiant Energy System)</span>: Measures radiation balance, outgoing longwave radiation, and net energy fluxes. Anomalies in CERES data often coincide with strong ENSO phases and can indicate atmospheric conditions favorable for extreme rainfall.</li>
                  <li>• <span className="text-cyan-300">MISR (Multi-angle Imaging SpectroRadiometer)</span>: Supplies cloud height and aerosol measurements, which are important for storm and precipitation formation.</li>
                  <li>• <span className="text-cyan-300">MOPITT (Measurements of Pollution in the Troposphere)</span>: Used for detecting anomalies in atmospheric composition, which may indirectly link to drought or flood years.</li>
                </ul>
                <p className="text-blue-200 leading-relaxed mt-4">
                  All datasets are accessed via NASA’s Giovanni portal, downloaded in NetCDF format, and processed into regional averages for Bangladesh. Extreme rainfall events are defined by thresholds (e.g., daily precipitation anomalies exceeding 88 mm, consistent with Bangladesh Meteorological Department criteria).
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visualization Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* 1. 10-Year Daily Rainfall Data */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-green-700/30"
          >
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">
              10-Year Daily Rainfall Data
            </h3>
            <div className="h-96 bg-gradient-to-b from-blue-400/20 to-green-400/20 rounded-lg border border-green-500/30">
              <img src={DailyImg} alt="10 years daily rainfall" className="w-full h-full object-contain rounded-lg shadow-md" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="text-center p-2 bg-blue-500/20 rounded">
                <div className="text-blue-300">Max Rainfall Observed</div>
                <div className="text-white font-bold">~280mm</div>
              </div>
              <div className="text-center p-2 bg-green-500/20 rounded">
                <div className="text-green-300">Extreme Threshold (BMD Criteria)</div>
                <div className="text-white font-bold">≥88mm</div>
              </div>
            </div>
            <p className="text-green-200 text-sm mt-2">2014-2024 Timeline | Source: Processed Regional Averages from NASA Terra Datasets</p>
          </motion.div>

          {/* 2. Extreme Rainfall Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-amber-700/30"
          >
            <h3 className="text-xl font-bold text-amber-400 mb-4 text-center">
              Extreme Rainfall Events
            </h3>
            <div className="text-center">
             <img src={ExtremeImg} alt="Extreme Rainfall Events" className="mx-auto h-80 w-full p-1 mb-4 rounded-lg shadow-md" />
              <p className="text-amber-200 text-lg font-semibold">Events ≥88mm (Daily Precipitation Anomalies)</p>
              <p className="text-amber-300/70 text-sm mt-2">2000-2025 Period | Aggregated Over Bangladesh Administrative Boundaries</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-xs">
              <div className="text-center p-2 bg-amber-500/20 rounded">
                <div className="text-amber-300">La Niña Years</div>
                <div className="text-white font-bold">High Frequency (Enhanced Monsoon)</div>
              </div>
              <div className="text-center p-2 bg-blue-500/20 rounded">
                <div className="text-blue-300">El Niño Years</div>
                <div className="text-white font-bold">Low Frequency (Suppressed Rainfall)</div>
              </div>
              <div className="text-center p-2 bg-emerald-500/20 rounded">
                <div className="text-emerald-300">Neutral Years</div>
                <div className="text-white font-bold">Moderate Frequency</div>
              </div>
            </div>
          </motion.div>

          {/* 3. Heatmap of Pearson Correlations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-purple-700/30"
          >
            <h3 className="text-xl font-bold text-purple-400 mb-4 text-center">
              Pearson Correlation Heatmap
            </h3>
            <div className="h-96  rounded-lg border border-purple-500/30 ">
                <img src={HeatmapImg} alt="Pearson Correlation Heatmap" className=" h-full w-full mb-4 rounded-lg shadow-md" />
            </div>
            <div className="mt-4 flex justify-between text-xs">
              <span className="text-red-400">-1.0 (Strong Negative Correlation)</span>
              <span className="text-green-400">+1.0 (Strong Positive Correlation)</span>
            </div>
          </motion.div>

          {/* 4. Regional Rainfall vs Niño 3.4 Anomaly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-cyan-700/30"
          >
            <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">
              Regional Rainfall vs Niño 3.4 Anomaly
            </h3>
            <div className="h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/30 flex items-center justify-center">
               <img src={RainfallImg} alt=" Regional Rainfall vs Niño 3.4 Anomaly" className="mx-auto w-full h-full  rounded-lg shadow-md" />

            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="text-center p-2 bg-cyan-500/20 rounded">
                <div className="text-cyan-300">Regional Rainfall Scale</div>
                <div className="text-white font-bold">0-1000mm</div>
              </div>
              <div className="text-center p-2 bg-blue-500/20 rounded">
                <div className="text-blue-300">Niño 3.4 Anomaly Scale</div>
                <div className="text-white font-bold">±4°C (Scaled x100 for Visualization)</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5. Data Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-6 border border-emerald-700/30">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
              Dataset Specifications
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-700/30">
                    <th className="text-left p-3 text-emerald-300 font-semibold">Dataset / Source</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Instrument / Index</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Variable(s) Used</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Temporal Coverage</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Spatial Resolution</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Format</th>
                    <th className="text-left p-3 text-emerald-300 font-semibold">Purpose in Study</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-emerald-700/20">
                    <td className="p-3 text-blue-300">NOAA Climate Prediction Center</td>
                    <td className="p-3 text-white">Oceanic Niño Index (ONI)</td>
                    <td className="p-3 text-white">Sea surface temperature anomalies (Niño 3.4 region)</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">Global index (monthly)</td>
                    <td className="p-3 text-amber-300">CSV / TXT</td>
                    <td className="p-3 text-white">Defines El Niño & La Niña phases for correlation with rainfall anomalies</td>
                  </tr>
                  <tr className="border-b border-emerald-700/20">
                    <td className="p-3 text-blue-300">NASA Terra – MODIS</td>
                    <td className="p-3 text-white">MODIS (Moderate Resolution Imaging Spectroradiometer)</td>
                    <td className="p-3 text-white">NDVI, Land cover, Flood mapping</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">250m – 1 km</td>
                    <td className="p-3 text-amber-300">NetCDF / GeoTIFF</td>
                    <td className="p-3 text-white">Detects rainfall-driven vegetation stress and flood events in Bangladesh</td>
                  </tr>
                  <tr className="border-b border-emerald-700/20">
                    <td className="p-3 text-blue-300">NASA Terra – CERES</td>
                    <td className="p-3 text-white">CERES (Clouds and the Earth’s Radiant Energy System)</td>
                    <td className="p-3 text-white">Outgoing longwave radiation, Net radiation fluxes</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">~1° (global grid)</td>
                    <td className="p-3 text-amber-300">NetCDF</td>
                    <td className="p-3 text-white">Tracks atmospheric energy balance anomalies linked to ENSO and rainfall</td>
                  </tr>
                  <tr className="border-b border-emerald-700/20">
                    <td className="p-3 text-blue-300">NASA Terra – MISR</td>
                    <td className="p-3 text-white">MISR (Multi-angle Imaging SpectroRadiometer)</td>
                    <td className="p-3 text-white">Cloud height, Aerosol loading</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">275m – 1.1 km</td>
                    <td className="p-3 text-amber-300">NetCDF</td>
                    <td className="p-3 text-white">Identifies storm/flood precursors and aerosol-cloud interactions affecting rainfall</td>
                  </tr>
                  <tr className="border-b border-emerald-700/20">
                    <td className="p-3 text-blue-300">NASA Terra – MOPITT</td>
                    <td className="p-3 text-white">MOPITT (Measurements of Pollution in the Troposphere)</td>
                    <td className="p-3 text-white">Carbon monoxide concentrations</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">~22 km</td>
                    <td className="p-3 text-amber-300">NetCDF</td>
                    <td className="p-3 text-white">Links biomass burning and drought anomalies to ENSO-driven events</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-blue-300">Bangladesh Meteorological Department (BMD) (optional)</td>
                    <td className="p-3 text-white">Ground observations</td>
                    <td className="p-3 text-white">Daily rainfall (≥88 mm = extreme event)</td>
                    <td className="p-3 text-green-300">2000–2025</td>
                    <td className="p-3 text-white">Station-based (countrywide)</td>
                    <td className="p-3 text-amber-300">CSV</td>
                    <td className="p-3 text-white">Used to validate Terra-based rainfall anomalies and define extreme rainfall events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* 6. ENSO System Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-amber-700/30">
            <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
              ENSO Climate System and Regional Impacts
            </h3>
            <img src={ENSO} alt="El Niño" className="mx-auto h-80 mb-4 rounded-lg shadow-md" />

            <div className="grid md:grid-cols-3 gap-6">
              {/* El Niño */}
              <div className="text-center">
                <div className="bg-gradient-to-b from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="text-amber-300 font-bold text-lg mb-3">El Niño Phase</h4>
                  <ul className="text-amber-200 text-sm space-y-2 text-left">
                    <li>• Warmer-than-average Pacific SSTs</li>
                    <li>• Weakened South Asian monsoon circulation</li>
                    <li>• Reduced rainfall and delayed monsoon onset</li>
                    <li>• Drought-like conditions in Bangladesh</li>
                  </ul>
                </div>
              </div>

              {/* Neutral */}
              <div className="text-center">
                <div className="bg-gradient-to-b from-emerald-500/20 to-green-500/20 rounded-xl p-6 border border-emerald-500/30">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h4 className="text-emerald-300 font-bold text-lg mb-3">Neutral Phase</h4>
                  <ul className="text-emerald-200 text-sm space-y-2 text-left">
                    <li>• Normal SST patterns in equatorial Pacific</li>
                    <li>• Typical monsoon flows</li>
                    <li>• Average rainfall variability</li>
                    <li>• Stable hydrological conditions</li>
                  </ul>
                </div>
              </div>

              {/* La Niña */}
              <div className="text-center">
                <div className="bg-gradient-to-b from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-500/30">
                  <div className="text-4xl mb-4">🌊</div>
                  <h4 className="text-cyan-300 font-bold text-lg mb-3">La Niña Phase</h4>
                  <ul className="text-cyan-200 text-sm space-y-2 text-left">
                    <li>• Cooler-than-average Pacific SSTs</li>
                    <li>• Strengthened monsoon flows</li>
                    <li>• Above-average rainfall</li>
                    <li>• Increased flood risks in flood-prone regions</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-justify bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl p-6 border border-blue-700/30">
              <h4 className="text-blue-300 text-justify font-bold text-lg mb-3">Correlation Findings and Approach</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-blue-200 mb-2">
                    <span className="text-cyan-300 font-semibold">La Niña:</span> Significant negative correlations are expected during La Niña years, when enhanced monsoon rainfall often leads to flooding in Bangladesh.
                  </p>
                  <p className="text-blue-200">
                    <span className="text-amber-300 font-semibold">El Niño:</span> Weaker or negative correlations may be observed during El Niño years, which tend to suppress rainfall.
                  </p>
                </div>
                <div>
                  <p className="text-blue-200">
                    <span className="text-emerald-300  font-semibold">Methodology:</span> Pearson’s correlation coefficient is employed to quantify the linear relationship between rainfall anomaly time series derived from Terra instruments and monthly ENSO indices. The analysis spans 2000–2025, covering multiple ENSO cycles, with focus on flood-prone regions like Sylhet, Rajshahi, and coastal districts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-blue-700/30">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              ENSO Correlation With Global Precipitation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-blue-500/30">
                <video 
                  src="/videos/video1.mp4" 
                  controls 
                  className="w-full h-64 object-cover"
                />
                <p className="text-center text-blue-200 mt-2 text-sm">
                  El Niño & La Niña Rainfall Impacts
                </p>
              </div>

              {/* Video 2 */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-green-500/30">
                <video 
                  src="/videos/video2.mp4" 
                  controls 
                  className="w-full h-64 object-cover"
                />
                <p className="text-center text-green-200 mt-2 text-sm">
                  Bangladesh Extreme Rainfall Events
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Significance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-2xl p-8 border border-green-700/30">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Research Significance</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-cyan-400 text-2xl mb-3">🛡️</div>
                <h3 className="text-cyan-300 font-bold mb-2">Disaster Preparedness</h3>
                <p className="text-cyan-200 text-sm">
                  Provides quantitative evidence for early warning systems, improving predictions of floods and droughts based on ENSO phases.
                </p>
              </div>
              <div className="text-center">
                <div className="text-emerald-400 text-2xl mb-3">💧</div>
                <h3 className="text-emerald-300 font-bold mb-2">Water Resource Management</h3>
                <p className="text-emerald-200 text-sm">
                  Offers insights into hydrological cycle variations for optimized planning during El Niño (drought) and La Niña (flood) conditions.
                </p>
              </div>
              <div className="text-center">
                <div className="text-amber-400 text-2xl mb-3">🌱</div>
                <h3 className="text-amber-300 font-bold mb-2">Climate Resilience</h3>
                <p className="text-amber-200 text-sm">
                  Demonstrates how global teleconnections influence local extremes, aiding adaptation strategies in vulnerable regions like Bangladesh.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClimateConnections;