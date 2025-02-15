// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import AddCity from './components/AddCity';
import CityDetails from './components/CityDetails';
import './App.css'; // Navbar & layout styling

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-brand">Cities Application</div>
        <nav>
          <Link to="/" className="nav-link">Cities List</Link>
          <Link to="/add-city" className="nav-link">Add City</Link>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="container">
        <Routes>
          <Route path="/" element={<CitiesList />} />
          <Route path="/add-city" element={<AddCity />} />
          <Route path="/city/:cityId" element={<CityDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
