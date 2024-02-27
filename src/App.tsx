import './App.css';
import SideBar from './cmps/SideBar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyProjects from './views/MyProjects';
import SharedProjects from './views/SharedProjects';
import AllProjects from './views/AllProjects';
import ProjectDetails from './views/ProjectDetails';

function App() {
  return (
    <section className='flex'>
      <SideBar />
      <Routes>
        <Route path="/myprojects" element={<MyProjects />} />
        <Route path="/sharedprojects" element={<SharedProjects />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/*" element={<Navigate to="/myprojects" />} />
      </Routes>
    </section>
  );
}

export default App;