import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ENSODropdown from "./ENSODropdown";
import { auth, signInWithPopup, googleProvider, signOut } from "../firebase";
import AuthModal from "./AuthModal";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [ensoPhase, setEnsoPhase] = useState("neutral");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "ENSO Relations", href: "/enso", icon: "🌊" },
    { name: "Timeline", href: "/timeline", icon: "⏳" },
    { name: "Map", href: "/map", icon: "🗺️" },
    { name: "Impact", href: "/impact", icon: "🌍" },
    { name: "Data & Tech", href: "/datatech", icon: "📊" },
    { name: "Team & Contact", href: "/team", icon: "👥" },
    { name: "Community", href: "/community", icon: "🤝" },
    { name: "About", href: "/about", icon: "ℹ️" },
  ];

  useEffect(() => {
    const ensoInterval = setInterval(() => {
      setEnsoPhase((prev) =>
        prev === "neutral" ? "nino" : prev === "nino" ? "nina" : "neutral"
      );
    }, 8000);

    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));

    return () => {
      clearInterval(ensoInterval);
      window.removeEventListener("scroll", onScroll);
      unsubscribe();
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
    if (phase === "nino") return "from-amber-500 to-orange-600";
    if (phase === "nina") return "from-cyan-500 to-blue-600";
    return "from-emerald-500 to-teal-600";
  };
  const solidPhaseColor = (phase) => {
    if (phase === "nino") return "bg-gradient-to-r from-amber-500 to-orange-600";
    if (phase === "nina") return "bg-gradient-to-r from-cyan-500 to-blue-600";
    return "bg-gradient-to-r from-emerald-500 to-teal-600";
  };

  const activeColorClass = phaseColor(ensoPhase);
  const solidActiveColorClass = solidPhaseColor(ensoPhase);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setMenuOpen(false);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setMenuOpen(false);
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  const getInitials = (user) =>
    user?.displayName
      ? user.displayName.charAt(0).toUpperCase()
      : user?.email
      ? user.email.charAt(0).toUpperCase()
      : "?";

  const getUserDisplayName = (user) =>
    user?.displayName || user?.email?.split("@")[0] || "User";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "h-20 md:h-24 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800"
            : "h-24 md:h-28 bg-gray-900/80 backdrop-blur-sm"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${activeColorClass} opacity-50 transition-all duration-1000`}
        />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 text-white font-bold min-w-0 flex-shrink-0 group"
              onClick={() => setMenuOpen(false)}
            >
              <div className="relative">                
                <img
                  src={Logo}
                  alt="Climate Echoes Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="hidden sm:inline-block text-lg font-semibold tracking-wide">
                Climate Echoes
              </span>
            </Link>

            {/* Desktop Nav (xl only ✅) */}
            <div className="hidden xl:flex items-center justify-center flex-1 max-w-5xl mx-6">
              <ul className="flex flex-wrap items-center gap-2">
                {links.map((item) => (
                  <li key={item.name} className="flex-shrink-0">
                    {item.name === "ENSO Relations" ? (
                      <ENSODropdown
                        isActive={activeLink === "ENSO Relations"}
                        phaseColor={solidActiveColorClass}
                      />
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                          activeLink === item.name
                            ? `${solidActiveColorClass} text-white font-semibold shadow-md`
                            : "text-gray-200 hover:text-white hover:bg-gray-800/60"
                        }`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Auth (xl only ✅) */}
            <div className="hidden xl:flex items-center space-x-3">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-800/50 rounded-lg border border-gray-600/30">
                    <img
                      src={
                        user.photoURL ||
                        `https://via.placeholder.com/32/4F46E5/FFFFFF?text=${getInitials(
                          user
                        )}`
                      }
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white text-sm font-medium truncate max-w-[100px]">
                      {getUserDisplayName(user)}
                    </span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${solidActiveColorClass} text-white hover:opacity-90`}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium ${solidActiveColorClass} text-white hover:opacity-90`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={handleGoogleSignIn}
                    className="px-3 py-2 bg-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/20 flex items-center space-x-1"
                  >
                    <span>Google</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile / Laptop Menu Button (up to xl ✅) */}
            <button
              className="xl:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-all duration-300 relative"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X size={26} className="text-white" />
              ) : (
                <Menu size={26} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Laptop Drawer (unchanged ✅) */}
      {menuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-16 z-[1000] bg-gray-900"
          id="mobile-menu"
        >
          <div className="relative z-[1001] container mx-auto px-4 py-6 h-[calc(100vh-64px)] overflow-y-auto">
            {user && (
              <div className="mb-6 px-4 py-4 bg-gray-800 rounded-xl border border-gray-600">
                <div className="flex items-center">
                  <img
                    src={
                      user.photoURL ||
                      `https://via.placeholder.com/40/4F46E5/FFFFFF?text=${getInitials(
                        user
                      )}`
                    }
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30 mr-3"
                  />
                  <div>
                    <p className="text-white font-semibold">
                      {getUserDisplayName(user)}
                    </p>
                    <p className="text-gray-300 text-sm">{user.email}</p>
                  </div>
                </div>
              </div>
            )}
            <ul className="grid grid-cols-1 gap-2">
              {links.map((item) => (
                <li key={item.name}>
                  {item.name === "ENSO Relations" ? (
                    <div className="px-2 py-2">
                      <ENSODropdown
                        isActive={activeLink === "ENSO Relations"}
                        phaseColor={solidActiveColorClass}
                        onSelect={() => setMenuOpen(false)}
                      />
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => {
                        setActiveLink(item.name);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center px-4 py-4 rounded-xl text-white text-lg font-medium transition-all duration-300 ${
                        activeLink === item.name
                          ? `${solidActiveColorClass} text-white font-bold shadow-xl`
                          : "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                      }`}
                    >
                      <span className="mr-3 text-xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 px-2">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="w-full py-4 px-4 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all duration-300 border border-red-600 flex items-center justify-center gap-2"
                >
                  Sign Out
                </button>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className="w-full py-4 px-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 border border-gray-300 flex items-center justify-center gap-2"
                  >
                    Sign In with Google
                  </button>
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setMenuOpen(false);
                    }}
                    className="w-full py-4 px-4 bg-blue-500 text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 border border-blue-600 flex items-center justify-center gap-2"
                  >
                    Sign In with Email
                  </button>
                </div>
              )}
            </div>
            <div className="mt-6 px-2">
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 px-4 bg-gray-700 text-white rounded-xl font-bold hover:bg-gray-600 transition-all duration-300 border border-gray-600 flex items-center justify-center gap-2"
              >
                <X size={20} />
                Close Menu
              </button>
            </div>
            <div className="mt-6 px-4 text-center">
              <p className="text-gray-400 text-sm">
                Climate Echoes • NASA Terra Data 2000-2025
              </p>
            </div>
          </div>
        </div>
      )}

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </>
  );
};

export default Navbar;
