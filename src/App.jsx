import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import HomePage from './pages/HomePage';
import GMC001Page from './pages/GMC001Page';
import SuperFootMidiPage from './pages/SuperFootMidiPage';
import ManualPage from './pages/ManualPage';
import SuperFootAppPage from './pages/SuperFootAppPage';
import ScrollToHash from './components/ScrollToHash';

import { translations as defaultTranslations } from './i18n/translations';
import { translations as gmcTranslations } from './i18n/translations-gmc';
import { translations as sfTranslations } from './i18n/translations-sf';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<LanguageProvider dictionary={defaultTranslations}><HomePage /></LanguageProvider>} />
        <Route path="/gmc-001" element={<LanguageProvider dictionary={gmcTranslations}><GMC001Page /></LanguageProvider>} />
        <Route path="/superfoot" element={<LanguageProvider dictionary={sfTranslations}><SuperFootMidiPage /></LanguageProvider>} />
        <Route path="/superfoot/manual" element={<ManualPage />} />
        <Route path="/superfoot/app" element={<SuperFootAppPage />} />
      </Routes>
    </Router>
  );
}

export default App;