"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-600 to-blue-800 text-white"
    >
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">AI Expert & Data Scientist</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">Transforming data into intelligent solutions</p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors duration-200 inline-block"
          >
            Get in Touch
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image src="/q.jpg" alt="AI Expert" width={400} height={400} className="rounded-full shadow-lg" />
        </motion.div>
      </div>
    </section>
  )
}

export default HomeSection

