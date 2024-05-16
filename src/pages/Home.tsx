import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './page.css'
import SoundToggler from '../components/SoundToggler';
import { useSettingsStore } from '../states/settings';

const Home: React.FC = () => {

  const [allowSound] = useSettingsStore((state) => [
    state.allowSound,
  ])

  const audio = useRef<HTMLAudioElement>(new Audio('/sounds/entrance_kirby.mp3'))


  function playAudio() {
    if (!audio.current) return
    const handleEnded = () => {
      if (!audio.current) return
      audio.current.currentTime = 0; // Reset the audio to the start position
      audio.current.play(); // Replay the audio
    };

    audio.current.addEventListener('ended', handleEnded);
    audio.current.play();
  }

  function stopAudio() {
    if (!audio.current) return
    audio.current.pause();
    audio.current.currentTime = 0; // Reset audio to start position
  }

  useEffect(() => {
    if (allowSound) {
      playAudio()
    }
    return () => {
      stopAudio()
    };
  }, []);

  useEffect(() => {
    if (allowSound) {
      playAudio()
    }
    else {
      stopAudio()
    }
  }, [allowSound])


  return (
    <div className="relative w-screen h-screen flex flex-col gap-8 justify-center items-center bg-slate-900 text-slate-100">
      <div>
        <h1>Welcome to Golf Game</h1>
      </div>
      <div className="flex gap-5">
        {
          [1, 2, 3].map((level) => (
            <Link to={`/game${level}`} className="w-20 h-20 flex flex-col justify-center items-center border border-slate-500 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all">
              <img src="/flag.png" className="w-9 h-9" />
              <div>Level {level}</div>
            </Link>
          ))
        }
      </div>
      <div className="absolute top-2 right-2">
        <SoundToggler />
      </div>
    </div>
  );
};

export default Home;
