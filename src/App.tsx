import './App.css'
import Home from './pages/Home';
import Game1 from './pages/Game1'
import Reset from './pages/Reset';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';

function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/game1" element={<Game1/>}/>
          <Route path="/reset" element={<Reset/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App
