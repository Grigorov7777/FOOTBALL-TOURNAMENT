// src/routes.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';  // Import your components
import MatchesPage from './components/MatchesPage';
import TeamsPage from './components/TeamsPage';
import TeamDetails from './components/TeamDetails';
import MatchDetails from './components/MatchDetails';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NotFoundPage from './components/NotFoundPage';  // 404 page or default route

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/teams/:teamId" element={<TeamDetails />} />
        <Route path="/matches/:matchId" element={<MatchDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />  {/* Handle unknown routes */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
