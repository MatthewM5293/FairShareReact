import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Expenses from './pages/Expenses.jsx';
import Budget from './pages/Budget.jsx';
import Stocks from './pages/Stocks.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/stocks" element={<Stocks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;