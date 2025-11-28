// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails"
import Page404 from "./pages/404";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FadeScreen from "./components/FadeScreen";

function App() {
  return (
     <Router>
      <FadeScreen/>
      <Routes>
        <Route path="/404" element={<Page404/>} />
        <Route path="/" element={<Home />} />   
        <Route path="/Projects" element={<Projects />} />          
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />   
        <Route path="/terms" element={<Terms />} />   
        <Route path="/privacy" element={<Privacy />} />   
        <Route path="/blog" element={<Blog />} />          
        <Route path="/blog/:slug" element={<BlogDetails/>} />
      </Routes>  
    </Router>
  
  

  );
}

export default App;
