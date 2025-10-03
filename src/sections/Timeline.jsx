import React from "react";
import { motion } from "framer-motion";
import Anomality from "../assets/anomality.png"
import AnomalityEvent from "../assets/anomality event.png"

const Timeline = () => {
  return (
    <section className="min-h-screen bg-black text-white py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-6">
            Climate Anomalies and Significant Events (2000-2025)
          </h1>
        </motion.div>

        {/* 1. Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">1. Introduction</h2>
            <p className="text-blue-200 leading-relaxed text-lg">
              This infographics presents a comprehensive analysis of climate anomalies over the 
              period 2000-2025, focusing on the Pacific Sea Surface Temperature (SST) Anomalies, 
              Vegetation Index, Outgoing Radiation, and Fire/CO anomalies. The analysis 
              incorporates significant event annotations such as droughts, floods, and wildfires. The 
              aim is to visualize potential teleconnections between ENSO indices and regional 
              impacts.
            </p>
          </div>
        </motion.div>

        {/* 2. Data Sources and Processing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-emerald-700/30">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">2. Data Sources and Processing</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">2.1 Pacific SST Anomaly (Niño 3.4)</h3>
                <ul className="text-cyan-200 space-y-2">
                  <li>• Data fetched from NOAA PSL: Niño 3.4 Anomalies</li>
                  <li>• Timeframe: 2000-2025</li>
                  <li>• Processed into monthly anomalies using Python pandas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">2.2 Vegetation Index (NDVI), Outgoing Radiation (OLR), and Fire/CO Anomalies</h3>
                <ul className="text-cyan-200 space-y-2">
                  <li>• Data requires external downloads and APIs (e.g., MODIS, CERES, MOPITT)</li>
                  <li>• Placeholder monthly anomaly DataFrames were created for visualization purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">2.3 Southern Oscillation Index (SOI)</h3>
                <ul className="text-cyan-200 space-y-2">
                  <li>• Data fetched from NOAA PSL: SOI Data</li>
                  <li>• Timeframe: 2000-2025</li>
                  <li>• Processed similarly into monthly values</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">2.4 Oceanic Niño Index (ONI)</h3>
                <ul className="text-cyan-200 space-y-2">
                  <li>• Data fetched from CPC NOAA: ONI Data</li>
                  <li>• Timeframe: 2000-2025</li>
                  <li>• Data extraction yielded limited results; placeholder used</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">2.5 Data Combination</h3>
                <ul className="text-cyan-200 space-y-2">
                  <li>• All datasets were merged into a single DataFrame aligned by year and month</li>
                  <li>• Missing values were filled with 0 (baseline assumption)</li>
                  <li>• A datetime column date was created for plotting</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Time Series Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-purple-700/30">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">3. Time Series Visualization</h2>
            <p className="text-purple-200 leading-relaxed mb-6">
              The combined dataset was visualized using multiple y-axes to handle different variable 
              scales. The primary axes display Niño 3.4 anomalies and SOI, while additional axes 
              display NDVI, OLR, and Fire/CO anomalies.
            </p>
            
            {/* Figure 1 Placeholder */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/30 text-center">
                <img src={Anomality} alt="Anomality" className="mx-auto h-4/5 w-full mb-4 rounded-lg shadow-md" />
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Figure 1: Full Time Series Plot</h3>
              <p className="text-purple-200 mb-4">
                Multi-variable climate timeline with multiple y-axes showing:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-red-500/20 rounded">
                  <div className="text-red-300 font-semibold">Niño 3.4 Anomaly</div>
                </div>
                <div className="text-center p-3 bg-blue-500/20 rounded">
                  <div className="text-blue-300 font-semibold">SOI</div>
                </div>
                <div className="text-center p-3 bg-green-500/20 rounded">
                  <div className="text-green-300 font-semibold">NDVI Anomaly</div>
                </div>
                <div className="text-center p-3 bg-orange-500/20 rounded">
                  <div className="text-orange-300 font-semibold">OLR Anomaly</div>
                </div>
                <div className="text-center p-3 bg-purple-500/20 rounded">
                  <div className="text-purple-300 font-semibold">Fire/CO Anomaly</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Event Annotation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-amber-700/30">
            <h2 className="text-3xl font-bold text-amber-400 mb-6">4. Event Annotation</h2>
            <p className="text-amber-200 leading-relaxed mb-6">
              Significant events were annotated on the plot: 
              <span className="text-brown-300"> Droughts marked with brown X</span> - 
              <span className="text-cyan-300"> Floods marked with cyan circles</span> - 
              <span className="text-red-300"> Wildfires marked with red triangles</span>
            </p>
            
            <p className="text-amber-200 mb-6">
              Hypothetical dates were used for demonstration. Accurate historical event dates should 
              be included in future iterations.
            </p>

            <div className="bg-amber-500/10 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-amber-300 mb-4">Event Dates (Example):</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="text-center p-3 bg-brown-500/20 rounded">
                  <div className="text-brown-300 font-semibold">2003-08-15</div>
                  <div className="text-brown-200">Drought</div>
                </div>
                <div className="text-center p-3 bg-cyan-500/20 rounded">
                  <div className="text-cyan-300 font-semibold">2010-01-20</div>
                  <div className="text-cyan-200">Flood</div>
                </div>
                <div className="text-center p-3 bg-red-500/20 rounded">
                  <div className="text-red-300 font-semibold">2015-07-01</div>
                  <div className="text-red-200">Wildfire</div>
                </div>
                <div className="text-center p-3 bg-cyan-500/20 rounded">
                  <div className="text-cyan-300 font-semibold">2018-04-10</div>
                  <div className="text-cyan-200">Flood</div>
                </div>
                <div className="text-center p-3 bg-brown-500/20 rounded">
                  <div className="text-brown-300 font-semibold">2022-09-05</div>
                  <div className="text-brown-200">Drought</div>
                </div>
              </div>
            </div>

            {/* Figure 2 Placeholder */}
            <div className="mt-8 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-xl p-8 border border-amber-500/30 text-center">
                <img src={AnomalityEvent} alt="Anomality Event" className="mx-auto h-4/5 w-full mb-4 rounded-lg shadow-md" />
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Figure 2: Time Series with Annotated Events</h3>
              <p className="text-amber-200 mb-4">
                Climate timeline with event markers showing drought, flood, and wildfire occurrences
              </p>
              <div className="flex justify-center gap-6">
                <div className="text-center">
                  <div className="text-brown-400 text-2xl mb-1">✕</div>
                  <div className="text-brown-300 text-sm">Drought</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 text-2xl mb-1">●</div>
                  <div className="text-cyan-300 text-sm">Flood</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 text-2xl mb-1">▲</div>
                  <div className="text-red-300 text-sm">Wildfire</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 5. Summary of Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-green-700/30">
            <h2 className="text-3xl font-bold text-green-400 mb-6">5. Summary of Analysis</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Data Analysis Key Findings:</h3>
              <ol className="text-emerald-200 space-y-3 text-lg">
                <li>1. Niño 3.4 and SOI data were successfully fetched and processed.</li>
                <li>2. ONI data extraction for 2000-2025 was limited; placeholder used.</li>
                <li>3. Placeholder datasets were created for NDVI, OLR, and Fire/CO anomalies.</li>
                <li>4. Combined DataFrame aligned all variables by date.</li>
                <li>5. Time series plot successfully visualized all variables with multiple y-axes.</li>
                <li>6. Event annotations demonstrated how significant climatic events could be highlighted.</li>
                <li>7. The plot was refined with titles, axis labels, and a comprehensive legend.</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4">Insights / Next Steps:</h3>
              <ul className="text-amber-200 space-y-2 text-lg">
                <li>• Replace placeholder datasets with actual NDVI, OLR, and Fire/CO anomaly data.</li>
                <li>• Incorporate accurate historical event dates for droughts, floods, and wildfires.</li>
                <li>• Analyze correlations between ENSO indices and regional climate anomalies.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 6. References */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl p-8 border border-blue-700/30">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">6. References</h2>
            <ol className="text-blue-200 space-y-3 text-lg">
              <li>1. NOAA PSL Niño 3.4: https://psl.noaa.gov/data/correlation/nina34.anom.data</li>
              <li>2. NOAA PSL SOI: https://psl.noaa.gov/data/correlation/soi.data</li>
              <li>3. CPC NOAA ONI: https://www.cpc.ncep.noaa.gov/data/indices/oni.ascii.txt</li>
              <li>4. MODIS NDVI: https://modis.gsfc.nasa.gov/data/</li>
              <li>5. CERES OLR: https://ceres.larc.nasa.gov/data/</li>
              <li>6. MOPITT Fire/CO: https://www2.acom.ucar.edu/mopitt</li>
            </ol>
            
            <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
              <p className="text-yellow-200 text-lg">
                <strong>Note:</strong> Some datasets are placeholders and should be replaced with actual 
                measurements for further analysis.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Visual Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-700/30">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">Visual Summary</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
                <img src={Anomality} alt="Anomality" className="mx-auto h-4/5 w-full mb-4 rounded-lg shadow-md" />
                  <h3 className="text-xl font-bold text-purple-300 mb-3">Figure 1</h3>
                  <p className="text-purple-200">
                    Full time series plot with multiple y-axes showing all climate variables
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
                <img src={AnomalityEvent} alt="Anomality" className="mx-auto h-4/5 w-full mb-4 rounded-lg shadow-md" />
                  <h3 className="text-xl font-bold text-amber-300 mb-3">Figure 2</h3>
                  <p className="text-amber-200">
                    Time series plot with annotated extreme weather events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;