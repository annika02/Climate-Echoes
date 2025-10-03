import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          {/* Copyright */}
          <div className="text-sm text-white/60 font-light">
            © {currentYear} Climate Echoes. All rights reserved.
          </div>
          
          {/* Developer credit */}
          <div className="text-xs text-white/40">
            Developed by Anika Tabassum.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;