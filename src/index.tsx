import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import SideBar from './cmps/SideBar';
import Signup from './views/Signup'
import MyProjects from './views/MyProjects';
import SharedProjects from './views/SharedProjects';
import AllProjects from './views/AllProjects';
import ProjectDetails from './views/ProjectDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="myprojects" element={<MyProjects />} />
        <Route path="sharedprojects" element={<SharedProjects />} />
        <Route path="allprojects" element={<AllProjects />} />
        <Route path="project/:projectId" element={<ProjectDetails />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signup />} />
    </Routes>
  </Router>
);

reportWebVitals();
