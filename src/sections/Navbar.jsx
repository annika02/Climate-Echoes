import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [ensoPhase, setEnsoPhase] = useState("neutral");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "ENSO Correlation", href: "#enso" },
    { name: "Timeline", href: "#timeline" },
    { name: "Map", href: "#map" },
    { name: "Impact", href: "#impact" },
    { name: "Data & Tech", href: "#datatech" },
    { name: "Team & Contact", href: "#team" },
    { name: "About", href: "#about" },
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
          ? "h-14 bg-black/80 backdrop-blur-2xl border-b border-white/10" 
          : "h-20 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-xl"
      }`}
    >
      {/* Animated background gradient */}
      <div 
        className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 animate-gradient-x transition-all duration-2000`} 
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-white animate-float opacity-40 ${phaseGlow(ensoPhase)}`}
            style={{ 
              left: `${10 + i * 12}%`, 
              top: `${30 + Math.sin(i) * 40}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Dynamic glow effect */}
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-0 animate-pulse transition-all duration-2000 ${ensoPhase !== 'neutral' ? 'opacity-10' : ''}`} />

      <div className="relative z-10 container mx-auto flex items-center justify-between h-full px-4 sm:px-6">
        {/* Enhanced Logo with morphing animation */}
        <div className="flex items-center gap-3 cursor-pointer select-none group">
          <div className="relative">
            <div 
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl border-2 border-white/20 bg-gradient-to-br from-black/80 to-black/40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 ${phaseGlow(ensoPhase)} group-hover:shadow-lg`}
            >
              <div 
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${phaseColor(ensoPhase)} animate-gradient-xy bg-[length:400%_400%] transition-all duration-1000`} 
              />
            </div>
            {/* Pulsing rings */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 animate-ping-slow -z-10`} />
            <div className={`absolute inset-0 rounded-2xl border border-white/10 animate-pulse-slow -z-10`} />
          </div>
          <div className="transition-all duration-500 group-hover:translate-x-1">
            <div className="text-xs font-bold text-white/70 tracking-widest">CLIMATE</div>
            <div className={`text-lg sm:text-xl font-black bg-clip-text text-transparent bg-gradient-to-r ${phaseColor(ensoPhase)} animate-gradient-x transition-all duration-1000`}>
              ECHOES
            </div>
          </div>
        </div>

        {/* Enhanced Desktop Links */}
        <ul className="hidden lg:flex gap-1 items-center">
          {links.map((lnk, index) => (
            <li key={lnk.name}>
              <a
                href={lnk.href}
                onClick={() => setActiveLink(lnk.name)}
                className={`relative px-4 py-2 rounded-xl font-semibold uppercase text-sm tracking-wider transition-all duration-500 transform hover:scale-105 ${
                  activeLink === lnk.name
                    ? `text-white bg-gradient-to-r ${phaseColor(ensoPhase)} shadow-lg scale-105`
                    : "text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {lnk.name}
                {activeLink === lnk.name && (
                  <span className={`absolute inset-0 rounded-xl bg-gradient-to-r ${phaseColor(ensoPhase)} opacity-20 animate-pulse -z-10`} />
                )}
                <span 
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${phaseColor(ensoPhase)} transition-all duration-500 group-hover:w-3/4 ${
                    activeLink === lnk.name ? 'w-3/4' : ''
                  }`} 
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Enhanced Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={`p-3 rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-500 transform hover:scale-110 ${menuOpen ? `bg-gradient-to-r ${phaseColor(ensoPhase)} text-white scale-110` : ''}`}
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
          className="lg:hidden bg-gradient-to-b from-black/95 to-black/80 backdrop-blur-2xl border-t border-white/10 animate-slide-down"
          style={{ animation: 'slideDown 0.5s ease-out' }}
        >
          <ul className="flex flex-col items-stretch gap-2 py-4 px-4">
            {links.map((lnk, index) => (
              <li 
                key={lnk.name}
                style={{ animationDelay: `${index * 80}ms` }}
                className="animate-fade-in-up"
              >
                <a
                  href={lnk.href}
                  onClick={() => {
                    setActiveLink(lnk.name);
                    setMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-xl text-white/80 hover:text-white transition-all duration-500 transform hover:scale-[1.02] hover:translate-x-2 backdrop-blur-sm ${
                    activeLink === lnk.name 
                      ? `bg-gradient-to-r ${phaseColor(ensoPhase)} text-white shadow-lg scale-[1.02] translate-x-2` 
                      : 'hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span 
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${phaseColor(ensoPhase)} transition-all duration-500 ${
                        activeLink === lnk.name ? 'scale-150' : 'scale-100'
                      }`} 
                    />
                    {lnk.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;