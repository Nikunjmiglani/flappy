"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const birds = [
    { left: "5%", size: "w-12 sm:w-16", delay: "0s" },
    { left: "30%", size: "w-10 sm:w-12", delay: "0.5s" },
    { left: "55%", size: "w-16 sm:w-20", delay: "1s" },
    { left: "80%", size: "w-12 sm:w-16", delay: "1.5s" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-5 text-center overflow-hidden">

      {/* Hamburger Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 py-4 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-md z-50">
        <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 cursor-pointer">
          Flappy Floppy
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono text-base">
            About
          </Link>
          <Link href="/developers" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono text-base">
            Developers
          </Link>
          <Link href="/how-to-play" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono text-base">
            How to Play
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg transition-transform transform hover:scale-105"
          >
            {darkMode ? <MdOutlineDarkMode className="w-6 h-6" /> : <MdDarkMode className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white shadow-lg transition-transform transform hover:scale-105"
          >
            {darkMode ? <MdOutlineDarkMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 dark:text-gray-200 focus:outline-none">
            {menuOpen ? <HiX className="w-8 h-8" /> : <HiOutlineMenu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg flex flex-col p-4 gap-4 z-40 md:hidden">
          <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono">
            About
          </Link>
          <Link href="/developers" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono">
            Developers
          </Link>
          <Link href="/how-to-play" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono">
            How to Play
          </Link>
        </div>
      )}

      {/* Spacer */}
      <div className="h-24 sm:h-28"></div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-3">
        Flappy Floppy!
      </h1>

      <p className="mt-4 text-base sm:text-xl max-w-xl drop-shadow-md px-2 sm:px-0">
        Play Flappy Bird directly on your computer! Download it or check out the code on GitHub.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
        <a
          href="https://github.com/bitroop/flappyfloppy/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-gray-900 text-white rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105 text-sm sm:text-base"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>

        <a
          href="/FlappyBird.jar"
          download
          className="px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 animate-bounce transition-transform transform hover:scale-105 text-sm sm:text-base"
        >
          Download Game
        </a>
      </div>

      {/* Bouncing Birds */}
      {birds.map((bird, idx) => (
        <img
          key={idx}
          src="/bird.png"
          alt="bird"
          className={`absolute animate-bounceSlow ${bird.size}`}
          style={{ left: bird.left, bottom: "15%", animationDelay: bird.delay }}
        />
      ))}
    </div>
  );
}
