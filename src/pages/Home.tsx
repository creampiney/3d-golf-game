import React from 'react';
import { Link } from 'react-router-dom';
import './page.css'
const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-8 justify-center items-center bg-slate-900 text-slate-100">
      <div>
        <h1>Welcome to Golf Game</h1>
      </div>
      <div className="flex gap-5">
        {
          [1, 2].map((level) => (
            <Link to={`/game${level}`} className="w-20 h-20 flex flex-col justify-center items-center border border-slate-500 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all">
              <img src="/flag.png" className="w-9 h-9" />
              <div>Level {level}</div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
