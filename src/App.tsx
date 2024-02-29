import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MenuPage from './components/MenuPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router basename="/grandeur">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
}

export default App;