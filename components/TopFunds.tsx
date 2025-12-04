import React, { useEffect, useState } from 'react';
import { TrendingUp, AlertCircle, Loader2, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { getTopPerformingFunds } from '../services/geminiService';
import { Fund } from '../types';

const TopFunds: React.FC = () => {
  const [funds, setFunds] = useState<Fund[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const data = await getTopPerformingFunds();
        setFunds(data);
      } catch (error) {
        console.error("Failed to load funds", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFunds();
  }, []);

  const getRiskColor = (risk: string) => {
    const r = risk.toLowerCase();
    if (r.includes('very high')) return 'bg-red-50 text-red-700 border-red-100';
    if (r.includes('high')) return 'bg-orange-50 text-orange-700 border-orange-100';
    if (r.includes('moderate')) return 'bg-yellow-50 text-yellow-700 border-yellow-100';
    return 'bg-blue-50 text-brand-700 border-brand-100';
  };

  return (
    <section id="funds" className="py-24 bg-white reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">Market Insights</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Top Performing Equity Funds</h2>
            <p className="text-slate-600 mt-3 max-w-2xl text-lg">
              Curated list of high-potential funds selected based on consistent past performance.
            </p>
          </div>
          <div className="px-5 py-3 bg-amber-50 border border-amber-100 text-amber-800 rounded-xl text-xs font-semibold flex items-center shadow-sm">
            <AlertCircle className="h-4 w-4 mr-2 text-amber-600" />
            Past performance is not an indicator of future returns.
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 bg-slate-50 rounded-2xl border border-slate-100">
             <div className="flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-brand-600 animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Analyzing market data...</p>
             </div>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-100">
               <div className="overflow-x-auto">
                   <table className="min-w-full divide-y divide-slate-200 bg-white">
                     <thead>
                       <tr className="bg-slate-50">
                         <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Fund Name</th>
                         <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
                         <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">3Y Returns</th>
                         <th scope="col" className="px-8 py-5 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Risk Profile</th>
                         <th scope="col" className="px-8 py-5 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       {funds.map((fund, idx) => (
                         <tr key={idx} className="hover:bg-brand-50/30 transition-colors group">
                           <td className="px-8 py-5 whitespace-nowrap">
                              <div className="text-sm font-bold text-slate-900">{fund.name}</div>
                           </td>
                           <td className="px-8 py-5 whitespace-nowrap">
                             <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                               {fund.category}
                             </span>
                           </td>
                           <td className="px-8 py-5 whitespace-nowrap">
                               <div className="flex items-center text-sm font-bold text-growth-600">
                                  <TrendingUp className="h-4 w-4 mr-1.5" />
                                  {fund.return3yr}
                               </div>
                           </td>
                           <td className="px-8 py-5 whitespace-nowrap">
                             <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full border ${getRiskColor(fund.risk)}`}>
                               {fund.risk}
                             </span>
                           </td>
                           <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
                             <a 
                               href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" 
                               target="_blank" 
                               rel="noreferrer" 
                               className="inline-flex items-center text-brand-600 hover:text-brand-800 font-bold transition-colors group-hover:translate-x-1 duration-200"
                             >
                               Invest <ArrowUpRight className="ml-1 h-4 w-4" />
                             </a>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
               </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {funds.map((fund, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-slate-900 font-bold text-lg leading-tight w-3/4">{fund.name}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${getRiskColor(fund.risk)}`}>
                      {fund.risk}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">Category</p>
                      <p className="text-sm font-semibold text-slate-700 bg-slate-50 px-2 py-1 rounded inline-block">{fund.category}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 uppercase font-bold mb-1">3Y Returns</p>
                      <div className="flex items-center justify-end text-lg font-extrabold text-growth-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {fund.return3yr}
                      </div>
                    </div>
                  </div>

                  <a 
                    href="https://zfunds.in/visiting-card/487ceaee-9660-40f5-9bac-352008e518b4" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-full py-3 bg-brand-50 text-brand-700 font-bold rounded-lg border border-brand-100 hover:bg-brand-600 hover:text-white transition-colors"
                  >
                    Start Investing <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TopFunds;
