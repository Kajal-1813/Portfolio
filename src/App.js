
import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/About" element = {<About />}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
      <Projects/>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}/>
        <Route path="/About" element = {<About />}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;