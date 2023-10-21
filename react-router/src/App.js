import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';



function App() {
  return (
    <div className="App">
      <h2>Routes function</h2>
      <Routes>
        <Route path='/home' element={<Home></Home>} />
        <Route path='/friends' element={<Friends></Friends>} />
      </Routes>
    </div>
  );
}

export default App;
