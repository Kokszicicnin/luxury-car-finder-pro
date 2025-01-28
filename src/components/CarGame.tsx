import { useState, useEffect } from 'react';

const CarGame = () => {
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPosition((prev) => (prev + 5) % window.innerWidth);
      setScore((prev) => prev + 1);
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      setIsPlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-[400px] bg-gray-900 relative overflow-hidden my-12">
      <div className="absolute top-4 left-4 text-white z-10">
        Score: {score}
      </div>
      <div 
        className="absolute bottom-20 transition-transform"
        style={{ transform: `translateX(${position}px)` }}
      >
        <div className="w-20 h-10 bg-luxury-gold rounded-lg"></div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gray-800"></div>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h3 className="text-2xl mb-4">Car Mini Game</h3>
            <p>Press SPACE to start/pause</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarGame;