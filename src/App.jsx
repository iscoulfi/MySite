import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Home from './components/MyPages/Home';
import AboutMe from './components/MyPages/AboutMe';
import Skills from './components/MyPages/Skills';
import Contacts from './components/MyPages/Contacts';
import MainLayout from './layouts/MainLayout';
import FalsePath from './components/MyPages/FalsePath';

function App() {
  const [t, i18n] = useTranslation();
  const [classesList, setClassesList] = useState('en');

  const anotherLanguage = (language) => {
    i18n.changeLanguage(language);
    setClassesList(language);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout t={t} />}>
            <Route
              index
              element={
                <Home
                  changeLang={anotherLanguage}
                  classesList={classesList}
                  t={t}
                />
              }
            />
            <Route path="aboutme" element={<AboutMe t={t} />} />
            <Route path="skills" element={<Skills t={t} />} />
            <Route path="contacts" element={<Contacts t={t} />} />
            <Route path="*" element={<FalsePath t={t} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
