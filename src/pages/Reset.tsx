import React from 'react';
import { Link } from 'react-router-dom';

const Reset: React.FC = () => {
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