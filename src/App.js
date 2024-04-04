import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './Components/Nav';
import Home from './Components/Home';
import Video from './Components/Video';
import GrammarAnalyzer from './Components/GrammarAnalyzer';

import Session1 from './Components/Session1';
import Session2 from './Components/Session2';
import Session3 from './Components/Session3';
import Session4 from './Components/Session4';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Video/*' element={<Video />}>
          {/* Add a wildcard (*) to indicate that all nested routes start with '/Video' */}
          <Route path='' element={<Session1 />} />
          <Route path='Session2' element={<Session2 />} />
          <Route path='Session3' element={<Session3 />} />
          <Route path='Session4' element={<Session4 />} />
        </Route>
        <Route path='Grammar-Analyzer' element={<GrammarAnalyzer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
