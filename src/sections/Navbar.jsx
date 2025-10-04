import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ENSODropdown from "./ENSODropdown";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [ensoPhase, setEnsoPhase] = useState("neutral");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Timeline", href: "/timeline", icon: "⏳" },
    { name: "Map", href: "/map", icon: "🗺️" },
    { name: "Impact", href: "/impact", icon: "🌍" },
    { name: "Data & Tech", href: "/datatech", icon: "📊" },
    { name: "Team & Contact", href: "/team", icon: "👥" },
    { name: "Community", href: "/community", icon: "🤝" },
    { name: "About", href: "/about", icon: "ℹ️" },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const ensoInterval = setInterval(() => {
      setEnsoPhase((prev) =>
        prev === "neutral" ? "nino" : prev === "nino" ? "nina" : "neutral"
      );
    }, 8000);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
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
      case "/enso":
      case "/enso-basics":
      case "/climate-connections":
        active = "ENSO Relations";
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
      case "/community":
        active = "Community";
        break;
      case "/about":
        active = "About";
        break;
      default:
        active = "Home";
    }
    setActiveLink(active);
  }, [location]);

  const phaseColor = (phase) => {
    if (phase === "nino") return "from-amber-400 to-orange-700";
    if (phase === "nina") return "from-cyan-400 to-blue-700";
    return "from-emerald-400 to-teal-700";
  };

  const activeColorClass = phaseColor(ensoPhase);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "h-14 md:h-16 bg-black/95 backdrop-blur-md shadow-lg" 
          : "h-16 md:h-20 bg-black/90 backdrop-blur-sm"
      }`}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${activeColorClass} opacity-50 transition-all duration-1000`}
      />
      
      <div className="relative z-10 h-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 text-white font-bold min-w-0 flex-shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-xl sm:text-2xl">🌍</span>
            <span className="text-sm sm:text-lg md:text-xl lg:text-xl whitespace-nowrap">
              CLIMATE ECHOES
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-4xl mx-4">
            <ul className="flex items-center space-x-1 xl:space-x-2">
              <li className="flex-shrink-0">
                <Link
                  to="/"
                  className={`flex items-center px-2 py-2 rounded-lg text-white text-sm xl:text-base transition-all duration-300 whitespace-nowrap min-w-[60px] justify-center ${
                    activeLink === "Home"
                      ? `${activeColorClass} bg-gradient-to-r text-white font-semibold shadow-lg`
                      : "hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <span className="mr-1 text-xs xl:text-sm">🏠</span>
                  <span>Home</span>
                </Link>
              </li>

              <li className="flex-shrink-0">
                <ENSODropdown 
                  isActive={activeLink === "ENSO Relations"} 
                  phaseColor={activeColorClass}
                />
              </li>

              {links.slice(1).map((item) => (
                <li key={item.name} className="flex-shrink-0">
                  <Link
                    to={item.href}
                    className={`flex items-center px-2 py-2 rounded-lg text-white text-sm xl:text-base transition-all duration-300 whitespace-nowrap min-w-[60px] justify-center ${
                      activeLink === item.name
                        ? `${activeColorClass} bg-gradient-to-r text-white font-semibold shadow-lg`
                        : "hover:bg-white/10 hover:scale-105"
                    }`}
                  >
                    <span className="mr-1 text-xs xl:text-sm">{item.icon}</span>
                    <span className="hidden xl:inline">{item.name}</span>
                    <span className="xl:hidden text-xs">{item.name.split(' ')[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center">
            <ul className="flex items-center space-x-1">
              <li>
                <Link
                  to="/"
                  className={`flex items-center px-2 py-2 rounded-lg text-white text-xs transition-all ${
                    activeLink === "Home"
                      ? `${activeColorClass} bg-gradient-to-r text-white font-semibold`
                      : "hover:bg-white/10"
                  }`}
                >
                  <span className="mr-1">🏠</span>
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <ENSODropdown 
                  isActive={activeLink === "ENSO Relations"} 
                  phaseColor={activeColorClass}
                  compact={true}
                />
              </li>

              {links.slice(1, 4).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`flex items-center px-2 py-2 rounded-lg text-white text-xs transition-all ${
                      activeLink === item.name
                        ? `${activeColorClass} bg-gradient-to-r text-white font-semibold`
                        : "hover:bg-white/10"
                    }`}
                  >
                    <span className="mr-1">{item.icon}</span>
                    <span>{item.name.split(' ')[0]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced Hamburger Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 group relative"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {/* Background with better visibility */}
            <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
              menuOpen 
                ? 'bg-white/20 backdrop-blur-md shadow-lg' 
                : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`} />
            
            {/* Animated Icon */}
            <div className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110">
              {menuOpen ? (
                <X size={28} className="filter drop-shadow-md" />
              ) : (
                <Menu size={28} className="filter drop-shadow-md" />
              )}
            </div>

            {/* Pulse animation when closed */}
            {!menuOpen && (
              <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping opacity-20" />
            )}
          </button>
        </div>
      </div>

            {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[60px] md:top-[64px] z-[1000]"
          style={{ backgroundColor: '#1A202C' }}
          id="mobile-menu"
        >
          <div
            className="relative z-[1001] container mx-auto px-4 py-6 h-[calc(100vh-60px)] md:h-[calc(100vh-64px)] overflow-y-auto"
            style={{ backgroundColor: '#1A202C' }}
          >
            {/* Close Header */}
            <div className="flex justify-between items-center mb-6 px-2">
              <h2 className="text-white text-xl font-bold">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="grid grid-cols-1 gap-3">
              <li>
                <Link
                  to="/"
                  onClick={() => {
                    setActiveLink("Home");
                    setMenuOpen(false);
                  }}
                  className={`flex items-center px-4 py-4 rounded-xl text-white text-lg transition-all duration-300 border-2 ${
                    activeLink === "Home"
                      ? `${activeColorClass} bg-gradient-to-r text-white font-bold shadow-xl transform scale-105 border-white/30`
                      : "hover:bg-white/10 hover:scale-105 border-white/10"
                  }`}
                >
                  <span className="mr-3 text-xl">🏠</span>
                  <span className="font-medium">Home</span>
                </Link>
              </li>

              <li>
                <div className="px-2 py-3">
                  <ENSODropdown 
                    isActive={activeLink === "ENSO Relations"} 
                    phaseColor={activeColorClass}
                    onSelect={() => setMenuOpen(false)}
                  />
                </div>
              </li>

              {links.slice(1).map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => {
                      setActiveLink(item.name);
                      setMenuOpen(false);
                    }}
                    className={`flex items-center px-4 py-4 rounded-xl text-white text-lg transition-all duration-300 border-2 ${
                      activeLink === item.name
                        ? `${activeColorClass} bg-gradient-to-r text-white font-bold shadow-xl transform scale-105 border-white/30`
                        : "hover:bg-white/10 hover:scale-105 border-white/10"
                    }`}
                  >
                    <span className="mr-3 text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Enhanced Close Button */}
            <div className="mt-8 px-4">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 px-4 bg-white/20 text-white rounded-xl font-bold hover:bg-white/30 transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
              >
                <X size={20} />
                Close Menu
              </button>
            </div>

            {/* Footer Info */}
            <div className="mt-6 px-4 text-center">
              <p className="text-white/60 text-sm">
                Climate Echoes • NASA Terra Data 2000-2025
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;