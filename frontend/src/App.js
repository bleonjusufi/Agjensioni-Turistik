import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'
import Offers from './Components/Pages/Offers'
import Blog from './Components/Pages/Blog'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Signup from './Components/Pages/Signup'
import Login from './Components/Pages/Login'
import NewYork from './Components/Pages/NewYork'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/offers' element = {<Offers />} />
          <Route path='/blog' element = {<Blog />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/signup' element = {<Signup />} />
          <Route path='/NewYork' element = {<NewYork />} />
          <Route path='/login' element = {<Login />} / >
        </Routes>
      </Router>
    </>
  );
}

export default App;
