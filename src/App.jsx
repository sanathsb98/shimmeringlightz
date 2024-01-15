import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' Component={Home}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
