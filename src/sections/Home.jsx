import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white pt-20">
      <h2 className="text-4xl font-bold text-green-700 mb-6">
        Climate Echoes: Visualizing Global Climate Teleconnections
      </h2>
      <p className="max-w-3xl text-center text-lg text-gray-700">
        Welcome to Climate Echoes — an interactive platform that reveals how 
        global climate drivers such as El Niño and La Niña connect to local 
        impacts like floods, droughts, and heat in Bangladesh.
      </p>
    </div>
  );
};

export default Home;
