"use client";

const skills = [
  { name: "Python", level: 90 },
  { name: "TensorFlow", level: 85 },
  { name: "PyTorch", level: 80 },
  { name: "Natural Language Processing", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Deep Learning", level: 85 },
  { name: "Machine Learning", level: 90 },
  { name: "Data Visualization", level: 75 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="opacity-100 transform translate-x-0 transition-all duration-500">
              <div className="flex items-center mb-2">
                <span className="text-lg font-semibold w-48">{skill.name}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-blue-600 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-gray-600">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
