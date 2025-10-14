"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark/light mode
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const birds = [
    { left: "10%", size: "w-16", delay: "0s" },
    { left: "30%", size: "w-12", delay: "0.5s" },
    { left: "60%", size: "w-20", delay: "1s" },
    { left: "80%", size: "w-16", delay: "1.5s" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-5 text-center overflow-hidden">

      {/* Transparent Navbar */}
     <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 
  bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-md z-50">

        <div className="text-2xl transition-transform transform hover:scale-105 cursor-pointer font-bold font-mono text-gray-800 dark:text-gray-200">
          Flappy Floppy
        </div>

        <div className="flex items-center space-x-6">
          <Link href="/about" className="text-gray-80 transition-transform transform hover:scale-105 dark:text-gray-200 font-mono hover:text-yellow-400 transition">About</Link>
          <Link href="/developers" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 font-mono hover:text-yellow-400 ">Developers</Link>
          <Link href="/how-to-play" className="text-gray-800 dark:text-gray-200 transition-transform transform hover:scale-105 font-mono hover:text-yellow-400 ">How to Play</Link>

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition-transform transform hover:scale-105 cursor-pointer bg-gray-800 hover:bg-gray-700 text-white shadow-lg "
          >
            {darkMode ? <MdOutlineDarkMode className="w-6 h-6" /> : <MdDarkMode className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Spacer to avoid overlapping navbar */}
      <div className="h-24"></div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-3">
        Flappy Floppy!
      </h1>

      <p className="mt-4 text-xl max-w-xl drop-shadow-md">
        Play Flappy Bird directly on your computer! Download it or check out the code on GitHub.
      </p>

      {/* Buttons */}
      <div className="flex space-x-6 mt-6">
        <a
          href="https://github.com/bitroop/flappyfloppy/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-8 py-3 bg-gray-900 text-white rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>

        <a
          href="/FlappyBird.jar.url"
          download
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 animate-bounce transition-transform transform hover:scale-105"
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
          style={{ left: bird.left, bottom: "20%", animationDelay: bird.delay }}
        />
      ))}
    </div>
  );
}
