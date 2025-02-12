"use client"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
           HI! I am Qamar ul zaman a passionate AI expert and data scientist with over 5 years of experience in developing cutting-edge
            machine learning solutions. My expertise spans across various domains of AI, including natural language
            processing, computer vision, and deep learning.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With a strong foundation in Python and proficiency in frameworks like TensorFlow and PyTorch, I've
            successfully delivered projects that have made significant impacts in industries ranging from healthcare to
            finance.
          </p>
          <p className="text-lg text-gray-600">
            My goal is to leverage the power of AI to solve complex real-world problems and drive innovation in
            technology.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

