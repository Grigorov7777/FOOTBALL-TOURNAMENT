// src/App.js

import React from 'react';
import './assets/styles/App.css'; // Path should be relative to `src/`


  // This path should match the actual file location

import Header from './components/Header';  
import HomePage from './components/HomePage';
import Footer from './components/Footer';  

function App() {
  return (
    <div className="app-container">
       <Header />  {/* Include the Header component */}
      <HomePage />
      <Footer />  {}
    </div>
  );
}

export default App;
