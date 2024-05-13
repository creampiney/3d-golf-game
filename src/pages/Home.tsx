import React from 'react';
import { Link } from 'react-router-dom';
import './page.css'
const Home: React.FC = () => {
  return (
    <div>
      <div className="container">
        <h1>Welcome to the Game</h1>
      </div>
      <div className="block">
        <Link to="/game1">Start Game</Link>
      </div>
    </div>
  );
};

export default Home;
