import React from "react";
// Import images
import sifatImg from "../assets/sifat.jpg";
import anikaImg from "../assets/anika.jpg";
import shahidurImg from "../assets/shahidur (1).jpg";
import rumanaImg from "../assets/rumana.jpg";
const teamMembers = [
  {
    name: "G.M. Sifat Iqbal",
    role: "Data Scientist & Researcher",
    photoUrl: sifatImg,
    bio: `Sifat is a data scientist with expertise in satellite data processing and climate 
    modeling. He focuses on turning raw datasets into actionable insights, ensuring the 
    Climate Echoes platform remains scientifically rigorous and accessible. His work helps 
    bridge the gap between global climate drivers and local realities.`,
    email: "gaziiqbal001@gmail.com",
  },
  {
    name: "Anika Tabassum",
    role: "Frontend Developer & Researcher",
    photoUrl: anikaImg,
    bio: `Anika is a frontend developer and researcher with expertise in the MERN stack, Python, C, and C++. With a degree in Computer Science and Engineering (CSE) and currently pursuing an MBA, Anika combines technical skills with strategic thinking.

Recently, Anika published a research paper on depression detection, showcasing a commitment to applying technology to real-world challenges. At Climate Echoes, Anika focuses on building interactive user experiences and ensuring that complex climate data is transformed into accessible, engaging, and actionable insights for communities and decision-makers.`,
    email: "at621504@gmail.com",
  },
  {
    name: "Shahidur Rahman Shakib",
    role: "Researcher & Designer",
    photoUrl: shahidurImg,
    bio: `Shahidur Rahman Shakib is a Computer Science and Engineering (CSE) student at Metropolitan University, a researcher, designer, web developer, and competitive programmer. Shahidur has skills in WordPress, Python, C, and C++, and has published research on Mixed Proportional Representation in Bangladesh and currenty working on AI-powered deforestation tracking via satellite, demonstrating his commitment to applying research and technology for social and environmental impact. Passionate about innovation and development, Shahidur strives to create meaningful solutions that bridge research and technology with real-world applications. At Climate Echoes, Shahidur focuses on creating interactive digital solutions that make intricate climate information accessible, engaging, and useful for informed decision-making.`,
    email: "shahidurrahmanshakib15@gmail.com",
  },
  {
    name: "Rumana Akter",
    role: "Multimedia Editor",
    photoUrl: rumanaImg,
    bio: `Rumana is a  multimedia editor with a strong academic foundation in Electrical and Electronic Engineering (EEE). Her engineering background provides a unique, analytical lens through which she approaches multimedia projects, ensuring precision and a structured methodology. She possesses strong English communication skills, which she effectively leverages to create clear, impactful narratives and deliver engaging,presentations.`,
    email: "rumanaaaa.210@gmail.com",
  }
];

const TeamContact = () => {
  return (
    <div id="team" className="min-h-screen  bg-black py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-16 h-16 bg-amber-500 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-cyan-500 rounded-full blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-emerald-500 rounded-full blur-xl" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 via-green-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto">
            The passionate individuals behind Climate Echoes, bridging technology and climate science
          </p>
        </div>
        
        {/* Team Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl backdrop-blur-sm border ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-amber-900/10 to-transparent border-amber-500/20' 
                  : 'bg-gradient-to-r from-cyan-900/10 to-transparent border-cyan-500/20'
              } hover:border-opacity-50 transition-all duration-300`}
            >
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover border-2 border-green-500/30 shadow-lg"
                  />
                  <div className={`absolute inset-0 rounded-full border-2 ${
                    index % 2 === 0 ? 'border-amber-500/40' : 'border-cyan-500/40'
                  } animate-ping-slow -z-10`} />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className={`text-lg font-semibold mb-4 ${
                  index % 2 === 0 ? 'text-amber-400' : 'text-cyan-400'
                }`}>
                  {member.role}
                </p>
                <p className="text-green-200 text-justify leading-relaxed mb-6">{member.bio}</p>
                
                {/* Email - Very Visible */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="text-2xl">📩</span>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-lg font-mono text-green-400 hover:text-green-300 underline hover:no-underline transition-all duration-200 bg-green-900/30 px-4 py-2 rounded-lg border border-green-500/30"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center border-t border-green-500/20 pt-16">
          <h3 className="text-3xl font-bold text-white mb-4">Get In Touch</h3>
          <p className="text-xl text-green-300 mb-8 max-w-2xl mx-auto">
            For collaborations, partnerships, research inquiries, or to learn more about our work
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:team.climate.echoes@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              <span className="text-2xl">📩</span>
              team.climate.echoes@gmail.com
            </a>
            
            <div className="text-green-400 font-mono text-sm">
              OR CONTACT INDIVIDUAL TEAM MEMBERS ABOVE
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-green-300">
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-green-500/20">
              <h4 className="font-bold text-white mb-2">Research Collaborations</h4>
              <p className="text-sm">Partner with us on climate data analysis and visualization projects</p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-amber-500/20">
              <h4 className="font-bold text-white mb-2">Technical Partnerships</h4>
              <p className="text-sm">Integrate our data and tools into your platforms and applications</p>
            </div>
            <div className="bg-gray-900/50 rounded-2xl p-6 border border-cyan-500/20">
              <h4 className="font-bold text-white mb-2">Educational Outreach</h4>
              <p className="text-sm">Use our platform for educational purposes and climate awareness</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;