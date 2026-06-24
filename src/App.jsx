import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// Layouts
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { FloatingCall } from './layouts/FloatingCall';
import { FloatingWhatsApp } from './layouts/FloatingWhatsApp';

// Sections
import { Hero } from './sections/Hero';
import { BusinessHighlights } from './sections/BusinessHighlights';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Products } from './sections/Products';
import { EmergencyCTA } from './sections/EmergencyCTA';
import { Gallery } from './sections/Gallery';
import { Reviews } from './sections/Reviews';
import { FAQ } from './sections/FAQ';
import { Location } from './sections/Location';
import { Contact } from './sections/Contact';

function App() {
  return (
    <HelmetProvider>
      <div className="font-sans text-gray-900 selection:bg-medical-blue selection:text-white">
        <Helmet>
          <title>Jijau Medical And General Store | Trusted Local Pharmacy</title>
          <meta name="description" content="Trusted medical store providing genuine medicines, healthcare products, baby care, and daily essentials. Fast service and authentic products." />
          <meta name="keywords" content="Medical Store, Pharmacy, General Store, Healthcare Products, Medicines, Daily Essentials" />
          <meta property="og:title" content="Jijau Medical And General Store" />
          <meta property="og:description" content="Your trusted local medical and general store providing genuine medicines and daily essentials." />
          <meta property="og:type" content="website" />
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <BusinessHighlights />
          <About />
          <Services />
          <Products />
          <EmergencyCTA />
          <Gallery />
          <Reviews />
          <FAQ />
          <Location />
          <Contact />
        </main>

        <Footer />
        
        {/* Floating Actions */}
        <FloatingCall />
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;
