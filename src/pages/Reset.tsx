import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Reset: React.FC = () => {
  useEffect(() => {
    const audio = new Audio('../../public/sounds/congrutulation.mp3');
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start position
    };
  }, []);
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center bg-slate-900 text-slate-100">
        <div>
            <h1>🎉 Congratulation 🎉</h1>
        </div>
        <div>
            <Link to="/">Go back to Home</Link>
        </div>
    </div>
  );
};

export default Reset;