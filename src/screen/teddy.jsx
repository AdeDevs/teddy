import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Confetti from "react-confetti";

export default function Teddy() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Handle window resize for responsiveness
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    // Trigger confetti after 1 second
    const timer = setTimeout(() => setShowConfetti(true), 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mo-home">
      {/* 🎊 Confetti with 1s delay */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={250}
          recycle={false}
          gravity={0.15}
          colors={["#f472b6", "#c084fc", "#ffffff"]}
        />
      )}

      <header>
        <nav>
          <h1>
            <NavLink to="/">Congratulationns Teddy 🧸</NavLink>
          </h1>
          <ul>
            <li>
              <NavLink to="/message">A Little Message</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div>
          <h1>Congratulations Theodora</h1>
        </div>
      </main>
    </div>
  );
}
