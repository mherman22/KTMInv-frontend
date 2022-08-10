import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Dashboard from './components/Dashboard/HomeDashboard.jsx';
import { BrowserRouter as BRouter, Routes, Route } from 'react-router-dom';
import Inventory from './components/pages/Inventory.jsx';
import About from './components/pages/About.jsx';
import Home from './components/pages/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register-user' element={<Register />} />
            <Route path='home-dashboard' element={<Dashboard />} />
            <Route path='inventory' element={<Inventory />} />
            <Route path='about' element={<About />} />
            <Route path='home' element={<Home />} />
        </Routes>
    </BRouter>
);

