"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import type React from "react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-10 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${scrolled ? "text-blue-600" : "text-white"}`}>
          Amir Nazeer
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="#home" scrolled={scrolled}>
            Home
          </NavLink>
          <NavLink href="#about" scrolled={scrolled}>
            About
          </NavLink>
          <NavLink href="#projects" scrolled={scrolled}>
            Projects
          </NavLink>
          <NavLink href="#skills" scrolled={scrolled}>
            Skills
          </NavLink>
          <NavLink href="#contact" scrolled={scrolled}>
            Contact
          </NavLink>
        </div>
        <button className="md:hidden text-blue-600" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <NavLink href="#home" onClick={() => setIsOpen(false)} scrolled={true}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={() => setIsOpen(false)} scrolled={true}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsOpen(false)} scrolled={true}>
              Projects
            </NavLink>
            <NavLink href="#skills" onClick={() => setIsOpen(false)} scrolled={true}>
              Skills
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)} scrolled={true}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

const NavLink = ({
  href,
  children,
  onClick,
  scrolled,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  scrolled: boolean
}) => (
  <Link
    href={href}
    className={`text-lg font-medium hover:text-blue-600 transition-colors duration-200 ${
      scrolled ? "text-gray-800" : "text-white"
    }`}
    onClick={onClick}
  >
    {children}
  </Link>
)

export default Header

