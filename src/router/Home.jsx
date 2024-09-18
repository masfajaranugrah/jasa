import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../screens/Landing';
import About from '../screens/About';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/tentang-kami" element={<About />} />
      </Routes>
    </Router>
  );
}

export default Home;
