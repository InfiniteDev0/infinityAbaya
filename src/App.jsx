import React from 'react'
import {Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Login from './Pages/Login';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App
