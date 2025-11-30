import React, { useState } from 'react';
import { Menu, X, UserPlus, TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Calculators', href: '#calculators' },
    { name: 'Top Funds', href: '#funds' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="bg-brand-600 p-2 rounded-lg text-white">
              <TrendingUp size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">Kanaram Saini</span>
              <span className="text-[10px] text-brand-600 font-bold uppercase tracking-widest mt-1">AMFI Regd. ARN-254674</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-slate-600 hover:text-brand-600 font-semibold text-sm tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all transform hover:scale-105 shadow-lg shadow-brand-500/30"
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Sign Up / Invest
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-brand-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a 
                href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-brand-600 text-white rounded-lg font-bold shadow-md"
              >
                Start Investing Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;