// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Projects />} />          
        <Route path="/projects/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
