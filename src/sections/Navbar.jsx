import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ENSODropdown from "./ENSODropdown";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [ensoPhase, setEnsoPhase] = useState("neutral");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/", type: "link" },
    { type: "dropdown", key: "enso-relations" },
    { name: "Timeline", href: "/timeline", type: "link" },
    { name: "Map", href: "/map", type: "link" },
    { name: "Impact", href: "/impact", type: "link" },
    { name: "Data & Tech", href: "/datatech", type: "link" },
    { name: "Team & Contact", href: "/team", type: "link" },
    { name: "About", href: "/about", type: "link" },
  ];

  useEffect(() => {
    const ensoInterval = setInterval(() => {
      setEnsoPhase((prev) =>
        prev === "neutral" ? "nino" : prev === "nino" ? "nina" : "neutral"
      );
    }, 8000);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    return () => {
      clearInterval(ensoInterval);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    let active = "Home";
    switch (location.pathname) {
      case "/":
        active = "Home";
        break;
      case "/timeline":
        active = "Timeline";
        break;
      case "/map":
        active = "Map";
        break;
      case "/impact":
        active = "Impact";
        break;
      case "/datatech":
        active = "Data & Tech";
        break;
      case "/team":
        active = "Team & Contact";
        break;
      case "/about":
        active = "About";
        break;
      case "/enso-basics":
      case "/climate-connections":
        active = "ENSO Relations";
        break;
      default:
        active = "Home";
    }
    setActiveLink(active);
  }, [location]);

  const phaseColor = (phase) => {
    if (phase === "nino") return "from-amber-400 via-orange-500 to-red-600";
    if (phase === "nina") return "from-cyan-400 via-blue-500 to-indigo-600";
    return "from-emerald-400 via-green-500 to-teal-600";
  };

  const phaseGlow = (phase) => {
    if (phase === "nino") return "shadow-amber-500/30";
    if (phase === "nina") return "shadow-cyan-500/30";
    return "shadow-emerald-500/30";
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "h-16 bg-black/90 backdrop-blur-2xl border-b border-white/20" 
          : "h-24 bg-gradient-to-b from-black/95 to-transparent backdrop-blur-xl"
      }`}
    >
      {/* Animated background gradient */}
      <div 
        className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 transition-all duration-2000`} 
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-white opacity-40 ${phaseGlow(ensoPhase)}`}
            style={{ 
              left: `${10 + i * 12}%`, 
              top: `${30 + Math.sin(i) * 40}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto flex items-center justify-between h-full px-4 sm:px-6">
        {/* Enhanced Logo with morphing animation */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer select-none group">
          <div className="relative">
            <div 
              className={`w-12 h-12 rounded-2xl border-2 border-white/20 bg-gradient-to-br from-black/80 to-black/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${phaseGlow(ensoPhase)} group-hover:shadow-lg`}
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${phaseColor(ensoPhase)} bg-[length:400%_400%] transition-all duration-1000`} 
              />
            </div>
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 animate-ping-slow -z-10`} />
            <div className={`absolute inset-0 rounded-2xl border border-white/10 animate-pulse-slow -z-10`} />
          </div>
          <div className="transition-all duration-500 group-hover:translate-x-1">
            <div className="text-sm font-bold text-white/80 tracking-widest">CLIMATE</div>
            <div className={`text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${phaseColor(ensoPhase)} transition-all duration-1000`}>
              ECHOES
            </div>
          </div>
        </Link>

        {/* Enhanced Desktop Links */}
        <ul className="hidden lg:flex gap-2 items-center">
          {links.map((item, index) => (
            <li key={item.key || item.name || index} className={item.type === "dropdown" && activeLink === "ENSO Relations" ? `relative rounded-xl bg-gradient-to-r ${phaseColor(ensoPhase)} shadow-lg scale-105` : ""}>
              {item.type === "dropdown" ? (
                <ENSODropdown isActive={activeLink === "ENSO Relations"} />
              ) : (
                <Link
                  to={item.href}
                  onClick={() => setActiveLink(item.name)}
                  className={`relative px-5 py-3 rounded-xl font-semibold uppercase text-base tracking-wider transition-all duration-500 transform hover:scale-105 ${
                    activeLink === item.name
                      ? `text-white bg-gradient-to-r ${phaseColor(ensoPhase)} shadow-lg scale-105`
                      : "text-white/70 hover:text-white hover:bg-white/35 backdrop-blur-sm"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  {activeLink === item.name && (
                    <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 animate-pulse -z-10`} />
                  )}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${phaseColor(ensoPhase)} transition-all duration-500 hover:w-3/4 ${
                      activeLink === item.name ? 'w-3/4' : ''
                    }`} 
                  />
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Enhanced Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={`p-3 rounded-2xl border border-white/20 text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-110 ${menuOpen ? `bg-gradient-to-r ${phaseColor(ensoPhase)} text-white scale-110` : ''}`}
            aria-label="toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-current transform transition-all duration-500 ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile dropdown */}
      {menuOpen && (
        <div 
          className="lg:hidden bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-2xl border-t border-white/10"
        >
          <ul className="flex flex-col items-stretch gap-2 py-4 px-4">
            {links.map((item, index) => (
              <li 
                key={item.key || item.name || index}
                style={{ animationDelay: `${index * 80}ms` }}
                className="animate-fade-in-up"
              >
                {item.type === "link" ? (
                  <Link
                    to={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-white/70 hover:text-white transition-all duration-500 transform hover:scale-[1.02] hover:translate-x-2 backdrop-blur-sm ${
                      activeLink === item.name 
                        ? `bg-gradient-to-r ${phaseColor(ensoPhase)} text-white shadow-lg scale-[1.02] translate-x-2` 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span 
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${phaseColor(ensoPhase)} transition-all duration-500 ${
                          activeLink === item.name ? 'scale-150' : 'scale-100'
                        }`} 
                      />
                      {item.name}
                    </span>
                  </Link>
                ) : (
                  <>
                    <div className="px-4 py-2 text-green-400 font-semibold border-b border-green-700/30 mb-2">
                      ENSO RELATIONS
                    </div>
                    <Link
                      to="/enso-basics"
                      onClick={() => {
                        setActiveLink("ENSO Relations");
                        setMenuOpen(false);
                      }}
                      className="block px-6 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        What is ENSO?
                      </span>
                    </Link>
                    <Link
                      to="/climate-connections"
                      onClick={() => {
                        setActiveLink("ENSO Relations");
                        setMenuOpen(false);
                      }}
                      className="block px-6 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Climate Connections
                      </span>
                    </Link>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Add custom animations to tailwind config */}
      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;