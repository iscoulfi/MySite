import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/MyPages/Home';
import AboutMe from './components/MyPages/AboutMe';
import Skills from './components/MyPages/Skills';
import Contacts from './components/MyPages/Contacts';
import MainLayout from './layouts/MainLayout';
import FalsePath from './components/FalsePath';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<FalsePath />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
