import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai",
      comment: "Kanaram Ji has helped me plan my retirement perfectly. His advice on SIPs was a game changer for my portfolio.",
      image: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      comment: "Honest and transparent service. I started with a small SIP, and seeing the growth in 3 years is amazing. Highly recommended!",
      image: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad",
      comment: "The best part is the availability. Whenever I have a doubt about market volatility, Mr. Saini is just a call away.",
      image: "https://picsum.photos/100/100?random=3"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Happy Investors</h2>
          <p className="text-gray-600">Join our family of satisfied clients growing their wealth every day.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 relative shadow-sm border border-gray-100">
              <Quote className="h-10 w-10 text-brand-200 absolute top-6 left-6 opacity-50" />
              <p className="text-gray-700 italic relative z-10 mb-6 pt-6">"{t.comment}"</p>
              <div className="flex items-center">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="h-12 w-12 rounded-full border-2 border-brand-200"
                />
                <div className="ml-4">
                  <h4 className="text-sm font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;