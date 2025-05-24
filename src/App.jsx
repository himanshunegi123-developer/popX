import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/create-account" element={<Page2 />} />
        <Route path="/login" element={<Page3 />} />
        <Route path="/dashboard" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;

