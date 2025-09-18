import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Service';
import FAQ from './components/FAQ';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="px-6 md:px-16 lg:px-32">
          <About />
          <Services />
          <FAQ />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
