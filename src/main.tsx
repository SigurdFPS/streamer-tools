import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./App";
import Home from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";
import App1 from "./pages/apps/App1";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="apps/app1" element={<App1 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);