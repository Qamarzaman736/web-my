import Link from "next/link"
import { FaTiktok, FaGithub } from "react-icons/fa"
import { SiVercel } from "react-icons/si"
import type React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Expert. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <SocialLink href="https://www.tiktok.com/@arainzadaa04?_t=ZS-8teo8ElHaqu&_r=1" icon={FaTiktok} label="TikTok" />
            <SocialLink href="https://github.com/Qamarzaman736" icon={FaGithub} label="GitHub" />
            <SocialLink href="https://vercel.com/yourusername" icon={SiVercel} label="Vercel" />
          </div>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
  >
    <span className="sr-only">{label}</span>
    <Icon className="w-6 h-6" />
  </Link>
)

export default Footer

