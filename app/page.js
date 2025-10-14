import { FaGithub } from "react-icons/fa";

export default function HomePage() {
  const clouds = [
    { top: "10%", w: "w-32", delay: "0s", duration: "25s" },
    { top: "25%", w: "w-48", delay: "10s", duration: "35s" },
    { top: "50%", w: "w-40", delay: "5s", duration: "30s" },
  ];

  const birds = [
    { left: "10%", size: "w-16", delay: "0s" },
    { left: "30%", size: "w-12", delay: "1s" },
    { left: "60%", size: "w-20", delay: "2s" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-5 text-center overflow-hidden">
      
      {/* Floating Clouds */}
      {clouds.map((cloud, idx) => (
        <img
          key={idx}
          src="/cloud.png"
          alt="cloud"
          className={`absolute animate-floatCloud ${cloud.w} opacity-60`}
          style={{
            top: cloud.top,
            animationDelay: cloud.delay,
            animationDuration: cloud.duration,
          }}
        />
      ))}

      {/* Title */}
      <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-3">
        Flappy Floppy!
      </h1>

      <p className="mt-4 text-xl text-gray-800 max-w-xl drop-shadow-md">
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
