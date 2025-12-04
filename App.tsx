import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import InvestmentGoals from './components/InvestmentGoals';
import Services from './components/Services';
import Calculators from './components/Calculators';
import AIAdviser from './components/AIAdviser';
import TopFunds from './components/TopFunds';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <InvestmentGoals />
        <AIAdviser />
        <Services />
        <Calculators />
        <TopFunds />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      
      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/917206770673"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
        aria-label="Chat on WhatsApp"
        style={{ animationDuration: '3s' }}
      >
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="fill-current"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};

export default App;
