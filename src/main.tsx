// /MainApp/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import HomePage from './pages/index';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import LoadingScreen from './pages/LoadingScreen'; // <-- loading screen
import './pages/index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="loading" element={<LoadingScreen />} />
      </Route>
    </Routes>
  </HashRouter>
);