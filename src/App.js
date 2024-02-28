import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import './App.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage />} />
        <Route path="/MenuPage" element={<MenuPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
