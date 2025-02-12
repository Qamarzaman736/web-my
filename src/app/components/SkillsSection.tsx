"use client"
import { motion } from "framer-motion"

const skills = [
  { name: "Python", level: 90 },
  { name: "TensorFlow", level: 85 },
  { name: "PyTorch", level: 80 },
  { name: "Natural Language Processing", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "Deep Learning", level: 85 },
  { name: "Machine Learning", level: 90 },
  { name: "Data Visualization", level: 75 },
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-2">
                <span className="text-lg font-semibold w-48">{skill.name}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <motion.div
                    className="bg-blue-600 h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
                <span className="ml-4 text-gray-600">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

