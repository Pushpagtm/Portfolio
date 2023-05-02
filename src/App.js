import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home.js'
import About from './pages/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';


function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
         
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
