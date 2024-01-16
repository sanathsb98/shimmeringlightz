import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' Component={Home}/>
  </Routes>
<Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
