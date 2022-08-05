import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Dashboard from './components/Dashboard/HomeDashboard.jsx';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register-user' element={<Register />} />
      <Route path='home-dashboard' element={<Dashboard />} />
    </Routes>
  </BRouter>
);

