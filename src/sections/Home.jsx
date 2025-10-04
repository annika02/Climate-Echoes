import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, Environment } from "@react-three/drei";
import * as THREE from "three";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate and Link

// 3D Data Flow Visualization
const DataFlowParticles = ({ phase }) => {
  const particlesRef = useRef();

  const phaseColors = {
    nino: new THREE.Color(0xff6b35),
    nina: new THREE.Color(0x4cc9f0),
    neutral: new THREE.Color(0x72efdd),
  };
  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });
  const particles = Array.from({ length: 50 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ],
    scale: Math.random() * 0.5 + 0.2,
  }));
  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshBasicMaterial
            color={phaseColors[phase]}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

// 2D Climate Wave Visualization (using Framer Motion)
const ClimateWave2D = ({ phase, index }) => {
  return (
    <motion.div
      className={`h-1 rounded-full absolute left-0 right-0 ${
        phase === "nino"
          ? "bg-gradient-to-r from-amber-500 to-orange-600"
          : phase === "nina"
          ? "bg-gradient-to-r from-cyan-400 to-blue-500"
          : "bg-gradient-to-r from-emerald-400 to-green-500"
      }`}
      style={{
        top: `${20 + index * 15}%`,
        opacity: 0.3 + index * 0.1,
      }}
      animate={{
        scaleX: [1, 1.2, 1],
        opacity: [
          0.3 + index * 0.1,
          0.6 + index * 0.1,
          0.3 + index * 0.1,
        ],
      }}
      transition={{
        duration: 3,
        delay: index * 0.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// 3D Climate Wave Visualization (using React Three Fiber)
const ClimateWave3D = ({ phase, index }) => {
  const meshRef = useRef();

  const phaseColors = {
    nino: new THREE.Color(0xff6b35),
    nina: new THREE.Color(0x4cc9f0),
    neutral: new THREE.Color(0x72efdd),
  };
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(clock.getElapsedTime() * 2 + index) * 0.3;
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <mesh ref={meshRef} position={[index * 2 - 4, 0, 0]}>
      <planeGeometry args={[1.5, 0.1, 1]} />
      <meshBasicMaterial
        color={phaseColors[phase]}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Home = () => {
  const [ensoPhase, setEnsoPhase] = useState("neutral");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  const phaseData = {
    nino: {
      color: "from-amber-500 via-orange-500 to-red-600",
      bgGradient:
        "bg-gradient-to-br from-amber-900/20 via-orange-800/10 to-red-900/20",
      border: "border-amber-500/30",
      icon: "🔥",
      name: "EL NIÑO",
      desc: "Pacific Warming Phase",
      stats: ["Global Temp +", "Drought Risk ↑", "Monsoon Shift"],
      features: ["Ocean Warming", "Atmospheric Changes", "Global Impacts"],
    },
    nina: {
      color: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGradient:
        "bg-gradient-to-br from-cyan-900/20 via-blue-800/10 to-indigo-900/20",
      border: "border-cyan-500/30",
      icon: "🌊",
      name: "LA NIÑA",
      desc: "Pacific Cooling Phase",
      stats: ["Enhanced Rainfall", "Flood Risk ↑", "Stronger Monsoon"],
      features: ["Ocean Cooling", "Trade Winds ↑", "Regional Impacts"],
    },
    neutral: {
      color: "from-emerald-400 via-green-500 to-teal-600",
      bgGradient:
        "bg-gradient-to-br from-emerald-900/20 via-green-800/10 to-teal-900/20",
      border: "border-emerald-500/30",
      icon: "⚖️",
      name: "ENSO NEUTRAL",
      desc: "Stable Climate Conditions",
      stats: ["Normal Patterns", "Balanced Systems", "Predictable Weather"],
      features: ["Average Conditions", "Stable Climate", "Baseline Studies"],
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnsoPhase((prev) =>
        prev === "neutral" ? "nino" : prev === "nino" ? "nina" : "neutral"
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentPhase = phaseData[ensoPhase];

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Animated Background Waves (2D) */}
      <div className="absolute inset-0 overflow-hidden">
        {[0, 1, 2, 3, 4].map((index) => (
          <ClimateWave2D key={index} phase={ensoPhase} index={index} />
        ))}
      </div>
      {/* Floating Particles Background (3D) */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <DataFlowParticles phase={ensoPhase} />
          {/* 3D Waves */}
          {[0, 1, 2, 3, 4].map((index) => (
            <ClimateWave3D key={index} phase={ensoPhase} index={index} />
          ))}
          <Environment preset="night" />
        </Canvas>
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-32 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentPhase.color} animate-pulse`}
            />
            <span className="text-green-400 font-mono text-sm uppercase tracking-widest">
              Real-time Climate Monitoring
            </span>
            <div
              className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentPhase.color} animate-pulse`}
            />
          </motion.div>
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-7xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-green-200 to-emerald-400 mb-6"
          >
            ECHOES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl sm:text-2xl text-green-200 max-w-2xl mx-auto leading-relaxed"
          >
            Tracking 25 years of climate patterns and their impact on Bangladesh
            through advanced satellite data analysis.
          </motion.p>
        </motion.div>
        {/* ENSO Phase Card */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={`max-w-4xl mx-auto mt-16 rounded-3xl backdrop-blur-xl border ${currentPhase.border} ${currentPhase.bgGradient} p-8`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={ensoPhase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <motion.div
                  className="text-5xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentPhase.icon}
                </motion.div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {currentPhase.name}
                  </h2>
                  <p className="text-green-300 text-lg">
                    {currentPhase.desc}
                  </p>
                </div>
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {currentPhase.stats.map((stat, index) => (
                  <motion.div
                    key={stat}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${currentPhase.color} bg-opacity-10 border ${currentPhase.border}`}
                  >
                    <div className="text-white font-semibold text-lg">
                      {stat}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Features */}
              <div className="flex flex-wrap justify-center gap-3">
                {currentPhase.features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 rounded-full bg-black/50 text-green-300 border border-green-500/30 text-sm"
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/climate-connections" // Navigate to ClimateConnections
              className={`px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r ${currentPhase.color} shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🌐 Explore Climate Data
            </Link>
            <Link
              to="/timeline" // Navigate to Timeline
              className="px-8 py-4 rounded-2xl font-bold text-green-300 border-2 border-green-500 hover:bg-green-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📈 View Analytics
            </Link>
          </div>
          {/* Timeline Indicator */}
          <motion.div
            className="flex justify-center gap-2 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {["neutral", "nino", "nina"].map((phase) => (
              <button
                key={phase}
                onClick={() => setEnsoPhase(phase)}
                className={`w-3 h-3 rounded-full transition-all ${
                  ensoPhase === phase
                    ? `bg-gradient-to-r ${phaseData[phase].color} scale-125`
                    : "bg-white/30"
                }`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </div>
  );
};

export default Home;