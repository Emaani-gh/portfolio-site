import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home';
import { MobileNav } from './Component/MobileNav';
import Resume from './Component/Resume';
import Portfolio from './Component/Portfolio';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className="main-container">
    <MobileNav />
        <Routes>
          {/* <Route exact path='/' element={<MobileNav />}/> */}
          <Route path='/' element={<Home />}/>
          <Route exact path='/about' element={<Home />}/>
          <Route path='/resume' element={<Resume />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
      </div>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
