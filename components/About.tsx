import React from 'react';
import { Award, CheckCircle, User, Target, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white reveal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 z-10">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Kanaram Saini - Mutual Fund Distributor"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-90">AMFI Registered</p>
                <p className="text-xl font-bold">Kanaram Saini</p>
              </div>
            </div>
            
            {/* Floating Experience Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">AUM Managed</p>
                  <p className="text-2xl font-extrabold text-slate-900">₹1.7 Crore+</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-bold mb-6 border border-brand-100">
              <User className="h-4 w-4 mr-2" />
              About Your Financial Partner
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Helping You Build Wealth With <span className="text-brand-600">Integrity & Expertise</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Hello, I am <strong>Kanaram Saini</strong> (ARN-254674). As a dedicated Mutual Fund Distributor, my mission is to simplify financial planning for Indian families. I don't just recommend funds; I build comprehensive investment strategies tailored to your unique life goals.
            </p>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
              <h4 className="flex items-center text-lg font-bold text-slate-900 mb-3">
                <Target className="h-5 w-5 text-brand-600 mr-2" />
                Investment Philosophy
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                "I believe in long-term wealth creation through disciplined investing. My focus is on asset allocation, risk management, and selecting high-quality funds that have stood the test of time, rather than chasing short-term market trends."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-growth-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-slate-900 font-bold text-sm">AMFI Registered</span>
                  <span className="text-slate-500 text-xs">Certified Distributor</span>
                </div>
              </div>
               <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-growth-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-slate-900 font-bold text-sm">Personalized Advisory</span>
                  <span className="text-slate-500 text-xs">Tailored to your goals</span>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-growth-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-slate-900 font-bold text-sm">Transparency</span>
                  <span className="text-slate-500 text-xs">No hidden charges</span>
                </div>
              </div>
               <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-growth-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-slate-900 font-bold text-sm">Review & Rebalancing</span>
                  <span className="text-slate-500 text-xs">Regular portfolio checks</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
               <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Registration</p>
                  <p className="text-slate-900 font-mono font-bold bg-slate-100 px-2 py-1 rounded inline-block">ARN-254674</p>
               </div>
               <div className="h-10 w-px bg-slate-200"></div>
               <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Experience</p>
                  <div className="flex items-center text-slate-900 font-bold">
                    <BarChart className="h-4 w-4 mr-1 text-brand-600" />
                    Years of Trust
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
