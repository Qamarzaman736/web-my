"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "custom GPT",
    description:
      "Developed a deep learning model for real-time object detection and classification in images and video streams.",
    link: "https://github.com/yourusername/image-recognition",
    image: "/g.png",
  },
  {
    title: "Next.js develpor",
    description:
      "Created an intelligent chatbot using NLP techniques to understand and respond to user queries in multiple languages.",
    link: "https://github.com/yourusername/nlp-chatbot",
    image: "/n.webp",
  },
  {
    title: "web Development",
    description:
      "Implemented machine learning algorithms to predict stock prices and market trends with high accuracy.",
    link: "https://github.com/yourusername/finance-predictor",
    image: "/w.jpeg",
  },
  {
    title: "Digital Marketing",
    description:
      "Developed an AI system for autonomous drone navigation using computer vision and reinforcement learning.",
    link: "https://github.com/yourusername/drone-navigation",
    image: "/d.jpeg",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-block mt-2"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

