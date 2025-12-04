import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, BarChart3, PieChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-50/50 to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left reveal">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-semibold mb-8 hover:shadow-md transition-shadow cursor-default">
              <span className="flex h-2.5 w-2.5 bg-growth-500 rounded-full mr-3 animate-pulse"></span>
              Managing ₹1.7 Crore+ AUM
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Smart Investing for a <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                Wealthier Future
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the power of professional mutual fund portfolio management. 
              Tailored strategies for retirement, education, and long-term wealth creation by 
              <span className="font-semibold text-slate-900"> Kanaram Saini</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact-form" 
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-1"
              >
                Request Callback
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all hover:border-brand-300 hover:text-brand-600"
              >
                Start Investing
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-4 text-slate-500 max-w-sm mx-auto lg:mx-0 border-t border-slate-200/60 pt-6">
              <div className="flex items-center">
                <ShieldCheck className="h-5 w-5 mr-3 text-brand-600" />
                <span className="font-medium text-sm">AMFI Registered</span>
              </div>
              <div className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-3 text-brand-600" />
                <span className="font-medium text-sm">Data-Driven Advice</span>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none reveal delay-200">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white z-10 transform transition-transform duration-700 group-hover:scale-[1.01]">
                <img 
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Financial Growth Analytics" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Card 1 */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-[bounce_3s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="bg-growth-100 p-2 rounded-lg">
                       <TrendingUp className="h-6 w-6 text-growth-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Returns</p>
                      <p className="text-lg font-bold text-slate-900">+18.5%</p>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 transform transition-transform hover:scale-105">
                   <div className="flex items-center gap-3">
                    <div className="bg-brand-100 p-2 rounded-lg">
                       <PieChart className="h-6 w-6 text-brand-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Portfolio</p>
                      <p className="text-lg font-bold text-slate-900">Diversified</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements behind image */}
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-slate-100 rounded-3xl -z-10"></div>
              <div className="absolute -top-5 -right-5 w-24 h-24 bg-brand-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
