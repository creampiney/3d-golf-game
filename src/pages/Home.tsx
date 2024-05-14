import React from 'react';
import { Link } from 'react-router-dom';
import './page.css'
const Home: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center">
      <div>
        <h1>Welcome to Golf Game</h1>
      </div>
      <div>
        <Link to="/game1">Start Game</Link>
      </div>
    </div>
  );
};

export default Home;
