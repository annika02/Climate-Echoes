import React from "react";
import logo from "../assets/icon.jpg"
const Navbar = () => {
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

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo with text */}
        <div className="flex items-center space-x-2">
          <img 
            src={logo} 
            alt="Climate Echoes Logo"
            className="h-8 w-8" 
          />
          <h1 className="text-xl font-bold text-green-700">Climate Echoes</h1>
        </div>
        
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-green-700 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;