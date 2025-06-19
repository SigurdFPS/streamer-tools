import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarDemo } from './components/NavBar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <NavbarDemo />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}