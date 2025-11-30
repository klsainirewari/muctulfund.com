import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const Calculators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sip' | 'swp'>('sip');

  // SIP State
  const [sipAmount, setSipAmount] = useState(5000);
  const [sipRate, setSipRate] = useState(12);
  const [sipYears, setSipYears] = useState(10);
  const [sipResult, setSipResult] = useState({ invested: 0, returns: 0, total: 0 });

  // SWP State
  const [swpInvested, setSwpInvested] = useState(1000000);
  const [swpWithdrawal, setSwpWithdrawal] = useState(6000);
  const [swpRate, setSwpRate] = useState(8);
  const [swpYears, setSwpYears] = useState(10);
  const [swpResult, setSwpResult] = useState({ totalWithdrawn: 0, finalValue: 0 });

  useEffect(() => {
    // Calculate SIP
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const invested = sipAmount * months;
    const total = sipAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const returns = total - invested;
    setSipResult({ invested, returns, total });
  }, [sipAmount, sipRate, sipYears]);

  useEffect(() => {
    // Calculate SWP
    const monthlyRate = swpRate / 12 / 100;
    const months = swpYears * 12;
    // FV = P(1+r)^n - W * ((1+r)^n - 1)/r
    let finalVal = swpInvested * Math.pow(1 + monthlyRate, months) - 
                   swpWithdrawal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    
    if (finalVal < 0) finalVal = 0;
    
    const totalWithdrawn = swpWithdrawal * months;
    setSwpResult({ totalWithdrawn, finalValue: finalVal });
  }, [swpInvested, swpWithdrawal, swpRate, swpYears]);

  const formatCurrency = (val: number) => {
      return new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 0
      }).format(val);
  };

  const InputSlider = ({ label, value, setValue, min, max, step, prefix = '', suffix = '' }: any) => (
    <div className="mb-8">
      <div className="flex justify-between mb-3">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <div className="bg-brand-50 text-brand-700 px-3 py-1 rounded-md text-sm font-bold border border-brand-100">
          {prefix}{value.toLocaleString()}{suffix}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 hover:accent-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-opacity-50 transition-all"
      />
    </div>
  );

  return (
    <section id="calculators" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-5 text-brand-600 border border-slate-100">
             <Calculator className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Financial Calculators</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Visualize your financial growth. Use our tools to estimate returns and plan your investments effectively.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-white overflow-hidden">
            {/* Tabs */}
            <div className="flex p-2 bg-slate-100/50 gap-2">
                <button 
                  onClick={() => setActiveTab('sip')}
                  className={`flex-1 py-3 rounded-xl text-center font-bold text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'sip' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <TrendingUp className="w-5 h-5" />
                    SIP Calculator
                </button>
                <button 
                  onClick={() => setActiveTab('swp')}
                  className={`flex-1 py-3 rounded-xl text-center font-bold text-base transition-all flex items-center justify-center gap-2 ${activeTab === 'swp' ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500 hover:bg-white/50'}`}
                >
                    <DollarSign className="w-5 h-5" />
                    SWP Calculator
                </button>
            </div>

            <div className="p-8 md:p-12">
                {activeTab === 'sip' ? (
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <InputSlider 
                                label="Monthly Investment" 
                                value={sipAmount} 
                                setValue={setSipAmount} 
                                min={500} max={100000} step={500} 
                                prefix="₹" 
                            />
                            <InputSlider 
                                label="Expected Return Rate (p.a)" 
                                value={sipRate} 
                                setValue={setSipRate} 
                                min={1} max={30} step={0.5} 
                                suffix="%" 
                            />
                            <InputSlider 
                                label="Time Period" 
                                value={sipYears} 
                                setValue={setSipYears} 
                                min={1} max={40} step={1} 
                                suffix=" Years" 
                            />
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center uppercase tracking-wider">SIP Projection</h3>
                            <div className="space-y-5">
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">Invested Amount</span>
                                    <span className="font-bold text-slate-900 text-lg">{formatCurrency(sipResult.invested)}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">Est. Wealth Gain</span>
                                    <span className="font-bold text-growth-600 text-lg">+{formatCurrency(sipResult.returns)}</span>
                                </div>
                                <div className="bg-brand-50 rounded-xl p-4 flex justify-between items-center mt-2 border border-brand-100">
                                    <span className="text-lg font-bold text-brand-900">Total Value</span>
                                    <span className="text-2xl font-extrabold text-brand-600">{formatCurrency(sipResult.total)}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <a 
                                  href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block w-full text-center py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5"
                                >
                                    Start SIP Now
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <div>
                            <InputSlider 
                                label="Total Investment" 
                                value={swpInvested} 
                                setValue={setSwpInvested} 
                                min={100000} max={10000000} step={10000} 
                                prefix="₹" 
                            />
                            <InputSlider 
                                label="Withdrawal Per Month" 
                                value={swpWithdrawal} 
                                setValue={setSwpWithdrawal} 
                                min={1000} max={100000} step={500} 
                                prefix="₹" 
                            />
                            <InputSlider 
                                label="Expected Return Rate (p.a)" 
                                value={swpRate} 
                                setValue={setSwpRate} 
                                min={1} max={30} step={0.5} 
                                suffix="%" 
                            />
                            <InputSlider 
                                label="Time Period" 
                                value={swpYears} 
                                setValue={setSwpYears} 
                                min={1} max={30} step={1} 
                                suffix=" Years" 
                            />
                        </div>
                        <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center uppercase tracking-wider">SWP Projection</h3>
                            <div className="space-y-5">
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">Total Investment</span>
                                    <span className="font-bold text-slate-900 text-lg">{formatCurrency(swpInvested)}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                                    <span className="text-slate-500 font-medium">Total Withdrawn</span>
                                    <span className="font-bold text-brand-600 text-lg">{formatCurrency(swpResult.totalWithdrawn)}</span>
                                </div>
                                <div className="bg-green-50 rounded-xl p-4 flex justify-between items-center mt-2 border border-green-100">
                                    <span className="text-lg font-bold text-green-900">Final Value</span>
                                    <span className="text-2xl font-extrabold text-green-600">{formatCurrency(swpResult.finalValue)}</span>
                                </div>
                            </div>
                            <div className="mt-8">
                                <a 
                                  href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block w-full text-center py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 transform hover:-translate-y-0.5"
                                >
                                    Plan SWP Now
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Calculators;