import React from "react";
import "./App.css";
import Profile from "./views/ProfileView";
import Translation from "./views/TranslationView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Login />} />
            <Route path="TranslationView" element={<Translation />} />
            <Route path="ProfileView" element={<Profile />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
