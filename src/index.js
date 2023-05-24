import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './pages/home/details/pokemon-details';
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="pokemon/:id" element={<Details />}></Route>
    </Routes>

  </Router>
);

reportWebVitals();
