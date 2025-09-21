import React, { useState } from "react";

const ENSO = () => {
  const [phase, setPhase] = useState("Average Winter");

  const images = {
    "Average Winter": "https://upload.wikimedia.org/wikipedia/commons/6/66/Normal_conditions_ENSO.png",
    "El Niño": "https://upload.wikimedia.org/wikipedia/commons/5/57/El_Nino_Conditions.png",
    "La Niña": "https://upload.wikimedia.org/wikipedia/commons/4/4e/La_Nina_Conditions.png",
  };

  const captions = {
    "Average Winter": "Balanced rainfall and circulation.",
    "El Niño": "Linked to droughts and heat stress in South Asia.",
    "La Niña": "Associated with heavy monsoon rainfall and flooding in Bangladesh.",
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-20">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">ENSO Correlation with Extreme Events</h2>
      <div className="flex space-x-4 mb-6">
        {Object.keys(images).map((key) => (
          <button
            key={key}
            onClick={() => setPhase(key)}
            className={`px-4 py-2 rounded-lg ${
              phase === key ? "bg-green-600 text-white" : "bg-gray-200"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
      <img src={images[phase]} alt={phase} className="max-w-xl rounded-lg shadow-md" />
      <p className="mt-4 text-gray-700 italic">{captions[phase]}</p>
    </div>
  );
};

export default ENSO;
