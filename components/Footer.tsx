import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold text-white mb-6">Kanaram Saini</h3>
            <p className="text-base leading-relaxed mb-8 text-slate-400 max-w-md">
              Empowering individuals to achieve financial freedom through strategic mutual fund investments and personalized portfolio management.
            </p>
            <div className="inline-flex items-center bg-slate-800 px-5 py-3 rounded-xl border border-slate-700">
              <span className="text-brand-400 font-bold mr-2 text-sm uppercase tracking-wide">AMFI Registered Distributor</span>
              <span className="text-white font-mono font-bold bg-slate-900 px-2 py-1 rounded">ARN-254674</span>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-500 mr-3 mt-1" />
                <span className="font-medium hover:text-white transition-colors cursor-pointer">+91 72067 70673</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-500 mr-3 mt-1" />
                <a href="mailto:Kanheya@live.com" className="font-medium hover:text-white transition-colors">Kanheya@live.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-1" />
                <span className="font-medium">India</span>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                  <a href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" target="_blank" rel="noreferrer" className="flex items-center hover:text-brand-400 transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2" /> Invest Now
                  </a>
              </li>
              <li>
                  <a href="#services" className="flex items-center hover:text-brand-400 transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2" /> Our Services
                  </a>
              </li>
              <li>
                  <a href="#funds" className="flex items-center hover:text-brand-400 transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2" /> Top Funds
                  </a>
              </li>
              <li>
                  <a href="#calculators" className="flex items-center hover:text-brand-400 transition-colors">
                    <ArrowRight className="h-3 w-3 mr-2" /> Calculators
                  </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-xs text-justify text-slate-500 leading-relaxed opacity-70">
            <strong>Disclaimer:</strong> Mutual Fund investments are subject to market risks, read all scheme related documents carefully. 
            The past performance of the mutual funds is not necessarily indicative of future performance of the schemes. 
            Kanaram Saini is an AMFI Registered Mutual Fund Distributor (ARN-254674) and not an Investment Advisor. 
            The information provided on this website is for educational purposes only and should not be construed as investment advice.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Kanaram Saini. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed with precision for financial growth.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;