import React from "react";

const teamMembers = [
  {
    name: "G.M. Sifat Iqbal",
    role: "Data Scientist & Researcher",
    photoUrl: "/images/sifat.jpg",
    bio: `Sifat is a data scientist with expertise in satellite data processing and climate 
    modeling. He focuses on turning raw datasets into actionable insights, ensuring the 
    Climate Echoes platform remains scientifically rigorous and accessible. His work helps 
    bridge the gap between global climate drivers and local realities.`,
    email: "gaziiqbal001@gmail.com",
  },
  {
    name: "Anika Tabassum",
    role: "Frontend Developer & Researcher",
    photoUrl: "/images/anika.jpg",
    bio: `Anika is a frontend developer and researcher with expertise in the MERN stack, Python, C, and C++. With a degree in Computer Science and Engineering (CSE) and currently pursuing an MBA, Anika combines technical skills with strategic thinking.

Recently, Anika published a research paper on depression detection, showcasing a commitment to applying technology to real-world challenges. At Climate Echoes, Anika focuses on building interactive user experiences and ensuring that complex climate data is transformed into accessible, engaging, and actionable insights for communities and decision-makers.`,
    email: "at621504@gmail.com",
  },
  {
    name: "Shahidur Rahman Shakib",
    role: "Researcher & Designer",
    photoUrl: "/images/shahidur.jpg",
    bio: `Shahidur Rahman Shakib is a Computer Science and Engineering (CSE) student at Metropolitan University, a researcher, designer, web developer, and competitive programmer. Shahidur has skills in WordPress, Python, C, and C++, and has published research on Mixed Proportional Representation in Bangladesh and currenty working on AI-powered deforestation tracking via satellite, demonstrating his commitment to applying research and technology for social and environmental impact. Passionate about innovation and development, Shahidur strives to create meaningful solutions that bridge research and technology with real-world applications. At Climate Echoes, Shahidur focuses on creating interactive digital solutions that make intricate climate information accessible, engaging, and useful for informed decision-making.`,
    email: "shahidurrahmanshakib15@gmail.com",
  },
  {
    name: "Rumana Akter",
    role: "Multimedia Editor",
    photoUrl: "/images/rumana.jpg",
    bio: `Rumana is a  multimedia editor with a strong academic foundation in Electrical and Electronic Engineering (EEE). Her engineering background provides a unique, analytical lens through which she approaches multimedia projects, ensuring precision and a structured methodology. She possesses strong English communication skills, which she effectively leverages to create clear, impactful narratives and deliver engaging,presentations.`,
    email: "rumanaaaa.210@gmail.com",
  }
];

const TeamContact = () => {
  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-12">
          Meet the Team
        </h2>
        
        <div className="divide-y divide-gray-200">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`flex flex-col md:flex-row items-center md:items-start gap-8 py-12 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Photo */}
              <img 
                src={member.photoUrl} 
                alt={member.name} 
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />

              {/* Info */}
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
                <p className="mt-4 text-gray-700 leading-relaxed">{member.bio}</p>
                <a 
                  href={`mailto:${member.email}`} 
                  className="mt-4 inline-block text-green-700 hover:underline"
                >
                  📩 {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-bold text-gray-800">Contact Us</h3>
          <p className="mt-2 text-gray-600">
            For collaborations, partnerships, or inquiries:
          </p>
          <a
            href="mailto:team.climate.echoes@example.com"
            className="mt-4 inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            📩 team.climate.echoes@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;
