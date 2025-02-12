"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AI Expert. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="https://www.tiktok.com/@arainzadaa04?_t=ZS-8teo8ElHaqu&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              TikTok
            </Link>
            <Link
              href="https://github.com/Qamarzaman736"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              GitHub
            </Link>
            <Link
              href="https://vercel.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Vercel
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
