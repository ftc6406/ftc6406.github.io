import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import JoinUs from './components/JoinUs';
import ContactUs from './components/ContactUs';
import Awards from './components/Awards';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Gallery />

    <Awards />
    <JoinUs />
    <ContactUs />
  </StrictMode>
);
