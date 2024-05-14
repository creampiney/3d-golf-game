import './App.css'
import Home from './pages/Home';
import Game1 from './pages/GameSkeleton'
import Reset from './pages/Reset';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import GameSkeleton from './pages/GameSkeleton';

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/game1" element={<GameSkeleton level={1}/>}/>
          <Route path="/reset" element={<Reset/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
