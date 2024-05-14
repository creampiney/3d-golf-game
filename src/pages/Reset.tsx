import React from 'react';
import { Link } from 'react-router-dom';

const Reset: React.FC = () => {
  return (
    <div>
        <div className="container">
            <h1>🎉 Congratulation 🎉</h1>
        </div>
        <div className="block">
            <Link to="/">Go back to Home</Link>
        </div>
    </div>
  );
};

export default Reset;