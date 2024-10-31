import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from '/Users/aditirai/Desktop/portfolio/portfolio/src/components/Layout'
import Home from '/Users/aditirai/Desktop/portfolio/portfolio/src/components/Homepage'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
