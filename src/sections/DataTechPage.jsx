import React, { useState } from 'react';
import { Database, Cpu, Satellite, Download, Play, BarChart3, Globe, Filter, Calendar, Search, Zap, Shield, Cloud, Server, Wifi, Activity } from 'lucide-react';

const DataTechPage = () => {
  const [activeTab, setActiveTab] = useState('datasets');
  const [selectedDataset, setSelectedDataset] = useState(null);

  const terraInstruments = [
    {
      name: "MODIS",
      fullName: "Moderate Resolution Imaging Spectroradiometer",
      description: "Provides high-temporal-resolution imagery for land, ocean, and atmospheric studies",
      capabilities: ["Vegetation Monitoring", "Cloud Properties", "Ocean Color", "Fire Detection"],
      resolution: "250m - 1km",
      dataType: "Multispectral Imagery",
      icon: "🛰️"
    },
    {
      name: "CERES",
      fullName: "Clouds and the Earth's Radiant Energy System",
      description: "Measures Earth's radiation budget and cloud radiative effects",
      capabilities: ["Radiation Balance", "Cloud Forcing", "Energy Budget", "Climate Feedback"],
      resolution: "20km",
      dataType: "Radiometric Data",
      icon: "☀️"
    },
    {
      name: "MISR",
      fullName: "Multi-angle Imaging SpectroRadiometer",
      description: "Uses nine cameras at different angles to study atmospheric aerosols and surface properties",
      capabilities: ["Aerosol Properties", "Cloud Albedo", "Surface BRDF", "Stereo Imaging"],
      resolution: "275m",
      dataType: "Multi-angle Imagery",
      icon: "📐"
    },
    {
      name: "MOPITT",
      fullName: "Measurements of Pollution in the Troposphere",
      description: "Measures carbon monoxide and methane in the troposphere",
      capabilities: ["CO Concentration", "Methane Tracking", "Pollution Monitoring", "Biomass Burning"],
      resolution: "22km",
      dataType: "Gas Concentration",
      icon: "🌫️"
    },
    {
      name: "ASTER",
      fullName: "Advanced Spaceborne Thermal Emission and Reflection Radiometer",
      description: "Provides high-resolution images of Earth in multiple spectral bands",
      capabilities: ["Surface Temperature", "Elevation Data", "Mineral Mapping", "Glacier Monitoring"],
      resolution: "15-90m",
      dataType: "Hyperspectral Data",
      icon: "🔍"
    }
  ];

  const datasets = [
    {
      id: 1,
      name: "ENSO Oceanic Niño Index",
      source: "NOAA",
      period: "2000-2025",
      format: "CSV/NetCDF",
      size: "2.3 GB",
      variables: ["SST Anomalies", "ONI Values", "Nino Regions"],
      description: "Monthly sea surface temperature anomalies for ENSO monitoring",
      access: "Public",
      downloads: 1247,
      icon: "🌊"
    },
    {
      id: 2,
      name: "Bangladesh Rainfall Grid",
      source: "NASA GPM",
      period: "2000-2025",
      format: "NetCDF/HDF5",
      size: "8.7 GB",
      variables: ["Precipitation Rate", "Rainfall Anomalies", "Extreme Events"],
      description: "High-resolution precipitation data for Bangladesh region",
      access: "Public",
      downloads: 892,
      icon: "🌧️"
    },
    {
      id: 3,
      name: "MODIS Land Surface Temperature",
      source: "NASA Terra",
      period: "2000-2025",
      format: "HDF-EOS",
      size: "15.2 GB",
      variables: ["LST Day/Night", "Emissivity", "Thermal Bands"],
      description: "Daily land surface temperature at 1km resolution",
      access: "Public",
      downloads: 1563,
      icon: "🔥"
    },
    {
      id: 4,
      name: "CERES Radiation Budget",
      source: "NASA Terra",
      period: "2000-2025",
      format: "NetCDF",
      size: "6.8 GB",
      variables: ["SW Radiation", "LW Radiation", "Net Flux", "Albedo"],
      description: "Earth's radiation balance and energy budget components",
      access: "Public",
      downloads: 734,
      icon: "⚡"
    },
    {
      id: 5,
      name: "ENSO Impact Correlation Matrix",
      source: "Climate Echoes",
      period: "2000-2025",
      format: "JSON/CSV",
      size: "45 MB",
      variables: ["Pearson Correlation", "P-values", "Confidence Intervals"],
      description: "Pre-computed correlation coefficients between ENSO and regional climate",
      access: "Public",
      downloads: 567,
      icon: "📊"
    }
  ];

  const techStack = [
    {
      category: "Data Processing",
      tools: [
        { name: "Python", description: "Data analysis and machine learning", icon: "🐍" },
        { name: "xarray", description: "Multi-dimensional array processing", icon: "📦" },
        { name: "Dask", description: "Parallel computing for large datasets", icon: "⚡" },
        { name: "GDAL", description: "Geospatial data abstraction", icon: "🗺️" }
      ]
    },
    {
      category: "Visualization",
      tools: [
        { name: "React & D3.js", description: "Interactive web visualizations", icon: "📈" },
        { name: "Plotly", description: "Scientific plotting and dashboards", icon: "📊" },
        { name: "Deck.gl", description: "Large-scale geospatial visualization", icon: "🌍" },
        { name: "Three.js", description: "3D data visualization", icon: "🎮" }
      ]
    },
    {
      category: "Infrastructure",
     tools: [
    { name: "Netlify Blob", description: "Cloud data storage for datasets", icon: "☁️" },
    { name: "Netlify Functions", description: "Serverless backend API", icon: "🚀" },
    { name: "Netlify CDN", description: "Global content delivery", icon: "🌐" },
    { name: "PostgreSQL", description: "Spatial database (can use Supabase)", icon: "🐘" }
  ]
    }
  ];

  const analysisTools = [
    {
      name: "ENSO Correlation Analyzer",
      description: "Interactive tool to explore relationships between ENSO indices and regional climate variables",
      features: ["Real-time correlation plots", "Statistical significance testing", "Time series decomposition"],
      access: "Web Interface",
      status: "Live",
      icon: "🔗"
    },
    {
      name: "Climate Data Explorer",
      description: "Visual exploration of 25 years of NASA Terra data with filtering and analysis capabilities",
      features: ["Spatial filtering", "Temporal aggregation", "Multi-variable comparison"],
      access: "Web Interface",
      status: "Live",
      icon: "🔍"
    },
    {
      name: "Extreme Event Detector",
      description: "Machine learning model to identify and classify extreme weather events from satellite data",
      features: ["Anomaly detection", "Event classification", "Impact assessment"],
      access: "API + Web Interface",
      status: "Beta",
      icon: "⚡"
    },
    {
      name: "Climate Prediction Dashboard",
      description: "Seasonal climate forecasts based on ENSO patterns and historical data",
      features: ["Probabilistic forecasts", "Uncertainty visualization", "Scenario analysis"],
      access: "Web Interface",
      status: "Development",
      icon: "🔮"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Database className="w-12 h-12 text-blue-400 mr-4" />
            <Cpu className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Data & Technology
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Explore 25 years of NASA Terra satellite data, advanced analysis tools, 
            and the technology stack powering Climate Echoes research.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Satellite Instruments", value: "5", icon: Satellite },
            { label: "Data Products", value: "25+", icon: Database },
            { label: "Processing Tools", value: "12", icon: Cpu },
            { label: "Total Data", value: "45 TB", icon: Cloud }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/20 pb-4">
          {[
            { id: 'datasets', label: 'Datasets', icon: Database },
            { id: 'instruments', label: 'Terra Instruments', icon: Satellite },
            { id: 'tools', label: 'Analysis Tools', icon: BarChart3 },
            { id: 'tech', label: 'Tech Stack', icon: Cpu }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Datasets Section */}
          {activeTab === 'datasets' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-white mb-6">Available Datasets</h2>
                {datasets.map((dataset) => (
                  <div 
                    key={dataset.id}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedDataset(dataset)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{dataset.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{dataset.name}</h3>
                          <p className="text-blue-200 text-sm">{dataset.source} • {dataset.period}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        dataset.access === 'Public' 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {dataset.access}
                      </span>
                    </div>
                    
                    <p className="text-white/80 mb-4 text-sm">{dataset.description}</p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-white/60">
                        <span>{dataset.format}</span>
                        <span>{dataset.size}</span>
                        <span>📥 {dataset.downloads}</span>
                      </div>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dataset Details Sidebar */}
              <div className="lg:sticky lg:top-24 h-fit">
                {selectedDataset ? (
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{selectedDataset.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedDataset.name}</h3>
                        <p className="text-blue-200">{selectedDataset.source} • {selectedDataset.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-6">{selectedDataset.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Variables Included</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDataset.variables.map((variable, index) => (
                            <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                              {variable}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-white/60 text-sm">Format</span>
                          <div className="text-white font-medium">{selectedDataset.format}</div>
                        </div>
                        <div>
                          <span className="text-white/60 text-sm">Size</span>
                          <div className="text-white font-medium">{selectedDataset.size}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                        <Download className="w-5 h-5 mr-2" />
                        Download Dataset
                      </button>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                        <Play className="w-5 h-5 mr-2" />
                        Preview Data
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                    <Database className="w-16 h-16 text-white/40 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Select a Dataset</h3>
                    <p className="text-white/60">Click on any dataset to view detailed information and download options</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Terra Instruments Section */}
          {activeTab === 'instruments' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">NASA Terra Instruments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {terraInstruments.map((instrument, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{instrument.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{instrument.name}</h3>
                        <p className="text-blue-200 text-sm">{instrument.fullName}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4 text-sm">{instrument.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-white/60 text-sm">Resolution: </span>
                      <span className="text-white font-medium">{instrument.resolution}</span>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm">Capabilities</h4>
                      <div className="flex flex-wrap gap-2">
                        {instrument.capabilities.map((capability, idx) => (
                          <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                            {capability}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Analysis Tools Section */}
          {activeTab === 'tools' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Analysis Tools</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {analysisTools.map((tool, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{tool.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                            tool.status === 'Live' 
                              ? 'bg-green-500/20 text-green-300' 
                              : tool.status === 'Beta'
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {tool.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4 text-sm">{tool.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                      <ul className="text-white/70 text-sm space-y-1">
                        {tool.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <Zap className="w-3 h-3 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition-colors text-sm">
                      Access Tool
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Section */}
          {activeTab === 'tech' && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Technology Stack</h2>
              <div className="space-y-8">
                {techStack.map((stack, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-bold text-white mb-6">{stack.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {stack.tools.map((tool, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 text-center">
                          <span className="text-3xl mb-3 block">{tool.icon}</span>
                          <h4 className="text-lg font-bold text-white mb-2">{tool.name}</h4>
                          <p className="text-white/70 text-sm">{tool.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataTechPage;