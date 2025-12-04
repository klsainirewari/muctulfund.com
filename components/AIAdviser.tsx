import React, { useState } from 'react';
import { Bot, Sparkles, Send, Loader2, AlertTriangle } from 'lucide-react';
import { getFinancialAdvice } from '../services/geminiService';

const AIAdviser: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [risk, setRisk] = useState('Moderate');
  const [duration, setDuration] = useState('5-10 Years');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal) return;

    setLoading(true);
    setAdvice('');
    
    try {
      const result = await getFinancialAdvice(goal, risk, duration);
      setAdvice(result);
    } catch (error) {
      setAdvice("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden reveal">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Introduction */}
          <div className="lg:w-5/12 text-white">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-xs font-bold mb-6 tracking-wide uppercase">
              <Sparkles className="h-3 w-3 mr-2" />
              AI Powered Planning
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Get Instant Investment Strategy from our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">AI Advisor</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Not sure where to invest? Describe your financial goal, and our smart assistant will suggest the right asset allocation and fund categories tailored to your risk profile.
            </p>
            
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <Bot className="h-10 w-10 text-brand-400 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">How it works</h4>
                  <p className="text-slate-400 text-sm">
                    1. Enter your goal (e.g., "Retirement corpus of 2 Crores").<br/>
                    2. Select your risk tolerance.<br/>
                    3. Get an instant category-based recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Tool */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-brand-900/50">
              
              {!advice ? (
                <form onSubmit={handleGetAdvice} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">What is your financial goal?</label>
                    <textarea
                      required
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      placeholder="e.g., I want to save for my daughter's wedding in 2030..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none text-slate-700 placeholder:text-slate-400 min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Risk Appetite</label>
                      <select
                        value={risk}
                        onChange={(e) => setRisk(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none bg-white text-slate-700"
                      >
                        <option value="Conservative">Low (Conservative)</option>
                        <option value="Moderate">Moderate (Balanced)</option>
                        <option value="Aggressive">High (Aggressive)</option>
                        <option value="Very Aggressive">Very High (Growth)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Time Horizon</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all outline-none bg-white text-slate-700"
                      >
                        <option value="1-3 Years">Short Term (1-3 Years)</option>
                        <option value="3-5 Years">Medium Term (3-5 Years)</option>
                        <option value="5-10 Years">Long Term (5-10 Years)</option>
                        <option value="10+ Years">Very Long Term (10+ Years)</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Analyzing Market Data...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" /> Generate Investment Plan
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-fade-in-up">
                  <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <Bot className="h-6 w-6 text-brand-600" /> AI Recommendation
                    </h3>
                    <button 
                      onClick={() => setAdvice('')}
                      className="text-sm font-semibold text-brand-600 hover:text-brand-800"
                    >
                      Ask New Question
                    </button>
                  </div>
                  
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-line mb-6">
                    {advice}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100 text-xs text-amber-800">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <p>
                      <strong>Disclaimer:</strong> This advice is generated by AI based on general market principles. Mutual fund investments are subject to market risks. Please consult Kanaram Saini (ARN-254674) before making any actual investment decisions.
                    </p>
                  </div>

                  <div className="mt-6 text-center">
                    <a 
                       href="https://wa.me/917206770673"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Discuss this plan on WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdviser;
