"use client"
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function HowToPlay() {
  const steps = [
    {
      title: "Install Java",
      description: "Make sure you have the latest version of Java installed on your system.",
    },
    {
      title: "Download the Game",
      description: "Download the FlappyBird.jar file from the homepage or GitHub.",
    },
    {
      title: "Open the Folder",
      description: "Locate the downloaded JAR file and open its folder in your file explorer.",
    },
    {
      title: "Navigate in CMD",
      description: "Open Command Prompt and navigate to the folder containing FlappyBird.jar.",
    },
    {
      title: "List JAR Contents",
      description: "Type the following command in CMD to view the contents:\n\njar tf FlappyBird.jar",
    },
  ];

  const birds = [
    { left: "10%", size: "w-16", delay: "0s" },
    { left: "30%", size: "w-12", delay: "0.5s" },
    { left: "60%", size: "w-20", delay: "1s" },
    { left: "80%", size: "w-16", delay: "1.5s" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen p-5 text-center overflow-hidden bg-gradient-to-b from-blue-200 via-blue-300 to-white dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 transition-colors">

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4
        bg-white/20 dark:bg-gray-900/20 backdrop-blur-md shadow-md z-50">
        <Link href="/"><div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Flappy Floppy
        </div></Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition">Home</Link>
          <Link href="/developers" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition">Developers</Link>
          <Link href="/how-to-play" className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 transition">How to Play</Link>
        </div>
      </nav>

      <div className="h-24"></div> {/* Spacer */}

      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-8">
        How to Play Flappy Floppy
      </h1>

      {/* Steps Section */}
      <div className="flex flex-col space-y-8 max-w-3xl w-full">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-lg transform transition hover:scale-105"
          >
            <div className="text-3xl text-yellow-400 mr-4 mb-2 md:mb-0">
              <MdArrowForward />
            </div>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">{step.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="mt-12 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>

      {/* Bouncing Birds */}
      {birds.map((bird, idx) => (
        <img
          key={idx}
          src="/bird.png"
          alt="bird"
          className={`absolute animate-bounceSlow ${bird.size}`}
          style={{ left: bird.left, bottom: "5%", animationDelay: bird.delay }}
        />
      ))}
    </div>
  );
}
