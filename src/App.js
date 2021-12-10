import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <div> 
      <BrowserRouter> 
        <NavBar />  
        <Routes>  
            <Route path='/user/dashboard' element={<Home />}/>
            <Route path='/user/library' element={<h1>Library</h1>}/>
            <Route path='/user/results' element={<h1>Results</h1>}/>
            <Route path='/user/routine' element={<h1>Routines</h1>}/>
            <Route path='/user/notices' element={<h1>Notices</h1>}/>
        </Routes> 
      </BrowserRouter>  
    </div>
  );
}

export default App;
