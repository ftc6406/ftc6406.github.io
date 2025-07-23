import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Gallery from './components/gallery';
import JoinUs from './components/join_us';
import ContactUs from './components/contact_us';
import Awards from './components/awards';



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
