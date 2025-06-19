import React from "react";
import { NavbarDemo } from "./components/NavBar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative">
      <NavbarDemo />
      <main className="pt-20 px-4">
        <Outlet />
      </main>
    </div>
  );
}