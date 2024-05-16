import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const Reset: React.FC = () => {

  const stroke = localStorage.getItem("stroke") ? localStorage.getItem("stroke") : "0"


  useEffect(() => {
    const audio = new Audio('/sounds/congrutulation.mp3');
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
            <span className="font-bold text-xl text-slate-100">Stroke: {stroke}</span>
        </div>
        <div>
            <Link to="/">Go back to Home</Link>
        </div>
    </div>
  );
};

export default Reset;