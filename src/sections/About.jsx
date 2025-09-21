import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-20 px-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">About Climate Echoes</h2>
      <p className="max-w-4xl text-lg text-gray-700 text-center leading-relaxed">
        Bangladesh is among the most climate-vulnerable nations in the world.  
        Its floods, droughts, and storms are not just isolated events — they are often 
        linked to **global teleconnections** such as the El Niño–Southern Oscillation (ENSO).  
      </p>

      <p className="max-w-4xl text-lg text-gray-700 text-center leading-relaxed mt-6">
        <span className="font-semibold">Climate Echoes</span> is an interactive platform powered by 
        NASA’s Terra satellite data. Our goal is to transform complex datasets into engaging 
        **visual stories**, so communities and decision-makers can understand how far-off 
        climate drivers affect their local realities.
      </p>
    </div>
  );
};

export default About;
