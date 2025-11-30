import React from 'react';
import { PieChart, TrendingUp, DollarSign, Umbrella, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "SIP Investment",
      description: "Build wealth systematically with small monthly investments starting as low as ₹500. Harness the power of compounding.",
      icon: 'trending-up'
    },
    {
      title: "SWP Solutions",
      description: "Generate a steady monthly income from your corpus. Perfect for retirement planning and regular cash flow needs.",
      icon: 'dollar-sign'
    },
    {
      title: "Tax Saving (ELSS)",
      description: "Save up to ₹46,800 in taxes under Section 80C with equity exposure and the lowest lock-in period of 3 years.",
      icon: 'shield'
    },
    {
      title: "Portfolio Review",
      description: "Get a professional check-up of your existing investments. We optimize for better risk-adjusted returns.",
      icon: 'pie-chart'
    }
  ];

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'trending-up': return <TrendingUp className="h-7 w-7 text-white" />;
      case 'dollar-sign': return <DollarSign className="h-7 w-7 text-white" />;
      case 'shield': return <Umbrella className="h-7 w-7 text-white" />;
      default: return <PieChart className="h-7 w-7 text-white" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Comprehensive Wealth Solutions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We provide end-to-end financial services designed to align with your life goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-soft hover:-translate-y-2 border border-slate-100 hover:border-slate-200">
              <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-500/20 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center text-brand-600 font-bold text-sm hover:text-brand-700 transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;