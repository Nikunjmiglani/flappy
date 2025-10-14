"use client"
import Link from "next/link";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-5 text-center overflow-hidden
      bg-gradient-to-b from-blue-200 via-blue-300 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 py-4
        bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-md z-50">

        <Link href="/">
          <div className="text-2xl sm:text-3xl font-bold font-mono text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 cursor-pointer">
            Flappy Floppy
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono text-base">
            Home
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
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition transform hover:scale-105 font-mono">
            Home
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

      {/* Page Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-12">
        About Flappy Floppy
      </h1>

      {/* About Sections */}
      <div className="max-w-3xl w-full space-y-6">
        <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">What is Flappy Floppy?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Flappy Floppy is a fun, simple game inspired by Flappy Bird. The goal is to navigate
            the bird through obstacles while scoring as many points as possible. You can play
            it directly on your computer by downloading the JAR file!
          </p>
        </div>

        <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Why Flappy Floppy?</h2>
          <p className="text-gray-700 dark:text-gray-300">
            It’s designed to be lightweight, fun, and accessible. Perfect for casual gaming
            and for learning Java JAR deployment and simple game mechanics.
          </p>
        </div>
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="mt-12 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
