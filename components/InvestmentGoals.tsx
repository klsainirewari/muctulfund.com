import React from 'react';
import { GraduationCap, Palmtree, Coins, Home, ArrowRight, Target } from 'lucide-react';

const InvestmentGoals: React.FC = () => {
  const goals = [
    {
      title: "Retirement Planning",
      description: "Secure your golden years with a stress-free corpus. Start early to enjoy the power of compounding and retire wealthy.",
      icon: Palmtree,
      link: "#calculators",
      cta: "Calculate Corpus"
    },
    {
      title: "Child's Education",
      description: "Give your children the best education without financial worry. Build a dedicated fund for their college dreams.",
      icon: GraduationCap,
      link: "#calculators",
      cta: "Plan SIP"
    },
    {
      title: "Wealth Creation",
      description: "Beat inflation and grow your capital over the long term with high-growth equity mutual funds tailored for you.",
      icon: Coins,
      link: "#funds",
      cta: "View Top Funds"
    },
    {
      title: "Dream Home",
      description: "Planning to buy a house? Accumulate the down payment systematically through smart investments.",
      icon: Home,
      link: "#contact-form",
      cta: "Get Advice"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-full mb-3 border border-brand-100">
             <Target className="h-5 w-5 text-brand-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Plan for Your Life Goals</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Every investment should have a purpose. Select a goal below to start your personalized financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50 rounded-bl-full -mr-10 -mt-10 opacity-50 group-hover:scale-110 transition-transform"></div>
              
              <div className="w-14 h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center mb-6 text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors relative z-10">
                <goal.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{goal.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed relative z-10 h-20">
                {goal.description}
              </p>
              
              <a href={goal.link} className="inline-flex items-center text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors relative z-10 group/link">
                {goal.cta} <ArrowRight className="ml-1 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentGoals;
