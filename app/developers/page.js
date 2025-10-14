"use client"
import Link from "next/link";

export default function Developers() {
  const devs = [
    {
      name: "Roopesh",
      role: "Lead Developer & Game Designer",
      img: "/roppesh.png", // optional developer image
      description: "Main and lead developer, responsible for game mechanics and core features."
    },
    {
      name: "Nikunj",
      role: "Web Developer",
      img: "/nikunj.png", // optional developer image
      description: "Handled the website, landing page, and deployment of Flappy Floppy."
    },
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

      <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg mb-12">
        Meet the Developers
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-5xl w-full">
        {devs.map((dev, idx) => (
          <div key={idx} className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md rounded-xl p-6 shadow-lg flex flex-col items-center transition transform hover:scale-105 w-72">
            <img
              src={dev.img}
              alt={dev.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{dev.name}</h2>
            <p className="text-yellow-400 font-semibold">{dev.role}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{dev.description}</p>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105"
      >
        Back to Home
      </Link>

      {/* Bouncing Birds */}
      {["10%", "35%", "60%", "85%"].map((left, idx) => (
        <img
          key={idx}
          src="/bird.png"
          alt="bird"
          className={`absolute animate-bounceSlow w-16`}
          style={{ left: left, bottom: "5%", animationDelay: `${idx * 0.5}s` }}
        />
      ))}
    </div>
  );
}
