import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Pages/Navigation';
import Home from './Pages/Home.jsx';
import About from './Pages/About';
import NoPage from './Pages/NoPage';
import Contact from './Pages/Contact.jsx';
import Projects from './Pages/Projects.jsx';
import ProjectDetails from './Pages/ProjectDetails.jsx';
import "./App.css" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projectsdetails/:id" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
